import { Module } from '@nestjs/common';
import {sendMailerService} from './send-mailer.service';

@Module({
  providers: [sendMailerService]
})
export class SendMailerModule {}
