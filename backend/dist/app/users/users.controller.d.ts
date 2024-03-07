import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    index(): Promise<import("./users.entity").UsersEntity[]>;
    store(body: CreateUserDto): Promise<import("./users.entity").UsersEntity>;
    show(id: string): Promise<import("./users.entity").UsersEntity>;
    update(id: string, body: UpdateUserDto): Promise<import("./users.entity").UsersEntity>;
    destroy(id: string): Promise<void>;
}
