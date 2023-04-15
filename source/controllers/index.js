export const requestIp = ('/', (request, response) => {
  const ip = request.ip;
  response.json({message: ip});
});
