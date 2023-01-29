import {Body, Controller, Post} from '@nestjs/common';
import {sendMailerService} from "./send-mailer.service";

@Controller('send-mailer')
export class SendMailerController {
    constructor(private sendMailerService:sendMailerService) {}
    @Post()
    declare(@Body(){phone:phone}) {
        return this.sendMailerService.sendMEmail({phone:phone})
    }

}
