var imgs = document.querySelectorAll('img');
console.log(imgs);
let x = 0;

for(let i = 0; i < imgs.length; i++){ 
  imgs[i].addEventListener("mouseover", test);
  imgs[i].addEventListener("mouseout", test1);
function test() {
  console.log(i);
  imgs[i].setAttribute("src", `img/image${i+1}_2.jpg`);

}
imgs[i].addEventListener("mouseout", test1);
function test1(){
  imgs[i].setAttribute("src", `img/image${i+1}.jpg`);
}
}