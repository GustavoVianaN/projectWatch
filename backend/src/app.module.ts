import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Movies } from './entities/movies.entity';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { MoviesController } from './controllers/movies.controller';
import { Users } from './entities/users.entity';
import { UsersController } from './controllers/users.controller';
import { UsersModule } from './app/users/users.module';
import { UsersService } from './app/users/users.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port:  process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [Movies, Users],
      synchronize: true,
    } as TypeOrmModuleOptions),
    JwtModule,
    TypeOrmModule.forFeature([Movies,Users]),
    HttpModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    UsersModule,
  ],
  exports: [UsersService],
  controllers: [MoviesController, UsersController],

})

export class AppModule {}
