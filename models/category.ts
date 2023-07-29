import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
}
