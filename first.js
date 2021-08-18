console.log("helloworld");
var ans=prompt("do-you-want-to-open-your-gmail");
if(ans=='yes')
{
  alert ("we-are-opening-your-mail");
window.open(`https://mail.google.com/mail/u/0/#inbox`);
var time=new Date();
document.write(time);

}