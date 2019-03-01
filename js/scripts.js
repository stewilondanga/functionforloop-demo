var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var ctx = document.getElementById("star").getContext("2d");
var cw = 200;
var ch = 200;
var box = {
  x: cw / 2,
  y: ch / 2
};
var delay = 0;
var speed = 400;
ctx.fillStyle = 'red';
ctx.lineWidth = 1;
ctx.fillRect(10, 10, 10, 10); // red box
ctx.strokeRect(box.x, box.y, 10, 10); // player

/*var move = {
  up: function(){
    setTimeout(function(){
      ctx.clearRect(box.x-1, box.y-1, 12,12);
      box.y -= 10;
      ctx.strokeRect(box.x, box.y, 10,10);
    }, delay);
    delay += speed;
  },
  down: function(){
    setTimeout(function(){
      ctx.clearRect(box.x-1, box.y-1, 12,12);
      box.y += 10;
      ctx.strokeRect(box.x, box.y, 10,10);
    }, delay);
    delay += speed;
  },
  left: function(){
    setTimeout(function(){
      ctx.clearRect(box.x-1, box.y-1, 12,12);
      box.x -= 10;
      ctx.strokeRect(box.x, box.y, 10,10);
    }, delay);
    delay += speed;
  },
  right: function(){
    setTimeout(function(){
      ctx.clearRect(box.x-1, box.y-1, 12,12);
      box.x += 10;
      ctx.strokeRect(box.x, box.y, 10,10);
    }, delay);
    delay += speed;
  },

};
var fill = {
  black: function() {
    ctx.fillStyle = 'black';
    setTimeout(function(){ctx.fillRect(box.x, box.y, 10,10);}, delay);
  },
  red: function() {
    ctx.fillStyle = 'red';
    setTimeout(function(){ctx.fillRect(box.x, box.y, 10,10);}, delay);
  },
  white: function() {
    ctx.fillStyle = 'white';
    setTimeout(function(){ctx.fillRect(box.x, box.y, 10,10);}, delay);
  } };

start.onclick = function(){
  try{
    eval(code.value);
  }
  catch(e){
    code.value+='// check your code for errors' + e;
  }
}

reset.onclick = function() {
  ctx.clearRect(0,0,cw,ch);
  box.x = cw/2;
  box.y = ch/2;
  ctx.fillStyle = 'red';
  ctx.fillRect(box.x-30, box.y+20, 10,10); // red box
  ctx.strokeRect(box.x, box.y, 10,10); // player
};

document.onclick = function(){delay=0};
