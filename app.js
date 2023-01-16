const { App } = require('@slack/bolt');
require('dotenv').config()


const app = new App({
  token: process.env.GEITEVANN_BOT_TOKEN,
  signingSecret: process.env.GEITEVANN_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.GEITEVANN_APP_TOKEN,
  port: process.env.PORT || 3000
});


app.message('vann', async ({message, say}) => {
  await say("Sa noen vann?");
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Geitevann is running!');
})();