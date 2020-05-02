import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import crypto from 'crypto';
import errorhandler from 'errorhandler';
import path from 'path';
import router from './routes'

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.set('trust proxy', true)
app.use(logger('dev'));
app.use(express.json({ limit: '0.5mb' }));
app.use(express.urlencoded({ limit: '0.5mb', extended: false }));
app.use(cookieParser());
if (!process.env.WEBAPP_DIR) {
  throw new Error('Could not find webapp dir');
}
app.use(express.static(process.env.WEBAPP_DIR!));
if (!isProduction) {
  app.use(errorhandler());
}
app.get('/health', (req, res) => res.sendStatus(200).end());
app.get('/myIp', (req, res) => {
  const { ip, ips } = req
  const { remoteAddress } = req.connection
  const forwarded = req.headers['X-Forwarded-For'] || req.connection.remoteAddress;
  const cloudFlareIp = req.headers['cf-connecting-ip'] || req.connection.remoteAddress;
  console.log({ ip, ips, remoteAddress, forwarded, cloudFlareIp })
  res.send({ ip, ips, remoteAddress: req.connection.remoteAddress, forwarded, cloudFlareIp })
});
app.use(router);

// Mock of Authorization Provider
app.post('/api/login', (req, res) => {
  const { login, password } = req.body;
  if (!login || !password) {
    return res.sendStatus(400).end();
  }
  return res
    .json({
      userId: crypto
        .createHmac('sha256', process.env.ISSUE_SECRET_KEY!)
        .update(login)
        .digest('hex')
        .substring(0, 16),
    })
    .end();
});
app.get('*', (req, res) => {
  res.sendFile(path.join(process.env.WEBAPP_DIR!, '/index.html'));
});

export class HttpError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new HttpError('Not Found', 404);
  next(err);
});

// / error handlers


app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
// development will print stacktrace
// production error handler no stacktraces leaked to user
  if (!isProduction) {
    console.log(err.stack);
  }
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: !isProduction ? err : {},
    },
  });
});


export default app;
