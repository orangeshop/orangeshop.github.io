const body = document.querySelector("body");
const image = ["0.png","1.png"];

const choose_img = image[Math.floor(Math.random()*image.length)];
const bgimage = document.createElement("img");
//console.log(choose_img);
bgimage.src = `img/${choose_img}`;



//body.style.backgroundImage = "0.PNG";

//document.body.appendChild(bgimage);

const backgroundImage = "url('" + bgimage.src + "')";
//console.log(backgroundImage);
body.style.backgroundImage = backgroundImage;



/*var mql = window.matchMedia("screen and (max-width: 768px)");

if (mql.matches) {
	body.style.backgroundSize = "720px";
} else {
	console.log("화면의 너비가 768px 보다 큽니다.");
}*/


