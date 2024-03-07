"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("../entities/users.entity");
const swagger_1 = require("@nestjs/swagger");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
const swagger_2 = require("@nestjs/swagger");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const api_query_decorator_1 = require("../decorators/api-query.decorator");
let UsersController = class UsersController {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async findAllSchedule(id, limit, filter, filterBy, page, orderBy, order) {
        const options = {
            page,
            limit: limit || 50,
        };
        const queryBuilder = this.usersRepository.createQueryBuilder('users');
        queryBuilder.orderBy(`users.${orderBy || 'id'}`, order || 'ASC');
        return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, options);
    }
    async findScheduleById(id) {
        const schedule = await this.usersRepository
            .createQueryBuilder('users')
            .getOne();
        if (!schedule) {
            return { message: 'Agendamento não encontrado' };
        }
        return schedule;
    }
    async createSchedule(users) {
        console.log(users);
        return await this.usersRepository.save(users);
    }
    async update(id, users) {
        return await this.usersRepository.update(+id, users);
    }
    async remove(id) {
        return await this.usersRepository.delete(+id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)(''),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['Administrator', 'Operator'] }),
    (0, api_query_decorator_1.Apiquery)(),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('filter')),
    __param(3, (0, common_1.Query)('filterBy')),
    __param(4, (0, common_1.Query)('page')),
    __param(5, (0, common_1.Query)('orderBy')),
    __param(6, (0, common_1.Query)('order')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, Number, String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllSchedule", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['Administrator', 'Operator'] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findScheduleById", null);
__decorate([
    (0, common_1.Post)(),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['Administrator'] }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_entity_1.Users]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createSchedule", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['Administrator'] }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, users_entity_1.Users]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['Administrator'] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_2.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('api/users'),
    (0, nest_keycloak_connect_1.Resource)('portal-api'),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersController);
//# sourceMappingURL=users.controller.js.map