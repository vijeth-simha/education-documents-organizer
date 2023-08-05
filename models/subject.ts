import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import Semester from "./semester";
import Lesson from "./lesson";

@Entity()
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  subjectId: string;

  @Column()
  subjectPic: string;

  @ManyToOne(()=>Semester,(semester)=>semester.subject)
  semester: string;

  @OneToMany(()=>Lesson,(lesson)=>lesson.subject)
  lesson: Lesson[]
}
