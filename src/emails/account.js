const sgMail = require('@sendgrid/mail')

sgMail.setApiKey = process.env.sendGridAPIkey


const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to:email,
        from:'swapnilaumee.sa@gmail.com',
        subject: 'Welcome to our Service',
        text:`Hello ${name}`
    
    })
}

const sendCancelationEmail = (email, name)=>{
    sgMail.send({
        to:email,
        from:'swapnilaumee.sa@gmail.com',
        subject: 'Sorry to see you go',
        text:`Sorry to see you go ${name}`
    
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}


