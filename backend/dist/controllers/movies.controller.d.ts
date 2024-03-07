import { Repository } from 'typeorm';
import { Movies } from '../entities/movies.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
export declare class MoviesController {
    private readonly MoviesRepository;
    constructor(MoviesRepository: Repository<Movies>);
    findAllSchedule(id?: number, limit?: number, page?: number, orderBy?: 'id', order?: 'ASC' | 'DESC'): Promise<Pagination<Movies>>;
    findScheduleById(id: number): Promise<Movies | {
        message: string;
    }>;
    createSchedule(Movies: Movies): Promise<Movies>;
    update(id: string, Movies: Movies): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
