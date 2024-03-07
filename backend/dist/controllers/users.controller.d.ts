import { Repository } from 'typeorm';
import { Users } from '../entities/users.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
export declare class UsersController {
    private readonly usersRepository;
    constructor(usersRepository: Repository<Users>);
    findAllSchedule(id?: number, limit?: number, filter?: string, filterBy?: string, page?: number, orderBy?: 'id', order?: 'ASC' | 'DESC'): Promise<Pagination<Users>>;
    findScheduleById(id: number): Promise<Users | {
        message: string;
    }>;
    createSchedule(users: Users): Promise<Users>;
    update(id: string, users: Users): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
