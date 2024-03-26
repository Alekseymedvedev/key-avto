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
        host: 'smtp.beget.com',
        port: 2525,
        auth:{
          login: 'key-avto@key-avto152.ru',
          password: 'x_29021956_X',
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

