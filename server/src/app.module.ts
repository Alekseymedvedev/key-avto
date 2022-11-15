import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import { CategoriesModule } from './categories/categories.module';
import {ConfigModule} from "@nestjs/config";
import {Category} from "./categories/categories.model";
import { WorksModule } from './works/works.module';
import {WorkCategory} from "./works/works.model";
import { FileModule } from './file/file.module';

@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath:'.env'
      }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.HOST,
      port: 3306,
      username: process.env.LOGIN,
      password: '',
      database: process.env.DB,
      models: [Category,WorkCategory],
      autoLoadModels:true
    }),
    CategoriesModule,
    WorksModule,
    FileModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
