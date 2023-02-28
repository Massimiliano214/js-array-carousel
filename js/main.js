const imgList = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

const listImg = document.querySelector(".list_img");

let wrapCont = "";
for (let i = 0; i < imgList.length; i++) {
    const insertImg =
    `
        <div class="image d_none">
            <img class="photo" src="${imgList[i]}">
        </div>    
    `;

    wrapCont += insertImg;
    console.log(wrapCont);
};

listImg.innerHTML = wrapCont;

const wrapImgDom = document.getElementsByClassName("image");

let activeImg = 0;

wrapImgDom[activeImg].classList.add("d_block");

const nextImg = document.querySelector(".down_button");
const backImg = document.querySelector(".up_button");

nextImg.addEventListener ("click",
    function() {
        if (activeImg < wrapImgDom.lenght - 1) {
            wrapImgDom[activeImg].classList.remove("d_block")

            activeImg++;

            wrapImgDom[activeImg].classList.add("d_block")

        }

    }


);



