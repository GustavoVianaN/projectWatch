import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/users.entity';
import { ApiTags } from '@nestjs/swagger';
import { Resource, Roles } from 'nest-keycloak-connect';
import { ApiBearerAuth } from '@nestjs/swagger';

import {
    paginate,
    Pagination,
    IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { Apiquery } from '../decorators/api-query.decorator';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('api/users')
@Resource('portal-api')
export class UsersController {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ) { }


    @Get('')
    @Roles({ roles: ['Administrator', 'Operator'] })
    @Apiquery()
    async findAllSchedule(
        @Query('id') id?: number,
        @Query('limit') limit?: number,
        @Query('filter') filter?: string,
        @Query('filterBy') filterBy?: string,
        @Query('page') page?: number,
        @Query('orderBy') orderBy?: 'id',
        @Query('order') order?: 'ASC' | 'DESC',
    ): Promise<Pagination<Users>> {
        const options: IPaginationOptions = {
            page,
            limit: limit || 50,
        };
        const queryBuilder = this.usersRepository.createQueryBuilder('users');
        
        queryBuilder.orderBy(`users.${orderBy || 'id'}`, order || 'ASC');
        return paginate<Users>(queryBuilder, options);
    }


    @Get(':id')
    @Roles({ roles: ['Administrator', 'Operator'] })
    async findScheduleById(@Param('id') id: number): Promise<Users | { message: string }> {
        const schedule = await this.usersRepository
            .createQueryBuilder('users')
            .getOne();
        if (!schedule) {
            return { message: 'Agendamento não encontrado' };
        }
        return schedule;
    }




    @Post()
    @Roles({ roles: ['Administrator'] })
    async createSchedule(@Body() users: Users): Promise<Users> {
        console.log(users)
        return await this.usersRepository.save(users);
    }


    @Patch(':id')
    @Roles({ roles: ['Administrator'] })
    async update(@Param('id') id: string, @Body() users: Users) {
        return await this.usersRepository.update(+id, users);
    }

    @Delete(':id')
    @Roles({ roles: ['Administrator'] })
    async remove(@Param('id') id: string) {
        return await this.usersRepository.delete(+id);
    }
}