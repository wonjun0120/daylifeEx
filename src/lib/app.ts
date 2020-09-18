import express from 'express';
import {json} from 'body-parser';

import { seqeulize } from './database/sequelize';
import { User } from './users/Users';
import { Milestone } from './milestones/Milestones';
import { Todo } from './todos/Todos';
import { Schedule } from './schedules/Schedules';


const userRepository = seqeulize.getRepository(User);
const milestonesRepository = seqeulize.getRepository(Milestone);
const schedulesRepository = seqeulize.getRepository(Schedule);
const todosRepository = seqeulize.getRepository(Todo);

export const app = express();

app.use(json());
