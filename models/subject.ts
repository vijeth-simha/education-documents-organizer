import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
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

  @Column({
    nullable: true,
  })
  updatedAt: Date;

  @Column({
    nullable: true,
  })
  subjectId: string;

  @Column({
    nullable: true,
  })
  subjectPic: string;

  @ManyToOne(() => Semester, (semester) => semester.subject)
  semester: string;

  @OneToMany(() => Lesson, (lesson) => lesson.subject)
  lesson: Lesson[];
}
