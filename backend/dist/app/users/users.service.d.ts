import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersEntity } from './users.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UsersEntity>);
    findAll(): Promise<UsersEntity[]>;
    findOneOrFail(conditions: FindConditions<UsersEntity>, options?: FindOneOptions<UsersEntity>): Promise<UsersEntity>;
    store(data: CreateUserDto): Promise<UsersEntity>;
    update(id: string, data: UpdateUserDto): Promise<UsersEntity>;
    destroy(id: string): Promise<void>;
}
