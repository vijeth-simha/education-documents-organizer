import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export default class User {
  @PrimaryColumn()
  id: number;

  @Column({
    length: 100,
    nullable: true,
  })
  name: string;

  @Column({
    nullable: false,
    unique: true,
  })
  username: string;

  @Column({
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    nullable: true,
  })
  createdAt: Date;

  @Column({
    nullable: true,
  })
  updatedAt: Date;

  @Column()
  password: string;

  @Column({
    nullable: true,
  })
  role: string;
}
