/**
 * schedules 관한 테이블
 * user_id: int <- users(id)
 * name: varchar
 * memo: varchar
 * start: varchar
 * end: varchar
 */
import {Model, Table, Column, HasMany, BelongsTo, ForeignKey} from 'sequelize-typescript';
import { User } from '../../lib/users/Users';
import { Todo } from '../../lib/todos/Todos';

@Table({
    timestamps: false,  //createdAt updatedAt은 사용하지 않음
})
export class Schedule extends Model<Schedule> {
    
    @ForeignKey(() => User)
    @Column user_id!: number;

    @Column name!: string;
    @Column memo!: string;
    @Column start!: string;
    @Column end!: string;

    @HasMany(() => Todo)
    todos!: Todo[];
} 