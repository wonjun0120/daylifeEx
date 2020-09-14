/**
 * milestone 관한 테이블
 * user_id: int <- users(id)
 * name: varchar
 * memo: varchar
 * start: varchar
 * end: varchar
 * priority: int
 */
import {Model, Table, Column, HasMany, ForeignKey} from 'sequelize-typescript';
import { User } from '../../lib/users/Users';
import { Todo } from '../../lib/todos/Todos';

@Table({
    timestamps: false,  //createdAt updatedAt은 사용하지 않음
})
export class Milestone extends Model<Milestone> {
    @ForeignKey(() => User)
    @Column user_id!: number;

    @Column name!: string;
    @Column memo!: string;
    @Column start!: string;
    @Column end!: string;
    @Column priority!: number;

    @HasMany(() => Todo)
    todos!: Todo[];
} 