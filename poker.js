let test = document.getElementById("test")


let carte=[]
for (let i = 1; i <53; i++){
    carte[i] = new Image();
    carte[i].src = "./carte/i.png";
    }
test.innerHTML="";
test.appendChild(carte[3]);