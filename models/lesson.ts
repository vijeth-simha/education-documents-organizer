import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Subject from "./subject";


@Entity()
export default class Lesson {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    createdAt: Date;
  
    @Column()
    updatedAt: Date;
  
    @Column()
    lessonPic: string;
  
    @ManyToOne(()=>Subject,(subject)=>subject.lesson)
    subject: string;
}