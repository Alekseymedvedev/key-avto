import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CategoriesService} from "./categories.service";
import {CreateCategoryDto} from "./dto/create-category.dto";
import {WorkCategory} from "../works/works.model";

@Controller('/categories')
export class CategoriesController {

    constructor(private categoriesService:CategoriesService) {}

    @Post()
    create(@Body()categoryDto:CreateCategoryDto){
        return this.categoriesService.createCategory(categoryDto)
    }

    @Get()
    getAll(){
       return this.categoriesService.getAllCategories();
    }


    @Get(':id')
    getOne(@Param('id') id) {
        return this.categoriesService.getOne(id);
    }
}
