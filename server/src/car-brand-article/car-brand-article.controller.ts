import {Body, Controller, Post} from '@nestjs/common';
import {CarBrandArticleService} from "./car-brand-article.service";
import {CreateCarBrandArticleDto} from "./dto/create-car-brand-article.dto";

@Controller('car-brand-article')
export class CarBrandArticleController {
    constructor(private CarBrandArticleService:CarBrandArticleService) {}


    @Post()
    create(@Body() dto:CreateCarBrandArticleDto) {
        return this.CarBrandArticleService.createCarBrandArticle(dto)
    }
}
