let user, pass;
let emailsInput = EmailsInput(document.getElementById("emails-input"));
let editor = new FroalaEditor("#Body", {
  height: 300,
});

document.getElementById("login").addEventListener("submit", function (e) {
  e.preventDefault();
  user = document.getElementById("user").value;
  pass = document.getElementById("Password").value;
  document.getElementById("modal").style.display = "none";
});
document.getElementById("sendEmail").addEventListener("submit", function (e) {
  e.preventDefault();
  let receiver = emailsInput.getValue();
  let subject = document.getElementById("Subject").value;
  let html = editor.html.get();
  Email.send({
    Host: "smtp.google.com",
    Username: user,
    Password: pass,
    To: receiver,
    From: user,
    Subject: subject,
    Body: html,
  }).then((message) => alert(message));
});
