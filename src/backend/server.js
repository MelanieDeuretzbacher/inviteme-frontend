const app = require('./backendApp');

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`InviteMe running on port: ${PORT} 🎉🎉🎉`);
});

module.exports = server;