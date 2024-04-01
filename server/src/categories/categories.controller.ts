import {Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {CategoriesService} from "./categories.service";
import {CreateCategoryDto} from "./dto/create-category.dto";
import {WorkCategory} from "../works/works.model";
import {FileInterceptor} from "@nestjs/platform-express";
import {CreateWorksDto} from "../works/dto/create-works.dto";

@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService:CategoriesService) {}


    @Post()
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() categoryDto:CreateCategoryDto,
               @UploadedFile() image) {
        return this.categoriesService.createCategory(categoryDto, image)
    }
    @Get()
    getAll(){
       return this.categoriesService.getAllCategories();
    }


    @Get(':name')
    getOne(@Param('name') name) {
        console.log(name)
        return this.categoriesService.getOne(name);
    }
}
