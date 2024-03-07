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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const UpdateDateColumn_1 = require("typeorm/decorator/columns/UpdateDateColumn");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
let Users = class Users {
};
exports.Users = Users;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10
    }),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Users.prototype, "Cpf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'gustavo'
    }),
    (0, typeorm_1.Column)({ length: 100, nullable: false }),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Users.prototype, "create_at", void 0);
__decorate([
    (0, UpdateDateColumn_1.UpdateDateColumn)({ name: 'update_at', nullable: false }),
    (0, class_transformer_1.Exclude)({ toPlainOnly: false }),
    __metadata("design:type", Date)
], Users.prototype, "update_at", void 0);
exports.Users = Users = __decorate([
    (0, typeorm_1.Entity)()
], Users);
//# sourceMappingURL=users.entity.js.map