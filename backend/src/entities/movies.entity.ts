import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany } from "typeorm";
import { UpdateDateColumn } from "typeorm/decorator/columns/UpdateDateColumn";
import { Exclude } from 'class-transformer';
import { ApiProperty } from "@nestjs/swagger";

@Entity()

export class Movies {
    @PrimaryGeneratedColumn()
    id: number;


    @ApiProperty(
        {
            example: '12133'
        }
    )
    @Column({ nullable: true })
    idmovie: number;

    @ApiProperty(
        {
            example: 'The Flash'
        }
    )
    @Column({ length: 100, nullable: true })
    name: string;

    @ApiProperty(
        {
            example: 'Ano'
        }
    )
    @Column({ length: 100, nullable: true })
    Ano: string;


    @ApiProperty(
        {
            example: 'Genero'
        }
    )
    @Column({ length: 100, nullable: true })
    Genero: string;



    @ApiProperty(
        {
            example: 'ativo ou inativo'
        }
    )
    @Column({ length: 100, nullable: true })
    situation: string;


    @ApiProperty(
        {
            example: 'se o status for inativo tem que ter motivo '
        }
    )
    @Column({ length: 100, nullable: true })
    motivo: string;


    @ApiProperty(
        {
            example: 85
        }
    )
    @Column({ nullable: true })
    descricao: string;


    @ApiProperty(
        {
            example: 'teste'
        }
    )
    @Column({ length: 100, nullable: true })
    protocolo: string;


    @ApiProperty(
        {
            example: '1:30'
        }
    )
    @Column({ nullable: true })
    duracao: string;

    @ApiProperty(
        {
            example: 'portugues'
        }
    )
    @Column({ length: 100, nullable: true })
    idioma: string;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    create_at: Date;

    @UpdateDateColumn({ name: 'update_at', nullable: true })
    @Exclude({ toPlainOnly: true })
    update_at: Date;
}
