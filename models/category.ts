import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Semester from "./semester";

@Entity()
export default class Category {
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

  @Column()
  categoryPic: string;

  @Column()
  shortDescription: string;

  @OneToMany(() => Semester, (semester) => semester.category)
  semester: Semester[];
}
