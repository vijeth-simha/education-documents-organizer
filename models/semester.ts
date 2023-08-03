import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
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

  @OneToOne(()=>Category)
  @JoinColumn()
  category:Category

}
