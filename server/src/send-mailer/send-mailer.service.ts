import {Injectable} from '@nestjs/common';
import {MailerService} from '@nestjs-modules/mailer';

@Injectable()
export class sendMailerService {
    constructor(private mailerService: MailerService) {}

    async sendMEmail({phone:phone}) {

        await this.mailerService.sendMail({
            to: 'alekse-medvedev@mail.ru',
            from: 'noreply@nestjs.com',
            subject: 'Testing Nest Mailermodule with template ✔',
            context: {
                // Data to be sent to template engine.
                code: 'cf1a3f828287',
                username: 'john doe',
                html:phone
            },
            html:'Телефон: '+ phone
        });
    }
}
