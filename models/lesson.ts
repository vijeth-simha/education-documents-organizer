import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import Subject from "./subject";
import Document from "./document";

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
    nullable: false,
  })
  subjectId: number;

  @ManyToOne(() => Subject, (subject) => subject.lesson)
  @JoinColumn()
  subject: Subject;


  @OneToMany(()=>Document,(document)=>document.lesson)
  document:Document[];


//   @OneToMany(()=>)
}
