import transporter from "../config/nodemailer.js"

const sendEmail = async (mailOptions) => { 
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
}

export default sendEmail