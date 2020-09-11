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
class User extends Model<User> {
    @Column name!: string;
    @Column google_id!: string;
    @Column keycode!: string;
} 