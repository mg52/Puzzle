var k = [];
var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var arrayno, temp,temp2, animationstart = false, animationonaction = false, direction;
k[1] = document.getElementById("kare1");
k[2] = document.getElementById("kare2");
k[3] = document.getElementById("kare3");
k[4] = document.getElementById("kare4");
k[5] = document.getElementById("kare5");
k[6] = document.getElementById("kare6");
k[7] = document.getElementById("kare7");
k[8] = document.getElementById("kare8");
k[9] = document.getElementById("kare9");
k[10] = document.getElementById("kare10");
k[11] = document.getElementById("kare11");
k[12] = document.getElementById("kare12");
k[13] = document.getElementById("kare13");
k[14] = document.getElementById("kare14");
k[15] = document.getElementById("kare15");
k[0] = document.getElementById("kare0");
if(detectmob() == 0){
k[1].addEventListener("click",move1);
k[2].addEventListener("click",move2);
k[3].addEventListener("click",move3);
k[4].addEventListener("click",move4);
k[5].addEventListener("click",move5);
k[6].addEventListener("click",move6);
k[7].addEventListener("click",move7);
k[8].addEventListener("click",move8);
k[9]. addEventListener("click",move9);
k[10].addEventListener("click",move10);
k[11].addEventListener("click",move11);
k[12].addEventListener("click",move12);
k[13].addEventListener("click",move13);
k[14].addEventListener("click",move14);
k[15].addEventListener("click",move15);
}
else{
k[1].addEventListener("touchstart",move1);
k[2].addEventListener("touchstart",move2);
k[3].addEventListener("touchstart",move3);
k[4].addEventListener("touchstart",move4);
k[5].addEventListener("touchstart",move5);
k[6].addEventListener("touchstart",move6);
k[7].addEventListener("touchstart",move7);
k[8].addEventListener("touchstart",move8);
k[9]. addEventListener("touchstart",move9);
k[10].addEventListener("touchstart",move10);
k[11].addEventListener("touchstart",move11);
k[12].addEventListener("touchstart",move12);
k[13].addEventListener("touchstart",move13);
k[14].addEventListener("touchstart",move14);
k[15].addEventListener("touchstart",move15);
}
function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}
function main () {
	karistir();
	diz();
	loopinterval();
}
function diz(){
	k[array[0]].style.top = "50px";
	k[array[0]].style.left = "100px";
	k[array[1]].style.top = "50px";
	k[array[1]].style.left = "250px";
	k[array[2]].style.top = "50px";
	k[array[2]].style.left = "400px";
	k[array[3]].style.top = "50px";
	k[array[3]].style.left = "550px";
	k[array[4]].style.top = "200px";
	k[array[4]].style.left ="100px";
	k[array[5]].style.top = "200px";
	k[array[5]].style.left = "250px";
	k[array[6]].style.top = "200px";
	k[array[6]].style.left = "400px";
	k[array[7]].style.top = "200px";
	k[array[7]].style.left = "550px";
	k[array[8]].style.top = "350px";
	k[array[8]].style.left = "100px";
	k[array[9]].style.top = "350px";
	k[array[9]].style.left = "250px";
	k[array[10]].style.top = "350px";
	k[array[10]].style.left = "400px";
	k[array[11]].style.top = "350px";
	k[array[11]].style.left = "550px";
	k[array[12]].style.top = "500px";
	k[array[12]].style.left = "100px";
	k[array[13]].style.top = "500px";
	k[array[13]].style.left = "250px";
	k[array[14]].style.top = "500px";
	k[array[14]].style.left = "400px";
	k[array[15]].style.top = "500px";
	k[array[15]].style.left = "550px";
	//statusdiv.innerHTML = array;
}
function loopinterval(){
setInterval(function(){
	if(animationstart)
	{
		animationonaction = true;
		if(direction == 'left')
		{
			k[array[arrayno]].style.left = (parseInt(k[array[arrayno]].style.left) - 10) + "px";
			if((temp2 - parseInt(k[array[arrayno]].style.left)) == 150) {
				animationstart = false; 
				animationonaction = false;
				temp = array[arrayno - 1];
				array[arrayno - 1] = array[arrayno];
				array[arrayno] = temp;
				direction = '';
				diz();
			}
			
		}
		if(direction == 'right')
		{
			k[array[arrayno]].style.left = (parseInt(k[array[arrayno]].style.left) + 10) + "px";
			if((parseInt(k[array[arrayno]].style.left) - temp2) == 150) {
				animationstart = false; 
				animationonaction = false;
				temp = array[arrayno + 1];
				array[arrayno + 1] = array[arrayno];
				array[arrayno] = temp;
				direction = '';
				diz();
			}
			
		}
		if(direction == 'up')
		{
			k[array[arrayno]].style.top = (parseInt(k[array[arrayno]].style.top) - 10) + "px";
			if(temp2 - (parseInt(k[array[arrayno]].style.top)) == 150) {
				animationstart = false; 
				animationonaction = false;
				temp = array[arrayno -4];
				array[arrayno -4] = array[arrayno];
				array[arrayno] = temp;
				direction = '';
				diz();
			}
			
		}
		if(direction == 'down')
		{
			k[array[arrayno]].style.top = (parseInt(k[array[arrayno]].style.top) + 10) + "px";
			if((parseInt(k[array[arrayno]].style.top) - temp2) == 150) {
				animationstart = false; 
				animationonaction = false;
				temp = array[arrayno + 4];
				array[arrayno + 4] = array[arrayno];
				array[arrayno] = temp;
				direction = '';
				diz();
			}
			
		}
	}
},16);
}

