import { fastify } from "fastify";

const app = fastify()

app.get('/', () =>{
    return "olá mundo"
})

app.listen({
    port: 3333,
}).then(() =>{
    console.log("Servidor rodando")
})