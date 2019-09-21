window.onload = function() {

  document.querySelector('.hamburger').addEventListener('click', function(){

    var lines = document.querySelectorAll('.line');
    for(line of lines){
      line.classList.toggle('rotate');
    }

    document.querySelector('.nav').classList.toggle('openNav');
    console.log(document.querySelector('.nav'));
  })
}
