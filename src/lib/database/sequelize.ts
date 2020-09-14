import {Sequelize} from 'sequelize-typescript';

// import {Milestone} from '../milestones/Milestones'
// import {Schedule} from '../schedules/Schedules'
// import {Todo} from '../todos/Todos'
// import {User} from '../users/Users'
import { env } from 'process';

export const seqeulize = new Sequelize({
    database: 'daylifeDev',
    dialect: 'mysql',
    username: 'root',
    password: env.DATABASE_DEV_PASSWORD,
    storage: ':memory:',
    models: [__dirname + '/models'],
    repositoryMode: true,
})