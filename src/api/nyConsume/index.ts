import { Router } from 'express'

import * as controller from './controller'

const routes = Router()

routes.get('/science', controller.science)

routes.get('/technology', controller.technology)

export default routes
