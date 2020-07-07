const { Router } = require("express");
const router = Router();
const webpush = require("../webpush");

let pushSubscripton;

//Route for can subscription
router.post("/subscription", async (req, res) => {
  pushSubscripton = req.body;
  console.log(pushSubscripton);
  // Server's Response
  res.status(201).json();
});

//Route for can sent the new-message or the Notification Push
router.post("/new-message", async (req, res) => {
  const { message , title ,icon ,image  } = req.body;
  // Payload Notification
  const payload = JSON.stringify({
    message,
    title,
    icon,
    image
  });
  res.status(200).json();
  
  try {
    await webpush.sendNotification(pushSubscripton, payload);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;