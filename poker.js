let test = document.getElementById("test")
let carte=[]
let paulette1=document.getElementById("paulette1")
let paulette2=document.getElementById("paulette2")
let paulette3=document.getElementById("paulette3")
let paulette4=document.getElementById("paulette4")
let paulette5=document.getElementById("paulette5")
let paulette6=document.getElementById("paulette6")
let paulette7=document.getElementById("paulette7")
let paulette8=document.getElementById("paulette8")
let paulette9=document.getElementById("paulette9")
let paulette10=document.getElementById("paulette10")
let paulette11=document.getElementById("paulette11")

//for (let i = 0; i <53; i++){
  //  carte.push("./Carte/"+i+".png")
    //}

    
carte[0] = new Image();
carte[0].src = './Carte/1.png';
carte[1] = new Image();
carte[1].src = './Carte/2.png';
carte[2] = new Image();
carte[2].src = './Carte/3.png';
carte[3] = new Image();
carte[3].src = './Carte/4.png';
carte[4] = new Image();
carte[4].src = './Carte/5.png';
carte[5] = new Image();
carte[5].src = './Carte/6.png';
carte[6] = new Image();
carte[6].src = './Carte/7.png';
carte[7] = new Image();
carte[7].src = './Carte/8.png';
carte[8] = new Image();
carte[8].src = './Carte/9.png';
carte[9] = new Image();
carte[9].src = './Carte/10.png';
carte[10] = new Image();
carte[10].src = './Carte/11.png';
carte[11] = new Image();
carte[11].src = './Carte/12.png';
carte[12] = new Image();
carte[12].src = './Carte/13.png';
carte[13] = new Image();
carte[13].src = './Carte/14.png';
carte[14] = new Image();
carte[14].src = './Carte/15.png';
carte[15] = new Image();
carte[15].src = './Carte/16.png';
carte[16] = new Image();
carte[16].src = './Carte/17.png';
carte[17] = new Image();
carte[17].src = './Carte/18.png';
carte[18] = new Image();
carte[18].src = './Carte/19.png';
carte[19] = new Image();
carte[19].src = './Carte/20.png';
carte[20] = new Image();
carte[20].src = './Carte/21.png';
carte[21] = new Image();
carte[21].src = './Carte/22.png';
carte[22] = new Image();
carte[22].src = './Carte/23.png';
carte[23] = new Image();
carte[23].src = './Carte/24.png';
carte[24] = new Image();
carte[24].src = './Carte/25.png';
carte[25] = new Image();
carte[25].src = './Carte/26.png';
carte[26] = new Image();
carte[26].src = './Carte/27.png';
carte[27] = new Image();
carte[27].src = './Carte/28.png';
carte[28] = new Image();
carte[28].src = './Carte/29.png';
carte[29] = new Image();
carte[29].src = './Carte/30.png';
carte[30] = new Image();
carte[30].src = './Carte/31.png';
carte[31] = new Image();
carte[31].src = './Carte/32.png';
carte[32] = new Image();
carte[32].src = './Carte/33.png';
carte[33] = new Image();
carte[33].src = './Carte/34.png';
carte[34] = new Image();
carte[34].src = './Carte/35.png';
carte[35] = new Image();
carte[35].src = './Carte/36.png';
carte[36] = new Image();
carte[36].src = './Carte/37.png';
carte[37] = new Image();
carte[37].src = './Carte/38.png';
carte[38] = new Image();
carte[38].src = './Carte/39.png';
carte[39] = new Image();
carte[39].src = './Carte/40.png';
carte[40] = new Image();
carte[40].src = './Carte/41.png';
carte[41] = new Image();
carte[41].src = './Carte/42.png';
carte[42] = new Image();
carte[42].src = './Carte/43.png';
carte[43] = new Image();
carte[43].src = './Carte/44.png';
carte[44] = new Image();
carte[44].src = './Carte/45.png';
carte[45] = new Image();
carte[45].src = './Carte/46.png';
carte[46] = new Image();
carte[46].src = './Carte/47.png';
carte[47] = new Image();
carte[47].src = './Carte/48.png';
carte[48] = new Image();
carte[48].src = './Carte/49.png';
carte[49] = new Image();
carte[49].src = './Carte/50.png';
carte[50] = new Image();
carte[50].src = './Carte/51.png';
carte[51] = new Image();
carte[51].src = './Carte/52.png';



//test.innerHTML="";
//test.appendChild(carte[51]);

btnValider.addEventListener("click",tirage)

function tirage() {
	cpt = 0
	cpt2 = 0
	resultat = []
    tableau = []

	for (let i = 0; i < 11; i++) {

		let tirageAleatoire = Math.floor(Math.random() * Math.floor(51) + 1)

		// Tant que la nouvelle valeur aleatoire est deja dans le tableau des tirages on refait une nouvelle selection
		while (recherche(resultat, tirageAleatoire)) {
			tirageAleatoire = Math.floor(Math.random() * Math.floor(51) + 1)
		}
		resultat.push(tirageAleatoire)
        tableau.push(carte[tirageAleatoire])
	}
	premierTour()
    console.log(resultat)
}

function recherche(tab, valeur) {
	let test = false

	// On parcourt le tableau et pour chaque valeur on verifie si cette valeur est egale a la variable "valeur" et si oui on retourne 'vrai' et on arrete la boucle
	for (let i = 0; i < tab.length; i++) {

		if (valeur == tab[i]) {
			test = true
			break
		}
	}
	return test
}


function premierTour(){

    test.innerHTML="";
    test.appendChild(tableau[0]);
}
function displayImage(){
    for (let i=0 ; i<11 ; i++){
    //the first statement should generate a random number in the range 0 to 6 (the subscript values of the image file names in the imagesArray)
    var num = Math.floor(Math.random() * 51+1); // 0...6
    //the second statement display the random image from the imagesArray array in the canvas image using the random number as the subscript value
    //document.canvas.src = carte[num];
    resultat.push(carte[num])
    test.innerHTML="";
    test.appendChild(carte[num]);
    }
}