import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export enum UserStatus{
  ACTIVE = 'ACTIVE',
  DISABLE = 'DISABLE'
}


@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
    length: 200
  })
  name: string;

  @Column({
    unique: true,
    nullable: false,
    length: 100
  })
  email: string;

  
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
  

  @Column({
    nullable: false,
    length: 60
  })
  password: string;

  
  @Column('enum', {
    enum: UserStatus,
    default: UserStatus.ACTIVE
  })
  status: UserStatus;

  @Column({
    type: "boolean",
    default: false
  })
  emailValidated: boolean

}
