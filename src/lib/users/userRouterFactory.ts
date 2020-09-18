import {Repository} from 'sequelize-typescript';
import { User } from './Users';
import { Router } from 'express';

export const userRouterFactory = (
    userRepository: Repository<User>
) => Router()
    .post('/signup', (req, res, next) => {
        userRepository.findOrCreate(req.body.google_id)
        .then((result: any) => res.json(result))    //타입확인
        .catch(next)
    })
;