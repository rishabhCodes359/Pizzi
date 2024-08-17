const express = require("express");
const router = express.Router();
const cors = require("cors");
const { test, registerUser,loginUser } = require("../controllers/authControllers");
const { initiatePayment ,capturePayment } = require("../controllers/paymentControllers");

router.use(cors({
  origin: 'https://pizzeria-gilt.vercel.app',
  credentials: true, 
}));

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);

router.post('/payment/initiate', initiatePayment);
router.post('/payment/capture', capturePayment);

module.exports = router;
