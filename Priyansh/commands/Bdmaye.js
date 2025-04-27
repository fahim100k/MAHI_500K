// modules/commands/bdmeya.js

module.exports.config = {
  name: "bdmeya",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Fahim x ChatGPT",
  description: "Random Bangladeshi Mayer Emotion Photo",
  commandCategory: "Random-IMG",
  usages: "bdmeya",
  cooldowns: 3,
  dependencies: {
    "axios": "",
    "fs-extra": ""
  }
};

module.exports.run = async function({ api, event, args }) {
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  const path = __dirname + `/cache/bdmeya.jpg`;

  const images = [
    "https://i.imgur.com/lUuB0IZ.jpg",
    "https://i.imgur.com/CzX14Ey.jpg",
    "https://i.imgur.com/ztQGhkF.jpg",
    "https://i.imgur.com/6K6dJXD.jpg",
    "https://i.imgur.com/7sISYzr.jpg",
    "https://i.imgur.com/BGJSF9y.jpg",
    "https://i.imgur.com/ZNOd1yQ.jpg",
    "https://i.imgur.com/dNmjpkP.jpg",
    "https://i.imgur.com/b0D8xIq.jpg",
    "https://i.imgur.com/Jp7McSC.jpg"
    // চাইলে আরো ইমেজ লিঙ্ক যোগ করতে পারো
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  try {
    const response = await axios.get(random
