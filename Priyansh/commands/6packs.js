module.exports.config = {
  name: "dp",
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
    "https://i.imgur.com/IXbmFeC.jpeg",
    "https://i.imgur.com/N4WIYHj.jpeg",
    "https://i.imgur.com/3hRlpV3.jpeg",
    "https://i.imgur.com/pG8Co9M.jpeg",
    "https://i.imgur.com/mhCOXbq.jpeg",
    "https://i.imgur.com/3qv0nwM.jpeg",
    "https://i.imgur.com/62hAtfz.jpeg",
    "https://i.imgur.com/eL3vjXE.jpeg",
    "https://i.imgur.com/ijihf8s.jpeg"
  ];

  var callback = () => api.sendMessage({body: `এটা তো কিউট বাংলাদেশের মেয়ে! দেখো!`, attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/1.jpg")).on("close", () => callback());
};
