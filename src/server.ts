import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes'

class Server{
	public express: express.Application

	constructor(){
		this.express = express()
		this.initialize()
	}

	private middleware(){
		this.express.use(bodyParser.urlencoded({ extended: true }))
		this.express.use(bodyParser.json({ limit : '5mb' }))
		this.express.use(cors())
	}

	private routes(){
		this.express.use(routes)
	}

	private initialize(){
		this.middleware()
		this.routes()
	}
}
export default Server
