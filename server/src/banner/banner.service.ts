import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateBannerDto} from './dto/create-banner.dto';
import {UpdateBannerDto} from './dto/update-banner.dto';
import {InjectModel} from "@nestjs/sequelize";
import {Banner} from "./banner.model";
import {FileService} from "../file/file.service";

@Injectable()
export class BannerService {
    constructor(@InjectModel(Banner) private bannerRepository: typeof Banner,
                private FileService: FileService) {
    }

    async create(dto: CreateBannerDto, image) {
         try {
             const fileName = await this.FileService.createFile(image)
             return await this.bannerRepository.create({...dto, image: fileName});
         }catch (e) {
            throw new HttpException(
                `Произошла ошибка при обновлении продукта: ${e}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async findAll() {
         try {
             return await this.bannerRepository.findAll();
         }catch (e) {
            throw new HttpException(
                `Произошла ошибка при обновлении продукта: ${e}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async update(id: number, dto: UpdateBannerDto,image) {
        try {
            const banner = await this.bannerRepository.findOne({ where: { id } });

            const fileName =  await this.FileService.createFile(image)
            await banner.update({ ...dto, image: fileName });
            return banner;
        } catch (e) {
            throw new HttpException(
                `Произошла ошибка при обновлении продукта: ${e}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async remove(id: number) {
        return `This action removes a #${id} banner`;
    }
}
