let images = [
    "https://static.oxinis.com/healthmug/image/asset/454-ru.png",
    "https://static.oxinis.com/healthmug/image/asset/386-mu.png",
    "https://static.oxinis.com/healthmug/image/asset/354-wn.jpg",
    "https://static.oxinis.com/healthmug/image/asset/528-po.png",
];





let container = document.getElementById("myslideshow");


function startslideshow() {

    let counter = 0;
    let img = document.createElement("img");
    img.src = images[0];

    container.append(img);
    counter = counter + 1;

    let interval = setInterval(function() {
        container.innerHTML = null;

        if (counter === images.length) {
            counter = 0;
        }
        let img = document.createElement("img");

        img.src = images[counter];
        container.append(img);
        counter = counter + 1;
    }, 3000);
}
startslideshow();



let img = document.createElement("img");