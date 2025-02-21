import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

  @Column({
    nullable: false,
  })
  active: boolean;

}
