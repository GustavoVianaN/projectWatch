import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movies } from '../entities/movies.entity';
import { ApiTags } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';
import {
    paginate,
    Pagination,
    IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { Apiquery } from '../decorators/api-query.decorator';

@ApiBearerAuth()
@ApiTags('Movies')
@Controller('api/Movies')
export class MoviesController {
    constructor(
        @InjectRepository(Movies)
        private readonly MoviesRepository: Repository<Movies>,
    ) { }


    @Get('')
    @Apiquery()
    async findAllSchedule(
        @Query('id') id?: number,
        @Query('limit') limit?: number,
        @Query('page') page?: number,
        @Query('orderBy') orderBy?: 'id',
        @Query('order') order?: 'ASC' | 'DESC',
    ): Promise<Pagination<Movies>> {
        const options: IPaginationOptions = {
            page,
            limit: limit || 3,
        };
        const queryBuilder = this.MoviesRepository.createQueryBuilder('Movies')

        queryBuilder.orderBy(`Movies.${orderBy || 'id'}`, order || 'ASC');
        return paginate<Movies>(queryBuilder, options);
    }


    @Get(':id')
    async findScheduleById(@Param('id') id: number): Promise<Movies | { message: string }> {
        const schedule = await this.MoviesRepository
            .createQueryBuilder('Movies')
            .getOne();
        if (!schedule) {
            return { message: 'Agendamento não encontrado' };
        }
        return schedule;
    }


    @Post()
    async createSchedule(@Body() Movies: Movies): Promise<Movies> {
        console.log(Movies)
        
        return await this.MoviesRepository.save(Movies);
    }


    @Patch(':id')
    async update(@Param('id') id: string, @Body() Movies: Movies) {
        return await this.MoviesRepository.update(+id, Movies);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.MoviesRepository.delete(+id);
    }
}