import dotenv from 'dotenv'
import {env} from 'process'

import { IConfig } from '../interfaces/config'
import { IExtAPI } from '../interfaces/extapi'

dotenv.config()

const envConfig: IConfig = {
	env: env.NODE_ENV || 'Dev',
	port: Number(env.NODE_PORT) || 3000
}

const extAPI: IExtAPI = {
	appKey: env.NYTIME_APP_KEY,
	host: env.NYTIME_HOST
}

export {envConfig, extAPI}
