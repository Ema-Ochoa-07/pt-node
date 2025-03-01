import nodemailer, {Transporter} from 'nodemailer'

interface Attachment{
    filename: string
    path: string
}


export interface SendEmailOptions{
    to: string | string[]
    subject: string
    htmlBody: string
    attachments?: Attachment[]
}

export class EmailService{


    private transporter: Transporter

    constructor(
        mailerService: string,
        mailerEmail: string,
        sendEmailPassword: string,
        private readonly postToProvider: boolean
    ){
        this.transporter = nodemailer.createTransport({
            service: mailerService,
            auth:{
                user: mailerEmail,
                pass: sendEmailPassword
            }
        })
    }

    async sendEmail(options: SendEmailOptions){
        const { to, subject, htmlBody, attachments= []} = options

        //Controlar cuando enviar o no el correo
        if(!this.postToProvider)
            return true;

        try {
            const sendInformations =  await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody,
                attachments: attachments
            })
            return true
        } catch (error) {
            return false
        }
    }
}