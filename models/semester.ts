import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Category from "./category";

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

  // @OneToMany(()=>Category,)

}
