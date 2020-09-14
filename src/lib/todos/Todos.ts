/**
 * Todo에 관한 테이블
 * user_id: int <- users(id)
 * parent: int <- scheduels(id) or milestones(id)
 * name: varchar
 * memo: varchar
 * is_important: boolean
 * is_done: boolean
 * priority: int
 */
import {Model, Table, Column, HasMany, ForeignKey} from 'sequelize-typescript';
import { User } from '../../__TestDB__/users/Users';
import { Milestone } from '../../__TestDB__/milestones/Milestones';
import { Schedule } from '../../__TestDB__/schedules/Schedules';

@Table({
    timestamps: false,  //createdAt updatedAt은 사용하지 않음
})
export class Todo extends Model<Todo> {
    @ForeignKey(() => User)
    @Column user_id!: number;

    @ForeignKey(() => Milestone)
    @Column mile_parent!: number; 

    @ForeignKey(() => Schedule)
    @Column schedule_parent!: number; 

    @Column name!: string;
    @Column memo!: string;
    @Column is_important!: boolean;
    @Column is_done!: boolean;
    @Column priority!: number;
} 