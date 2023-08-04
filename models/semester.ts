import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import Category from "./category";

@Entity()
export default class Semester {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  shortDescription: string;

  @Column()
  createdAt: Date;

  @Column({
    nullable:true
  })
  updatedAt: Date;

  @Column({
    nullable:true
  })
  semesterPic: string;

  @OneToOne(()=>Category)
  @JoinColumn()
  category:Category

}
