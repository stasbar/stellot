import jwt from 'jsonwebtoken';

const secretKey = process.env.SESSION_JWT_SECRET;
const audience = 'Stellot';
const issuer = 'Stellot';
if (!secretKey) {
  throw new Error('SESSION_JWT_SECRET must be set')
}

export function createSessionToken(votingId: string, userId: string): string {
  return jwt.sign({ userId, votingId }, secretKey!, { audience, issuer })
}

export function verifyAndGetUserId(token: string): { userId: string, votingId: string } {
  const encoded = jwt.verify(token, secretKey!, { audience, issuer });
  // @ts-ignore
  return { userId: encoded.userId, votingId: encoded.votingId };
}
