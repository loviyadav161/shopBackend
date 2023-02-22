const { app, PORT } = require("./config/config");
const bootstrap = async () => {
  try {
    app.listen(PORT, async () => {
      console.log(`Server is running ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
bootstrap();