const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth:{
        api_key: '1fedd6b764ab6f042873019f6d31ecb7-24e2ac64-36175d82',
        domain: 'sandboxd1c51ba2492d45999b7839febb0e4a24.mailgun.org'
    }
};
 
const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text,cb)=>{
    const mailOption={
        from: email,
        to: 'saheed.kazeem.1665@fuoye.edu.ng',
        subject,
        text
        };
        
        transporter.sendMail(mailOption, function(err,data){
        if (err){
            cb(err, null);
        }
        else{
            cb(null, data);
        }
        });
}
module.exports=sendMail;
