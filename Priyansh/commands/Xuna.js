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
  
  // cache ফোল্ডার তৈরি নিশ্চিত করা
  const cachePath = __dirname + '/cache';
  if (!fs.existsSync(cachePath)) {
      fs.mkdirSync(cachePath);  // ফোল্ডার তৈরি হবে যদি না থাকে
  }

  const path = cachePath + `/xuna.jpg`;

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
    // আরও ছবি এখানে যোগ করতে পারো
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  try {
    // ছবি ডাউনলোড করা হচ্ছে
    const response = await axios.get(randomImage, { responseType: "stream" });
    const writer = fs.createWriteStream(path);

    response.data.pipe(writer);

    writer.on('finish', () => {
      // ছবি পাঠানো হচ্ছে
      api.sendMessage(
        {
          body: "এটি আপনার জন্য একটি আবেগপূর্ণ মুহূর্ত...\n\n- আপনার বন্ধু ফাহিম",
          attachment: fs.createReadStream(path)
        },
        event.threadID,
        () => fs.unlinkSync(path) // পাঠানোর পর ছবি মুছে ফেলা হবে
      );
    });

    writer.on('error', (err) => {
      // এরর হ্যান্ডলিং
      console.error('Error downloading the image:', err);
      api.sendMessage("ছবি পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।", event.threadID);
    });

  } catch (error) {
    // Axios বা ইন্টারনেট সমস্যা হ্যান্ডলিং
    console.error('Error fetching the image:', error);
    api.sendMessage("ইন্টারনেটের সমস্যা অথবা কিছু ভুল হয়েছে। দয়া করে আবার চেষ্টা করুন।", event.threadID);
  }
};
