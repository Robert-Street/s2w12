let userNum = document.getElementById("getNumber"); 
userNum.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        run(e);
    }
});

userNum.focus();

function run() {
    document.getElementById("paragraph").innerHTML = "Hello World!";
    document.getElementById("paragraph").style.backgroundColor = "#000000";
    document.getElementById("paragraph").style.color = "#ffffff";
    document.getElementById("paragraph").style.padding = "20px"; 
    randomNum();
    userNumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "#000000";
    x.style.color = "#ffffff";
    x.style.padding = "20px"; 
    x.style.textAlign = "center"; 
    return ran;
} 

function userNumber() {
    let user = document.getElementById("getNumber").value;
    let y = document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.color = "#ffffff";
    y.style.backgroundColor = "#000000";
    y.style.padding = "20px";
    y.style.textAlign = "center";
    return user;
}

function compareNumbers() {
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare")

    if (a != b) {
        z.innerHTML = "Numbers are not the same. Computer got " + b + ", and user got " + a;
        z.style.color = "#000000";
        z.style.backgroundColor = "#ff1a1a";
        z.style.padding = "20px";
        z.style.textAlign = "center";
    } else if (a == b) {
        z.innerHTML = "Numbers are the same. Computer got " + b + ", and user got " + a;
        z.style.color = "#000000";
        z.style.backgroundColor = "#1aff1a";
        z.style.padding = "20px";
        z.style.textAlign = "center";
    }

    resetInput();
}

function resetInput() {
    document.getElementById("getNumber").value = "";
}