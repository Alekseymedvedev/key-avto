import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {CarBrandArticle} from "./car-brand-article.model";
import {CreateCarBrandArticleDto} from "./dto/create-car-brand-article.dto";

@Injectable()
export class CarBrandArticleService {
    constructor(@InjectModel(CarBrandArticle) private CarBrandArticleRepository: typeof CarBrandArticle) {}

    async createCarBrandArticle(dto:CreateCarBrandArticleDto) {
        // const fileName = await this.FileService.createFile(image)
        const carBrandArticle = await this.CarBrandArticleRepository.create({...dto})
        return carBrandArticle;
    }
}
