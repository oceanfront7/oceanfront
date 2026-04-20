
var image = document.getElementById("image");

var images = ["https://www.rd.com/wp-content/uploads/2016/09/03-not-weird-facts-rain-Mr_Twister.jpg", "https://www.pewtrusts.org/-/media/post-launch-images/2022/11/gettyimages1198849037jpgmaster/1x1_s.jpg", "https://static01.nyt.com/images/2022/10/04/multimedia/06ASKWELL-MATCHA1/06ASKWELL-MATCHA1-superJumbo.jpg", "https://oceanpanel.org/wp-content/uploads/2020/06/summer-time-under-the-sea-ocean-water-2021-08-28-14-51-43-utc-scaled.jpg", "https://www.worldatlas.com/r/w1200/upload/83/db/8f/geography.jpg", "https://www.montmarte.com/cdn/shop/articles/1._An_oil_paint_beach_scene_with_Mont_Marte_oil_paints_and_brushes_lying_on_top.jpg?v=1678670289"];

var index = 0;

function updateImage() {

image.src = images[index];

index = (index + 1) % images.length;

}

setInterval(updateImage, 700);