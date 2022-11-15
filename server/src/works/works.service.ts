import {Injectable} from '@nestjs/common';
import {CreateWorksDto} from "./dto/create-works.dto";
import {InjectModel} from "@nestjs/sequelize";
import {WorkCategory} from "./works.model";
import {FileService} from "../file/file.service";


@Injectable()
export class WorksService {
    constructor(@InjectModel(WorkCategory) private WorkRepository: typeof WorkCategory,
                private FileService: FileService) {}

    async createWorks(WorksDto: CreateWorksDto, image: any) {
        const fileName = await this.FileService.createFile(image)
        const work = await this.WorkRepository.create({...WorksDto, image: fileName})
        return work;
    }
}
