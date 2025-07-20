import { Module } from '@nestjs/common';
import { join } from "node:path";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeormDataSourceFactory, typeormOptionsFactory } from "./config/typeorm";
import { RedisModule } from "./config/redis";
import { HttpModule } from "@nestjs/axios";
import { TagsModule } from './tags';
import { GithubModule } from './github';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(__dirname, "..", ".env"),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeormOptionsFactory,
      dataSourceFactory: typeormDataSourceFactory,
      inject: [ConfigService]
    }),
    HttpModule.register({ global: true }),
    RedisModule,
    TagsModule,
    GithubModule,
    UsersModule,
  ],
})
export class AppModule {}
