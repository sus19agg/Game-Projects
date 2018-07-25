var a = prompt("Player One: Enter Your Name , you will be Blue");
var b = prompt("Player Two: Enter Your Name, you will be Red");
var blue = 0;
var red = 0;
var clr = "blue";
$('h3').text(a+": it is your turn, please pick a column to drop your blue chip.");

var winr = [];
var winl = [];


var circles = $('tr');

function turn() {
  if(blue == red)
  {
    clr="blue";
    $('h3').text(a+": it is your turn, please pick a column to drop your blue chip.");
  }
  else if(blue>red)
  {
    clr = "red";
    $('h3').text(b+": it is your turn, please pick a column to drop your red chip.");
  }
}

function returnColor(a,b) {
  return circles.eq(a).find("td").eq(b).find("button").css("background-color");
}

function horizontal() {
  for(var r=0;r<6;r++)
  {
    for(var c=0;c<4;c++)
    {
      if(returnColor(r,c)==returnColor(r,c+1) && returnColor(r,c)==returnColor(r,c+2) && returnColor(r,c)==returnColor(r,c+3) && returnColor(r,c)!="rgb(128, 128, 128)")
      {
      winr = [r,r,r,r];
      winl = [c,c+1,c+2,c+3];
        return true;
      }
    }
  }
  return false;
}

function vertical() {
  for(var r=0;r<3;r++)
  {
    for(var c=0;c<7;c++)
    {
      if(returnColor(r,c)==returnColor(r+1,c) && returnColor(r,c)==returnColor(r+2,c) && returnColor(r,c)==returnColor(r+3,c) && returnColor(r,c)!="rgb(128, 128, 128)")
      {
        winr = [r,r+1,r+2,r+3];
       winl = [c,c,c,c];
        return true;
      }
    }
  }
return false;
}

function diagnolltr() {
  for(var r=0;r<3;r++)
  {
    for(var c=0;c<4;c++)
    {
      if(returnColor(r,c)==returnColor(r+1,c+1) && returnColor(r,c)==returnColor(r+2,c+2) && returnColor(r,c)==returnColor(r+3,c+3) && returnColor(r,c)!="rgb(128, 128, 128)")
      {
        winr = [r,r+1,r+2,r+3];
        winl = [c,c+1,c+2,c+3];
        return true;
      }
    }
  }
return false;
}

function diagnolrtl() {
  for(var r=0;r<3;r++)
  {
    for(var c=3;c<7;c++)
    {
      if(returnColor(r,c)==returnColor(r+1,c-1) && returnColor(r,c)==returnColor(r+2,c-2) && returnColor(r,c)==returnColor(r+3,c-3) && returnColor(r,c)!="rgb(128, 128, 128)")
      {
        winr = [r,r+1,r+2,r+3];
        winl = [c,c-1,c-2,c-3];
        return true;
      }
    }
  }
return false;
}

function checkwin() {
  if(horizontal() || vertical() || diagnolltr() || diagnolrtl())
  return true;
  else {
    return false;
  }
}

function highlight() {
  for(var x=0;x<4;x++)
  {
    if(circles.eq(winr[x]).find("td").eq(winl[x]).find("button").css("background-color") == "rgb(0, 0, 255)")
    {
      circles.eq(winr[x]).find("td").eq(winl[x]).find("button").css("background-color","rgb(128, 128, 128)")
    }
    else if(circles.eq(winr[x]).find("td").eq(winl[x]).find("button").css("background-color") == "rgb(255, 0, 0)")
    {
      circles.eq(winr[x]).find("td").eq(winl[x]).find("button").css("background-color","rgb(128, 128, 128)");
    }
    else {
      circles.eq(winr[x]).find("td").eq(winl[x]).find("button").css("background-color",clr)
    }
  }
}


function insert() {
    var col = $(this).closest("td").index();
    var row = $(this).closest("tr").index();
    var i = 0;
    if(circles.eq(i).find("td").eq(col).find("button").css("background-color") != "rgb(128, 128, 128)")
    return ;
    while(i<6)
    {
    let val = circles.eq(i).find("td").eq(col).find("button").css("background-color");
    if(val != "rgb(128, 128, 128)")
    {
      break;
    }
    i++;
    }
    circles.eq(i-1).find("td").eq(col).find("button").css("background-color",clr);
    if(checkwin() == true)
    {
      $('h3').fadeOut(100);
      $('h1').text("CONGRATULATIONS !!!     ").css("font-size","60px");
      if(clr == "blue"){
      $('h2').text(a+" has won the game! Refresh your browser to play again !!").css("font-size","50px");
}
      else {
        $('h2').text(b+" has won the game! Refresh your browser to play again !!").css("font-size","50px");
      }
      $("button").unbind("click");
      setInterval("highlight()",200);
    }
    else{
    if(clr == "blue")
    {
      blue++;
    }
    else {
      red++;
    }
    turn();
  }
}

    $("button").click(insert);
