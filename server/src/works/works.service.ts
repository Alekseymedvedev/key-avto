import {Injectable} from '@nestjs/common';
import {CreateWorksDto} from "./dto/create-works.dto";
import {InjectModel} from "@nestjs/sequelize";
import {WorkCategory} from "./works.model";
import {FileService} from "../file/file.service";
import {CategoriesWork} from "../categories/categoriesAndWoks.model";


@Injectable()
export class WorksService {
    constructor(@InjectModel(WorkCategory) private WorkRepository: typeof WorkCategory,
                private FileService: FileService) {}

    async createWorks(WorksDto: CreateWorksDto) {
        const work = await this.WorkRepository.create({...WorksDto})
        let arrCategoryId = [];
        for (const category of WorksDto.catId) {
            arrCategoryId.push(category);
        }

        await work.$set('category', arrCategoryId);
        return work;
    }
}
