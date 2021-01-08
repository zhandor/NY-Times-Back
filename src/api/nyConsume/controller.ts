import {Request, Response, NextFunction } from 'express'
import axios from 'axios'

import {extAPI} from '../../shared/environment/environment'

const science = (req: Request, res: Response, next: NextFunction) => {
	axios({
		method: 'get',
		baseURL: extAPI.host,
		url: 'topstories/v2/science.json',
		params: {
			'api-key': extAPI.appKey
		}
	}).then((response) => {
		res.status(200).json({result: response.data.results})
	}).catch((error) => {
		res.status(401).send({error})
	})
}

const technology = (req: Request, res: Response, next: NextFunction) => {
	axios({
		method: 'get',
		baseURL: extAPI.host,
		url: 'topstories/v2/technology.json',
		params: {
			'api-key': extAPI.appKey
		}
	}).then((response) => {
		res.status(200).json({result: response.data.results})
	}).catch((error) => {
		res.status(401).send({error})
	})
}

export {science, technology}
