const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'nmy370717@gmail.com'
global.github = 'https://github.com/GoodzyGood
global.location = 'Nigeria'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '2348054601471'
global.devs = '2348054601471';
global.website = 'https://king-session.vercel.app' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/a6b9bbde7feaa92c69c7b.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'Goodzy' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'GoodzyGood' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? "KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia080ZU4venVVWkR0TDg2SDBrY0M3SFNMYlRmQnphaEZVN09xdzlCQUJVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajNUWDV3d3FSMldYQnE5TTg2MFdDS0ZxU1NVWE8yZSsySU9QM1g5a3RBTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTHRtbFRxY3ZMNjNqRlVJdzFXUWRteXdOUC84N1Y5QWdaZGZCbEZBSldVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEWFhXV3hYNzBodU9LRzBTY3dwY21OazJUZzJUZXFvdjU3UjYxTGZxSlVZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjREMVJjWWtwS3ZPdEJ2Y1JhNHQyN2lydDA4T0orT01hY1NaYmU0bW1mV3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZSWVJsaVlqdFgwSmNlc0ltOUVRRnhOZlk1S3ZjTDNSMTk2ejlydklYQWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUhpeGh4Q3JFKzNPNlBBK1J0MTdlbmwyUE9JT1RwVkJWSVhIdHJhR05sbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFNhcFhkSU8xZm9GU1FyM3ZCV05uVUZXNHpUemZ1d1RJRmt2NCs3REhBMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRhUExybmJ4VzkwdkdXdk51ZUNQajgyby8xdHJaWDhUQU5yYWl1VGZUeWhJK2lhN0xYMGZDK1ZKM0F5QTRnNG8zdEtoNWF6VTMxZ0ZYcnRjVUpXVGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM0LCJhZHZTZWNyZXRLZXkiOiJLYU9GY3pITjRndXZtbVNwNXpWbXVtN3pBZmRVR3NWSmxTbnZJY2hLc2ZJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzMWFBcVJURlRpS0JmSnUzRzgyQ3hBIiwicGhvbmVJZCI6IjM5ZDUzZjA1LTZmNmYtNDUyOS1hMzcyLTE5MzFhMTRjOWQ4OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0cDdscElaMC8rUG5XYmZQM0xDZmVueHM1S1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTdYZEhhdUExWlpIeVdWa3ZYRWdldHNGbENJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVGNE1QUThNIiwibWUiOnsiaWQiOiIyMzQ4MDU0NjAxNDcxOjJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ082YTJaY0RFSnpPdTdJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjdMRS90RkFmdzNlczMwSjBCaDU5bENhcmFFMVJ1ZGhYdzJUVGdQRVc2Z3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkkzWU1KdzN0NDFLNjlDNEdBWkxieW4zemtCL1J1WEhzZ2tQZytlQjMvREcrcVBWTDdONkRhUjBpQ0xGbENoWTVBVDB1YldlaWxYOFlxVmxjd2dEMERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0QW8zRGRwc0xLYXpvTU5ha0RKazVyaDRrZU1nS25Oa3A1WmxtOUVzM1lzZHhKN2RRc0FRK3NSKzBJOFl5Rm9QdG1ZeEMrelhNNWduNnJLNXNyaEFnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNTQ2MDE0NzE6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJleXhQN1JRSDhOM3JOOUNkQVllZlpRbXEyaE5VYm5ZVjhOazA0RHhGdW9NIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE2NDQ3MDE4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdBbiJ9": process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'GoodzyGood' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'GoodzyGood' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'fuck,for sale' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? 'private' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? "true" : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.2.9' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'admins' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
