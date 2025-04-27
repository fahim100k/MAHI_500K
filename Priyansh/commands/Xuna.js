// modules/commands/xuna.js

module.exports.config = {
  name: "xuna",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Fahim x ChatGPT",
  description: "Random Bangladeshi Mother Emotion Photo",
  commandCategory: "Random-IMG",
  usages: "xuna",
  cooldowns: 3,
  dependencies: {
    "axios": "",
    "fs-extra": ""
  }
};

module.exports.run = async function({ api, event, args }) {
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  const path = __dirname + `/cache/xuna.jpg`;

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
    // You can add more images here
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  try {
    // Downloading the image
    const response = await axios.get(randomImage, { responseType: "stream" });
    const writer = fs.createWriteStream(path);

    response.data.pipe(writer);

    writer.on('finish', () => {
      // Sending the image
      api.sendMessage(
        {
          body: "Here is an emotional moment for you...\n\n- Your friend Fahim",
          attachment: fs.createReadStream(path)
        },
        event.threadID,
        () => fs.unlinkSync(path) // Delete the file after sending
      );
    });

    writer.on('error', (err) => {
      // Handling error
      console.error(err);
      api.sendMessage("There was an issue sending the image. Please try again.", event.threadID);
    });

  } catch (error) {
    // Handling Axios or internet issues
    console.error(error);
    api.sendMessage("There seems to be an internet issue or something went wrong.", event.threadID);
  }
};
