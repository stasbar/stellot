import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import crypto from 'crypto';

import {
  isAlreadyInitedSession,
  createSession,
  ChallengeRequest,
  storeAndPickLuckyBatch,
  proofChallenges,
  Proof,
} from './stellar';

const debug = require('debug')('stellar-voting:app');

const app = express();
export default app;

app.use(logger('dev'));
app.use(express.json({ limit: '0.5mb' }));
app.use(express.urlencoded({ limit: '0.5mb', extended: false }));
app.use(cookieParser());
if (!process.env.WEBAPP_DIR) {
  throw new Error('Could not find webapp dir');
}
app.use(express.static(process.env.WEBAPP_DIR!));

app.post('/api/init', async (req, res) => {
  const { tokenId } = req.body;
  debug(`tokenId: ${tokenId}`);
  const isAlreadyInited = isAlreadyInitedSession(tokenId);
  if (isAlreadyInited) {
    return res.status(405).send('Session already inited');
  }
  const session = createSession(tokenId);
  return res.status(200).send(session);
});

app.post('/api/getChallenges', async (req, res) => {
  const { tokenId, blindedTransactionBatches }
    : { tokenId: string, blindedTransactionBatches: ChallengeRequest } = req.body;
  debug(`tokenId: ${tokenId}`);
  const luckyBatchIndex = storeAndPickLuckyBatch(tokenId, blindedTransactionBatches);
  return res.status(200).send({ luckyBatchIndex });
});

app.post('/api/proofChallenges', async (req, res) => {
  const { tokenId, proofs }: { tokenId: string, proofs: Proof[] } = req.body;
  debug(`tokenId: ${tokenId}`);
  try {
    const signedBatch = proofChallenges(tokenId, proofs);
    return res.status(200).send(signedBatch);
  } catch (e) {
    console.error(e);
    return res.status(405).send(e.message);
  }
});


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
