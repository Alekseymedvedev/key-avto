import {Injectable, UseInterceptors} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Category} from "./categories.model";
import {CreateCategoryDto} from "./dto/create-category.dto";
import {WorkCategory} from "../works/works.model";
import {FileService} from "../file/file.service";
import {FileInterceptor} from "@nestjs/platform-express";


@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category) private CategoryRepository: typeof Category,
                private FileService: FileService) {
    }

    async createCategory(CategoryDto: CreateCategoryDto, image: any) {
        const fileName = await this.FileService.createFile(image)
        const category = await this.CategoryRepository.create({...CategoryDto, image: fileName});
        return category;
    }

    async getAllCategories() {
        const categories = await this.CategoryRepository.findAll();
        return categories;
    }

    async getOne(id) {
        const oneCategory = await this.CategoryRepository.findOne({
            where: {id},
            include: WorkCategory
        });
        return oneCategory;
    }
}
