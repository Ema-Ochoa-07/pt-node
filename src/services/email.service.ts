import nodemailer, {Transporter} from 'nodemailer'

export class EmailService{


    private transporter: Transporter

    constructor(
        mailerService: string,
        mailerEmail: string,
        sendEmailPassword: string
    ){
        this.transporter = nodemailer.createTransport({
            service: mailerEmail,
            auth:{
                user: mailerEmail,
                pass: sendEmailPassword
            }
        })
    }

    async sendEmail(options: any){

    }
}