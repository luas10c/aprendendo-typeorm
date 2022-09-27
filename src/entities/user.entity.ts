import { Entity, PrimaryColumn, Column, JoinColumn, OneToMany } from "typeorm";
import { randomUUID } from "node:crypto";

import { ProfileEntity } from "./profile.entity";

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  password: string;

  @OneToMany(() => ProfileEntity, (profile) => profile.user, { lazy: true })
  profiles: ProfileEntity[];

  constructor() {
    this.id = randomUUID();
  }
}
