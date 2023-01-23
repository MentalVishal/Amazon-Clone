const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


Name = document.getElementById("naam");
address = document.getElementById("d_add");
pincode = document.getElementById("pincode");
fname = document.getElementById("fname");

loguser = JSON.parse(localStorage.getItem("login_user"));
console.log(loguser.Name);

if(loguser!=null){
    Name.innerText=loguser.Name;
    address.innerText=loguser.City;
    pincode.innerText= loguser.Pincode;
    fname.innerText= loguser.Name;
}



