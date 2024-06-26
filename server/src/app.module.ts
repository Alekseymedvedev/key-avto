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
import {CategoriesWork} from "./categories/categoriesAndWoks.model";
import { BannerModule } from './banner/banner.module';

@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath:'.env.local'
      }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'key_avto',
      models: [Category,WorkCategory,CarBrand,CarBrandArticle,CategoriesWork],
      autoLoadModels:true
    }),

    CategoriesModule,
    WorksModule,
    FileModule,
    CarBrandModule,
    CarBrandArticleModule,
    SendMailerModule,
    BannerModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
