/**
 * schedules 관한 테이블
 * user_id: int <- users(id)
 * name: varchar
 * memo: varchar
 * start: varchar
 * end: varchar
 */
import {Model, Table, Column, HasMany} from 'sequelize-typescript';

@Table({
    timestamps: false,  //createdAt updatedAt은 사용하지 않음
})
class Schedule extends Model<Schedule> {
    @Column user_id!: number;
    @Column name!: string;
    @Column memo!: string;
    @Column start!: string;
    @Column end!: string;
} 