"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const fs = require("fs");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
async function bootstrap() {
    const httpsOptions = {
        key: fs.readFileSync('certs/ipms.privkey.pem'),
        cert: fs.readFileSync('certs/ipms.fullchain.pem'),
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        httpsOptions,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Georefering API')
        .setDescription('Georefering API')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors();
    await app.listen(3002);
}
bootstrap();
//# sourceMappingURL=main.js.map