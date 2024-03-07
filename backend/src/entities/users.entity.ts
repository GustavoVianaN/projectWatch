import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany } from "typeorm";
import { UpdateDateColumn } from "typeorm/decorator/columns/UpdateDateColumn";
import { Exclude } from 'class-transformer';
import { ApiProperty } from "@nestjs/swagger";
@Entity()

export class Users {
    @PrimaryGeneratedColumn()
    id: number;


    @ApiProperty(
        {
            example: 10
        }
    )
    @Column({ nullable: false })
    Cpf: number;



    @ApiProperty(
        {
            example: 'gustavo'
        }
    )
    @Column({ length: 100, nullable: false })
    name: string;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    create_at: Date;

    @UpdateDateColumn({ name: 'update_at', nullable: false })
    @Exclude({ toPlainOnly: false })
    update_at: Date;
}
