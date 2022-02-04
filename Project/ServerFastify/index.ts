import fastify from "fastify"


const server = fastify()

server.register(require('fastify-cors'), { 
  origin: true
})

const comp = [
    {id: 1, text:"hi"},
    {id: 2, text:"fuck"},
    {id: 3, text:"man"},
    {id: 4, text:"ok?"},
];

server.get('/posts', async (request, reply) => {
  console.log("Request")
  return comp;
})

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})