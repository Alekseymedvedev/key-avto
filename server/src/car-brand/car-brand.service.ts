import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {CarBrand} from "./car-brand.model";
import {CreateCarBrandDto} from "./dto/create-car-brand.dto";
import {FileService} from "../file/file.service";
import {CarBrandArticle} from "../car-brand-article/car-brand-article.model";


@Injectable()
export class CarBrandService {
    constructor(@InjectModel(CarBrand) private CarBrandRepository: typeof CarBrand,
                private FileService: FileService) {
    }

    async createCarBrand(dto: CreateCarBrandDto, image: any) {
        const fileName = await this.FileService.createFile(image)
        const carBrand = await this.CarBrandRepository.create({...dto, image: fileName});
        return carBrand;
    }

    async getAllCarBrand(): Promise<CarBrand[]> {
        const carBrand:CarBrand[] = await this.CarBrandRepository.findAll();
        return carBrand;
    }

    async getOne(name:string): Promise<CarBrand> {
        const carBrand : CarBrand = await this.CarBrandRepository.findOne({
            where: {name},
            include: CarBrandArticle
        });
        return carBrand;
    }
    async update(name: string, dto, image): Promise<CarBrand>{
        const brand : CarBrand = await this.CarBrandRepository.findOne({ where: { name } });

        const fileName =image ?  await this.FileService.createFile(image) : brand.image;
        await brand.update({ ...dto, image: fileName });
        return brand;
    }
}
