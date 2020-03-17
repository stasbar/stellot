import express from 'express';
import { votingExists } from '../../database/database';
import {
  ChallengeRequest,
  createSession,
  isAlreadyInitedSession,
  Proof,
  proofChallenges,
  storeAndPickLuckyBatch,
} from '../../stellar';

const debug = require('debug')('stellar-voting:app');

const router = express.Router();

router.post('/init', async (req, res) => {
  const { tokenId, votingId } = req.body;
  debug(`tokenId: ${tokenId}`);
  debug(`votingId: ${votingId}`);
  const isAlreadyInited = isAlreadyInitedSession(tokenId, votingId);
  if (isAlreadyInited) {
    return res.status(405).send('Session already inited');
  }
  const voting = await votingExists(votingId);
  if (!voting) {
    return res.status(404).send(`Voting with id: ${votingId} not found`);
  }
  const session = createSession(tokenId, votingId);
  return res.status(200).send(session);
});

router.post('/getChallenges', async (req, res) => {
  const {
    tokenId,
    blindedTransactionBatches,
  }: { tokenId: string; blindedTransactionBatches: ChallengeRequest } = req.body;
  debug(`tokenId: ${tokenId}`);
  const luckyBatchIndex = storeAndPickLuckyBatch(tokenId, blindedTransactionBatches);
  return res.status(200).send({ luckyBatchIndex });
});

router.post('/proofChallenges', async (req, res) => {
  const { tokenId, proofs }: { tokenId: string; proofs: Proof[] } = req.body;
  debug(`tokenId: ${tokenId}`);
  try {
    const signedBatch = proofChallenges(tokenId, proofs);
    return res.status(200).send(signedBatch);
  } catch (e) {
    console.error(e);
    return res.status(405).send(e.message);
  }
});

export default router;
