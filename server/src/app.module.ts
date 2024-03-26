import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import { CategoriesModule } from './categories/categories.module';
import {ConfigModule} from "@nestjs/config";
import {Category} from "./categories/categories.model";
import { WorksModule } from './works/works.module';
import {WorkCategory} from "./works/works.model";
import { FileModule } from './file/file.module';
import { CarBrandModule } from './car-brand/car-brand.module';
import { CarBrandArticleModule } from './car-brand-article/car-brand-article.module';
import {CarBrand} from "./car-brand/car-brand.model";
import {CarBrandArticle} from "./car-brand-article/car-brand-article.model";
import {ServeStaticModule} from "@nestjs/serve-static";
import { SendMailerModule } from './send-mailer/send-mailer.module';
import * as path from "path";
import {MailerModule} from "@nestjs-modules/mailer";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env.local'
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'key_avto',
      models: [Category,WorkCategory,CarBrand,CarBrandArticle],
      autoLoadModels:true
    }),

    CategoriesModule,
    WorksModule,
    FileModule,
    CarBrandModule,
    CarBrandArticleModule,
    SendMailerModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
