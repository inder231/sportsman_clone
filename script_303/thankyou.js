let images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUurxnfvYvpQuREUHEF_qL0SAYFwMVMy1OYA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS289qjVoB7cjAzpwqQRguZ4a9vq53KWzHh2A&usqp=CAU",
    "https://morethankyounotes.com/wp-content/uploads/2017/02/Customer-Thank-You-Note-1.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoGyoQ2M00HIkk06DEqrsjU-hIjoBSG9LQA&usqp=CAU"

]

let container = document.getElementById("imgbox")

let img1 = document.createElement("img")
img1.setAttribute("class", "image")
img1.src = images[images.length - 1]
container.append(img1)

let interval;

function startslideshow() {

    let count = 0;

    interval = setInterval(function () {

        container.innerHTML = null;

        if (count == images.length) {
            count = 0;
        }

        let img = document.createElement("img")
        img.setAttribute("class", "image")
        img.src = images[count]

        container.append(img)
        count++

    }, 1000)

}

startslideshow()