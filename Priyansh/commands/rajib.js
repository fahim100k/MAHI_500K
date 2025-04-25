const axios = require("axios")
const fs = require("fs-extra")
module.exports.config = {
  name: "alldl",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Shaon",
  description: "Send a random sad video",
  commandCategory: "media",
  usages: "",
  cooldowns: 5
};

module.exports.handleEvent = async function ({ api, event }) {
  let shaon = event.body ? event.body : '';
  
  const apis = await axios.get('https://raw.githubusercontent.com/shaonproject/Shaon/main/api.json')
  const Shaon1 = apis.data.api2
    if (
        shaon.startsWith("https://vt.tiktok.com") ||
      shaon.startsWith("https://www.tiktok.com/") ||
      shaon.startsWith("https://www.facebook.com") ||
      shaon.startsWith("https://www.instagram.com/") ||
      shaon.startsWith("https://youtu.be/") ||
      shaon.startsWith("https://youtube.com/") ||
      shaon.startsWith("https://x.com/") ||
      shaon.startsWith("https://youtube.com/")
|| shaon.startsWith("https://www.instagram.com/p/") ||
      shaon.startsWith("https://pin.it/") ||
      shaon.startsWith("https://twitter.com/") ||
      shaon.startsWith("https://vm.tiktok.com") ||
      shaon.startsWith("https://fb.watch")
  ) {
    try {
      api.sendMessage("🔰 downloading Video please wait...", event.threadID, event.messageID);

      const path = __dirname + `/cache/fb_${event.threadID}_${Date.now()}.mp4`;

      const res = await axios.get(`${Shaon1}/alldl?url=${encodeURIComponent(shaon)}`);
      if (!res.data || !res.data.videos[0].url) {
        api.sendMessage("Failed to retrieve video. Please check the link and try again.", event.threadID, event.messageID);
        return;
      }

      const videoBuffer = (await axios.get(res.data.videos[0].url, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(path, Buffer.from(videoBuffer, 'binary'));

      api.sendMessage({
        body: `✅Successfully downloaded the video!🎀`,
        attachment: fs.createReadStream(path)
      }, event.threadID, () => fs.unlinkSync(path), event.messageID);

    } catch (error) {
      api.sendMessage(`An error occurred: ${error.message}`, event.threadID, event.messageID);
    }
  }
};

exports.run = function ({ api, event }) {
  api.sendMessage("Please provide a valid video link.", event.threadID, event.messageID);
};