import awsServerlessExpress from "aws-serverless-express";
import { app } from "./source/app.js"

class DefaultPort {
  constructor(value) {
    this.value = value;
  }

  verifyPort() {
    const port = parseInt(this.value, 10);

    if(isNaN(port)) {
      return this.value
    } else if (port >= 0) {
      return port;
    }

    return false;
  }
}

const PORT = new DefaultPort(process.env.PORT || 3000);

// app.listen(PORT.verifyPort(), (err) => {
//   if(err) console.log(err);
//   console.log(`App listening on port ${PORT.verifyPort()}`);
// });

const server = awsServerlessExpress.createServer(app);
export const handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
