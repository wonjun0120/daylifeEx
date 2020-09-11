/**
 * 유저 정보 테이블에 관한 코드
 * id: int pri  // -> Model에서 상속받아 사용하는 경우 없어도 됨
 * name: varchar //이름
 * google_id: varchar    //구글 아이디
 * keycode: varchar  //구글 고유 코드
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