import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { randomUUID } from "node:crypto";

import { UserEntity } from "./user.entity";

@Entity({ name: "profiles" })
export class ProfileEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "int" })
  balance: number;

  @Column({ type: "uuid" })
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.profiles)
  @JoinColumn({
    name: "userId",
  })
  user: UserEntity;

  constructor() {
    this.id = randomUUID();
  }
}
