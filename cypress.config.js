const { defineConfig } = require("cypress");
const dotenvPlugin = require('cypress-dotenv');

module.exports = defineConfig({
  video: true,
  videoCompression: true,
  videoCompression: 15,
  screenshotOnRunFailure:true,
  trashAssetsBeforeRuns:true,
  
  projectId: 'vgosqs',
  e2e: {
    setupNodeEvents(on, config) {
      config = dotenvPlugin(config);
    },
  },
});
