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
import {Model, Table, Column, HasMany} from 'sequelize-typescript';

@Table({
    timestamps: false,  //createdAt updatedAt은 사용하지 않음
})
class Todo extends Model<Todo> {
    @Column user_id!: number;
    @Column parent!: number; 
    @Column name!: string;
    @Column memo!: string;
    @Column is_important!: boolean;
    @Column is_done!: boolean;
    @Column priority!: number;
} 