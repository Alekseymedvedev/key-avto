import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { BannerModel } from "./banner.model";

@Module({
    controllers: [],
    providers: [],
    imports:[
        SequelizeModule.forFeature([BannerModel])
    ]
})
export class BannerModule {}