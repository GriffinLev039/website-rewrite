const sigImg = document.getElementById("significantIMG");
const imgContainer = document.getElementById("StickImage");

document.addEventListener('scroll',()=>{
    let windowHeight = (window.scrollY / window.innerHeight);
    imgContainer.textContent =  (window.scrollY / window.innerHeight);

    switch (Math.floor(windowHeight)) { //Every time the distance scrolled passed a given
                                        //point that is every 100vh, changes the BG color
        case 0:
            imgContainer.style.backgroundColor = "blue";
            break;
        case 1:
            imgContainer.style.backgroundColor = "orange";
            break;
        case 2:
            imgContainer.style.backgroundColor = "yellow";
            break;
        case 3:
            imgContainer.style.backgroundColor = "wheat";
            break;
        case 4:
            imgContainer.style.backgroundColor = "green";
            break;
        case 5:
            imgContainer.style.backgroundColor = "teal";
            break;
        default:
            imgContainer.style.backgroundColor = "red";
            break;
    }
});

