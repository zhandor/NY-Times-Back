import {Request, Response, NextFunction } from 'express'
import superagent from 'superagent'

import {extAPI} from '../../shared/environment/environment'

const science = (req: Request, res: Response, next: NextFunction) => {
	const retorno = superagent.get(extAPI.host+'topstories/v2/science.json?api-key='+extAPI.appKey).end((err, internalResponse) => {
		if(err){
			console.log({message: err})
			res.status(401).json({message: err})
		}else{
			res.status(200).send(internalResponse.text)
		}
	})
}

const technology = (req: Request, res: Response, next: NextFunction) => {
	const retorno = superagent.get(extAPI.host+'topstories/v2/technology.json?api-key='+extAPI.appKey).end((err, internalResponse) => {
		if(err){
			console.log({message: err})
			res.status(401).json({message: err})
		}else{
			res.status(200).send(internalResponse.text)
		}
	})
}

export {science, technology}
