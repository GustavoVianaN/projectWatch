"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apiquery = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
function Apiquery() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiQuery)({ name: 'page', type: Number, required: false }), (0, swagger_1.ApiQuery)({ name: 'limit', type: Number, required: false }), (0, swagger_1.ApiQuery)({ name: 'id', type: Number, required: false }), (0, swagger_1.ApiQuery)({ name: 'orderBy', type: String, required: false }), (0, swagger_1.ApiQuery)({ name: 'order', type: String, required: false }), (0, swagger_1.ApiQuery)({ name: 'filter', type: String, required: false }), (0, swagger_1.ApiQuery)({ name: 'filterBy', type: String, required: false }));
}
exports.Apiquery = Apiquery;
//# sourceMappingURL=api-query.decorator.js.map