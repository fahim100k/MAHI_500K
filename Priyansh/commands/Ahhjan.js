// modules/commands/mim.js

module.exports.config = {
  name: "mim",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Fahim x ChatGPT",
  description: "Random Bangladeshi Mayer Emotion Photo",
  commandCategory: "Random-IMG",
  usages: "mim",
  cooldowns: 3,
  dependencies: {
    "axios": "",
    "fs-extra": ""
  }
};

module.exports.run = async function({ api, event, args }) {
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  const path = __dirname + `/cache/mim.jpg`;

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
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  try {
    const response = await axios.get(randomImage, { responseType: "stream" });
    const writer = fs.createWriteStream(path);

    response.data.pipe(writer);

    writer.on('finish', () => {
      api.sendMessage(
        {
          body: "তোমার জন্য মায়ায় ভরা একটি মুহূর্ত পাঠালাম...\n\n- তোমার বন্ধু ফাহিম",
          attachment: fs.createReadStream(path)
        },
        event.threadID,
        () => fs.unlinkSync(path)