function move(){
	if(arrayno > 0 && !animationstart && !animationonaction)
	if(array[arrayno-1] == 0 && arrayno != 4 && arrayno != 8 && arrayno != 12)
	{
		temp2 = parseInt(k[array[arrayno]].style.left);
		direction = 'left';
		animationstart = true;
	}
	if(arrayno < 15 && !animationstart && !animationonaction)
	if(array[arrayno+1] == 0 && arrayno != 3 && arrayno != 7 && arrayno != 11)
	{
		temp2 = parseInt(k[array[arrayno]].style.left);
		direction = 'right';
		animationstart = true;
	}
	if(arrayno > 3 && !animationstart && !animationonaction)
	if(array[arrayno-4] == 0)
	{
		temp2 = parseInt(k[array[arrayno]].style.top);
		direction = 'up';
		animationstart = true;	
	}
	if(arrayno < 12 && !animationstart && !animationonaction)
	if(array[arrayno+4] == 0)
	{
		temp2 = parseInt(k[array[arrayno]].style.top);
		direction = 'down';
		animationstart = true;	
	}
}

function move1() {
	for (i = 0;i<16 ; i++)	{
		if(array[i] == 1 && !animationstart && !animationonaction)		{
			arrayno = i;		
		}	
	}	move();
}
function move2() {	for (i = 0;i<16 ; i++)	{		if(array[i] == 2 && !animationstart && !animationonaction)		{			arrayno = i;		}	}	move();}
function move3() {	for (i = 0;i<16 ; i++)	{		if(array[i] == 3 && !animationstart && !animationonaction)		{			arrayno = i;		}	}	move();}
function move4() {	for (i = 0;i<16 ; i++)	{		if(array[i] == 4 && !animationstart && !animationonaction)		{			arrayno = i;		}	}	move();}
function move5() {	for (i = 0;i<16 ; i++)	{		if(array[i] == 5 && !animationstart && !animationonaction)		{			arrayno = i;		}	}	move();}
function move6() {	for (i = 0;i<16 ; i++)	{		if(array[i] == 6 && !animationstart && !animationonaction)		{			arrayno = i;		}	}	move();}
function move7() {	for (i = 0;i<16 ; i++)	{		if(array[i] == 7 && !animationstart && !animationonaction)		{			arrayno = i;		}	}	move();}
function move8() {	for (i = 0;i<16 ; i++)	{		if(array[i] == 8 && !animationstart && !animationonaction)		{			arrayno = i;		}	}	move();}
function move9() {	for (i = 0;i<16 ; i++)	{		if(array[i] == 9 && !animationstart && !animationonaction)		{			arrayno = i;		}	}	move();}
function move10() {	for (i = 0;i<16 ; i++)	{		if(array[i] == 10 && !animationstart && !animationonaction)		{			arrayno = i;		}	}	move();}
function move11() {	for (i = 0;i<16 ; i++)	{		if(array[i] == 11 && !animationstart && !animationonaction)		{			arrayno = i;		}	}	move();}
function move12() {	for (i = 0;i<16 ; i++)	{		if(array[i] == 12 && !animationstart && !animationonaction)		{			arrayno = i;		}	}	move();}
function move13() {	for (i = 0;i<16 ; i++)	{		if(array[i] == 13 && !animationstart && !animationonaction)		{			arrayno = i;		}	}	move();}
function move14() {	for (i = 0;i<16 ; i++)	{		if(array[i] == 14 && !animationstart && !animationonaction)		{			arrayno = i;		}	}	move();}
function move15() {	for (i = 0;i<16 ; i++)	{		if(array[i] == 15 && !animationstart && !animationonaction)		{			arrayno = i;		}	}	move();}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function karistir(){
	shuffle(array);
}
main();
