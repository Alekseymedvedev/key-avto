import { Module } from '@nestjs/common';
import {sendMailerService} from './send-mailer.service';
import {MailerModule} from "@nestjs-modules/mailer";
import {PugAdapter} from "@nestjs-modules/mailer/dist/adapters/pug.adapter";
import { SendMailerController } from './send-mailer.controller';

@Module({
  providers: [sendMailerService],
  controllers: [SendMailerController],
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'sincere.kovacek@ethereal.email',
          pass: 'etjt5SKgbdyy1zG9nQ'
        },
        secure: false
      },
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },


    }),
  ],
})
export class SendMailerModule {}
