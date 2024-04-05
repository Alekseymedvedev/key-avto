import {Body, Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {WorksService} from "./works.service";
import {CreateWorksDto} from "./dto/create-works.dto";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('api/works')
export class WorksController {

    constructor(private WorksService: WorksService) {}

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreateWorksDto,
               @UploadedFile() image) {
        return this.WorksService.createWorks(dto, image)
    }
}
