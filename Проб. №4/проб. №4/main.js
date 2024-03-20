add.onclick = () => {
    let nom1 = document.getElementById("nom1").value;
    let reg1 = document.getElementById("reg1").value;
    let unoy = document.getElementById("nom2").value;
    let date = new Date();
    if(var1.checked === true){
        save.innerHTML += (` ${date.getDay()}.${date.getMonth()}.${date.getFullYear()} в ${date.getHours()}.${date.getMinutes()}${nom1} ${reg1} <br>`)
     }
    else save.innerHTML += (`${unoy} ${date.getDay()}.${date.getMonth()}.${date.getFullYear()} в ${date.getHours()}.${date.getMinutes()} <br>`)
    localStorage.setItem("save", save.innerHTML)
}

let save = document.getElementById("prorhali")
save.innerHTML = localStorage.getItem("save")

dell.onclick = () =>{
    document.getElementById("prorhali").innerHTML = ("")
    localStorage.setItem("save","")
}