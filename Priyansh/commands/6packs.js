module.exports.config = {
  name: "6mui",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Random Bangladeshi cute girl photos",
  commandCategory: "Random-IMG",
  usages: "6mui",
  cooldowns: 2,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async({api, event, args, Users, Threads, Currencies}) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  var link = [
    "https://i.imgur.com/abcd123.jpg",  // Replace with actual URLs of Bangladeshi cute girls
    "https://i.imgur.com/efgh456.jpg",
    "https://i.imgur.com/ijkl789.jpg",
    "https://i.imgur.com/mnop012.jpg",
    "https://i.imgur.com/qrst345.jpg",
    "https://i.imgur.com/uvwx678.jpg",
    "https://i.imgur.com/yzaa901.jpg",
    "https://i.imgur.com/bbcd234.jpg",
    "https://i.imgur.com/defg567.jpg",
    "https://i.imgur.com/ghij890.jpg"
  ];

  var callback = () => api.sendMessage({body: `এটা তো কিউট বাংলাদেশের মেয়ে! দেখো!`, attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/1.jpg")).on("close", () => callback());
};
