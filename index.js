var fps = 10;

//var cvs = document.getElementById('gameCanvas');
//var ctx = cvs.getContext('2d');

var cookies = 0;
var cookiesPS = 0;
var clickIncrease = 1;

var upgrade1;


class upgrade{

  constructor(name, initialCost, efficiency){
    this.name = name;
    this.cost = initialCost;
    this.efficiency = efficiency;
    this.owned = 0;
  }

  purchase(){
    if (cookies >= this.cost) {
      this.owned ++;
      cookies -= this.cost;
      this.cost += Math.round(this.cost * 0.15);
      cookiesPS += this.efficiency;
    } else {
      alert("You cannot afford this yet");
    }
    updateHTMLDisplays();
  }

  update(){
    document.getElementById(this.name + "AmtOwned").innerHTML = "Owned: " + this.owned;
    document.getElementById(this.name + "Price").innerHTML = this.cost + " cookies";;
  }

}

upgrade1 = new upgrade("upgrade1", 15, 0.1);
upgrade2 = new upgrade("upgrade2", 100, 1);

window.onload = function(){

  setInterval(function(){
    cookies += cookiesPS/fps
    console.log(cookiesPS);
    updateHTMLDisplays();

  }, 1000/fps)
}

/*increaseClickPurchase(){
  if (cookies >= this.cost) {
    this.owned ++;
    cookies -= this.cost;
    this.cost += Math.round(this.cost * 0.15);
    cookiesPS += this.efficiency;
    } else {
      alert("You cannot afford this yet");
    }
    updateHTMLDisplays();
}
*/

function cookieClick(){
  cookies += clickIncrease;
  console.log(cookies);

  updateHTMLDisplays();
}

function updateHTMLDisplays(){
  document.getElementById("cookieTotal").innerHTML = Math.floor(cookies) + ' cookies';
  document.getElementById("cookiePS").innerHTML = "CPS: " + Math.round(cookiesPS*10)/10;
  document.getElementById("title").innerHTML = Math.floor(cookies) + ' cookies';
  upgrade1.update();
  upgrade2.update();
}

/*function rect(x, y, w, h, colour){
  ctx.fillStyle = colour;
  ctx.fillRect(x, y, w, h);
}*/
