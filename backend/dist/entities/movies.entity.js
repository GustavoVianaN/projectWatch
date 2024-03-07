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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movies = void 0;
const typeorm_1 = require("typeorm");
const UpdateDateColumn_1 = require("typeorm/decorator/columns/UpdateDateColumn");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
let Movies = class Movies {
};
exports.Movies = Movies;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Movies.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12133'
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Movies.prototype, "idmovie", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'The Flash'
    }),
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Movies.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Ano'
    }),
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Movies.prototype, "Ano", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Genero'
    }),
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Movies.prototype, "Genero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ativo ou inativo'
    }),
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Movies.prototype, "situation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'se o status for inativo tem que ter motivo '
    }),
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Movies.prototype, "motivo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 85
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Movies.prototype, "descricao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'teste'
    }),
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Movies.prototype, "protocolo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1:30'
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Movies.prototype, "duracao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'portugues'
    }),
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Movies.prototype, "idioma", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Movies.prototype, "create_at", void 0);
__decorate([
    (0, UpdateDateColumn_1.UpdateDateColumn)({ name: 'update_at', nullable: true }),
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    __metadata("design:type", Date)
], Movies.prototype, "update_at", void 0);
exports.Movies = Movies = __decorate([
    (0, typeorm_1.Entity)()
], Movies);
//# sourceMappingURL=movies.entity.js.map