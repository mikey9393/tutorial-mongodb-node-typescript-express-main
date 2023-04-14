import express from 'express';
import cors from 'express'; 
const router = express.Router();
router.use(cors());

import testData from '../my-test-data.json';

// Need an endpoint to retriev the list of contests. 
// router.get("/api/contests")
router.get("/contests", (req, res) => {
  // get data from MongoDB
  res.send({contests: testData});
});


export default router;