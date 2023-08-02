import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Semester {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  shortDesction: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  semesterPic: string;
}
