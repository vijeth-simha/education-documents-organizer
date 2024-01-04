import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
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

  @Column({
    nullable: false,
  })
  semesterId: number;

  @ManyToOne(() => Semester, (semester) => semester.subject)
  @JoinColumn()
  semester: Semester;

  @OneToMany(() => Lesson, (lesson) => lesson.subject)
  lesson: Lesson[];
}
