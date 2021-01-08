import server from './server'

import {envConfig} from './shared/environment/environment'

const port = envConfig.port

const servidorLoprado = new server().express

servidorLoprado.listen(port, () => {
    console.log(`O Servidor está rodando na porta ${port}`)
})
