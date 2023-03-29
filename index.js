import express from 'express';

const PORT = defaultPort(process.env.PORT || 3000);
const app = express();

function defaultPort(value) {
  const port = parseInt(value, 10);

  if(isNaN(port)) {
    return value
  } else if (port >= 0 ) {
    return port;
  }

  return false;
}

app.enable('trust proxy');

app.get('/',(request, response) => {
  const ipAddress = request.ip;
  console.log(ipAddress);
  response.json({message: `${ipAddress}`})
});

app.listen(PORT, (err) => {
  if(err) console.log(err);
  console.log(`App listening on port ${PORT}`)
});
