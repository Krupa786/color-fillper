const btn = document.querySelector('#btn')

btn.addEventListener('click',function(){

    const color = 'rgb('+ random(225)+','+ random(225)+','+ random(225)+')'
  document.body.style.backgroundColor =color;

});

function random(number){
    return Math.floor(Math.random()*(number+1))
}





