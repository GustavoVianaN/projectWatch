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
exports.MoviesController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const movies_entity_1 = require("../entities/movies.entity");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const api_query_decorator_1 = require("../decorators/api-query.decorator");
let MoviesController = class MoviesController {
    constructor(MoviesRepository) {
        this.MoviesRepository = MoviesRepository;
    }
    async findAllSchedule(id, limit, page, orderBy, order) {
        const options = {
            page,
            limit: limit || 3,
        };
        const queryBuilder = this.MoviesRepository.createQueryBuilder('Movies');
        queryBuilder.orderBy(`Movies.${orderBy || 'id'}`, order || 'ASC');
        return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, options);
    }
    async findScheduleById(id) {
        const schedule = await this.MoviesRepository
            .createQueryBuilder('Movies')
            .getOne();
        if (!schedule) {
            return { message: 'Agendamento não encontrado' };
        }
        return schedule;
    }
    async createSchedule(Movies) {
        console.log(Movies);
        return await this.MoviesRepository.save(Movies);
    }
    async update(id, Movies) {
        return await this.MoviesRepository.update(+id, Movies);
    }
    async remove(id) {
        return await this.MoviesRepository.delete(+id);
    }
};
exports.MoviesController = MoviesController;
__decorate([
    (0, common_1.Get)(''),
    (0, api_query_decorator_1.Apiquery)(),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('orderBy')),
    __param(4, (0, common_1.Query)('order')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "findAllSchedule", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "findScheduleById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movies_entity_1.Movies]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "createSchedule", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, movies_entity_1.Movies]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "remove", null);
exports.MoviesController = MoviesController = __decorate([
    (0, swagger_2.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Movies'),
    (0, common_1.Controller)('api/Movies'),
    __param(0, (0, typeorm_1.InjectRepository)(movies_entity_1.Movies)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MoviesController);
//# sourceMappingURL=movies.controller.js.map