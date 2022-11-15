import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Category} from "./categories.model";
import {CreateCategoryDto} from "./dto/create-category.dto";
import {WorkCategory} from "../works/works.model";


@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category) private CategoryRepository: typeof Category) {
    }

    async createCategory(dto: CreateCategoryDto) {
        const category = await this.CategoryRepository.create(dto);
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
