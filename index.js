console.log('I am index.js')

// const canvas = new fabric.Canvas('Canvas', {
//     width: 500,
//     height: 500,
//     // backgroundColor: 'red'
// });

// canvas.renderAll();

// fabric.Image.fromURL('https://media.istockphoto.com/photos/natural-cosmetics-picture-id1163013366?s=612x612', function(oImg) {
//     canvas.add(oImg);
//     canvas.renderAll()
// });
var canvas = new fabric.Canvas('c');
canvas.backgroundColor = 'yellow';

fabric.Image.fromURL('http://fabricjs.com/assets/pug_small.jpg', function(myImg) {
 //i create an extra var for to change some image properties
 var img1 = myImg.set({ left: 0, top: 0 ,width:150,height:150});
 canvas.add(img1); 
});

canvas.on('mouse:down',function(event){
  if(canvas.getActiveObject()){
    alert(event.target);
  }

})