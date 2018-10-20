let userName = prompt("what is your name");

let nameconfirm = confirm("just checking,is" + userName + "your real name?")
if (nameconfirm) {
    alert("Welcome to my page," + userName + "!");
}
else {
    userName = prompt("okay, what is your name?");
}

console. log("t=The user's name" + userName + ".")

