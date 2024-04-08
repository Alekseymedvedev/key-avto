import { Module } from '@nestjs/common';
import { BannerService } from './banner.service';
import { BannerController } from './banner.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {FileModule} from "../file/file.module";
import {Banner} from "./banner.model";

@Module({
  controllers: [BannerController],
  providers: [BannerService],
  imports:[
    SequelizeModule.forFeature([Banner]),
    FileModule
  ]
})
export class BannerModule {}
