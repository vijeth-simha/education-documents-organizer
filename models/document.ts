import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Lesson from "./lesson";

@Entity()
export default class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  shortDescription: string;

  @Column()
  createdAt: Date;

  @Column({
    nullable: true,
  })
  updatedAt: Date;

  @Column()
  documentURL: string;

  @Column("text", {
    nullable: true,
    array: true,
  })
  otherLinks: string[];

  @Column({
    nullable: false,
  })
  lessonId: number;

  @ManyToOne(() => Lesson, (lesson) => lesson.document, {
    onDelete: "CASCADE" // This will delete semester when the related category is deleted
  })
  lesson: Lesson;
}
