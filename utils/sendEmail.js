const nodemailer = require("nodemailer");

const sendEmail = async(to ,messageContent)=>
{
  try{
    const transporter = nodemailer.createTransport({
      host:'smtp.gmail.com',
      port :587,
      secure:false,
      auth:
      {
        user:'archie23sinha@gmail.com',
        pass:'oklu rnno kkmn ccaj'
      }
  })
  const message =
  {
    to,
    subject:"New message from NodeMailer App",
    html:`
    <h3>You have received a new message from NodeMailer App</h3>
    <p>${messageContent}</p>`

};
//send the email
const info = await transporter.sendMail(message);
console.log('Message sent',info.messageId);
}
  catch(error)
  {
console.log(error);
throw new Error("Email could not be sent");
  }
};
module.exports =sendEmail;