import { Router } from 'express'

import nyConsume from './nyConsume'

const routes = Router()

routes.use('/ny', nyConsume)

export default routes
