var val = [];
val = document.querySelectorAll("td");
var but = document.querySelector(".b");
var changeheading = document.querySelector("h4");
var num;
var s=0;
var text="X";


var xo;

function check() {
	for(let j=0;j<9;j=j+3)
	{
		if(val[j].textContent==val[j+1].textContent && val[j+1].textContent==val[j+2].textContent && (val[j].textContent=="X" || val[j].textContent=='O'))
			{xo=val[j].textContent;return true;}
	}
	for(let k=0;k<3;k++)
	{
		if(val[k].textContent==val[k+3].textContent && val[k+3].textContent==val[k+6].textContent  && (val[k].textContent=="X" || val[k].textContent=='O'))
			{xo=val[k].textContent;return true;}
	}
	if(val[0].textContent==val[4].textContent && val[8].textContent==val[4].textContent && (val[0].textContent=="X" || val[0].textContent=='O'))
		{xo=val[0].textContent;return true;}
	if(val[2].textContent==val[4].textContent && val[6].textContent==val[4].textContent && (val[2].textContent=="X" || val[2].textContent=='O'))
		{xo=val[2].textContent;return true;}
	return false;
}


function add_event() {
for(let i=0;i<val.length;i++){
val[i].addEventListener("click",function() {
	if(num%2==0)
	{
		text="X";
	}
	else
	{
		text="O";
	}
	num++;
	val[i].textContent=text;
  if(check()==true)
  {
  	alert(xo+" has won the game !!");
  	changeheading.innerHTML = "<strong>Game Over !!</strong>";
  	but.textContent="Restart !";
  }
  return;
});
}	
}


but.addEventListener("click",function(){
  for(var i=0;i<val.length;i++)
  {
    val[i].textContent="";
  }
  changeheading.innerHTML = "Players can choose 'X' or 'O', Tap on any cell once to insert the sign , The player who stats the game is automatically assinged a 'X' :)";
  num=0;
  if(s==0)
  {
  	add_event();
  }
  s++;
});
