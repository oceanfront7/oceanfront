
var image = document.getElementById("image");

var images = ["https://i.ibb.co/BgDLXCX/172688890271200983.jpg", "https://i.ibb.co/XDQKpNV/imageedit-10-9543590963.png", "https://i.ibb.co/rMkQ1Zy/imageedit-12-6310332844.png", "https://i.ibb.co/fFvLkXF/imageedit-14-3382152793.png", "https://i.ibb.co/BrszMxD/imageedit-5-3654717678.jpg","https://i.ibb.co/ZdmYs6j/imageedit-4-3760493610.jpg","https://i.ibb.co/BrycXPp/imageedit-2-3052928742.jpg", "https://i.ibb.co/1JWThvD/imageedit-6-8250880774.jpg"];

var index = 0;

function updateImage() {

image.src = images[index];

index = (index + 1) % images.length;

}

setInterval(updateImage, 700);