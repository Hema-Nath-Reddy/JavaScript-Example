function time() {
    let x = new Date().getHours();
    if (x >= 6 && x < 12) {
        document.getElementById("t").innerHTML = "Good morning";
    } else if (x >= 12 && x < 17) {
        document.getElementById("t").innerHTML = "Good Afternoon";
    } else if (x >= 17 && x < 21){
        document.getElementById("t").innerHTML = "Good Evening";
    }else{
        document.getElementById("t").innerHTML = "Good Night";
    }
}
function getname(){
    let a=prompt("Please Enter Your Name");
    document.getElementById("n").innerHTML = a;
}
function handleKeyPress(event) {
    if (event.key === '~') {
        document.getElementById('hiddenLink').click();
    }
}
document.addEventListener('keydown', handleKeyPress);
