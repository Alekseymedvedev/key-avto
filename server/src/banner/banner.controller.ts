import {Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors} from '@nestjs/common';
import { BannerService } from './banner.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('api/banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() dto: CreateBannerDto,@UploadedFile() image) {
    return this.bannerService.create(dto, image);
  }

  @Get()
  findAll() {
    return this.bannerService.findAll();
  }



  @Patch(':id')
  @UseInterceptors(FileInterceptor('image'))
  update(@Param('id') id: string, @Body() dto: UpdateBannerDto,@UploadedFile() image) {
    return this.bannerService.update(+id, dto, image);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bannerService.remove(+id);
  }
}
