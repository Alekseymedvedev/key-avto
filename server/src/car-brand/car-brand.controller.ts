import {Body, Controller, Get, Param, Patch, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {CreateCategoryDto} from "../categories/dto/create-category.dto";
import {CarBrandService} from "./car-brand.service";

@Controller('api/car-brand')
export class CarBrandController {
    constructor(private carBrandService:CarBrandService) {}


    @Post()
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() dto:CreateCategoryDto,
           @UploadedFile() image) {
        return this.carBrandService.createCarBrand(dto, image)
    }
    @Get()
    getAll(){
        return this.carBrandService.getAllCarBrand();
    }


    @Get(':name')
    getOne(@Param('name') name) {
        return this.carBrandService.getOne(name);
    }
    @Patch(':name')
    @UseInterceptors(FileInterceptor('image'))
    update(@Param('name') name: string, @Body() dto, @UploadedFile() image,) {
        return this.carBrandService.update(name, dto, image);
    }
}
