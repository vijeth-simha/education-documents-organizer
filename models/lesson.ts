import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import Subject from "./subject";

@Entity()
export default class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    nullable:true
  })
  shortDescription: string;

  @Column()
  createdAt: Date;
 
  @Column({
    nullable: true,
  })
  updatedAt: Date;

  @Column({
    nullable: true,
  })
  lessonPic: string;

  @Column({
    nullable: true,
  })
  subjectId: number;

  @ManyToOne(() => Subject, (subject) => subject.lesson)
  subject: number;

//   @OneToMany(()=>)
}
