import { Router, Request, Response, NextFunction } from 'express'

import api from './api/'

const routes = Router()

//Health check endpoint
routes.get('/health', (req: Request, res: Response, next: NextFunction) =>{
	res.status(200).json({ server: "The server is up and running!!!"})
})

routes.use(api)

export default routes
