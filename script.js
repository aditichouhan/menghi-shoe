const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".ri-menu-line");

let flag = 0;

menu.addEventListener("click",function(){
    if (flag === 0){
     sidebar.style .transform = "translateY(-0%)";
     flag=1

    } else{
        sidebar.style .transform = "translateY(-100%)";
        flag=0


    }

});


// const button = document.querySelector(".ri-menu-line")
// // const cross = document.querySelector(".ri-arrow-left-circle-fill");
// const overlay = document.querySelector(".sidebar")

// let flag = 0;

// button.addEventListener("click", function () {
//     if (flag === 0) {
//         overlay.style.transform = "translateX(100%)";
//         flag = 1;
//         console.log('fgg');
//     } else if (flag == 1) {
//         overlay.style.transform = "translateX(0%)";
//         flag = 0;
//         console.log('gg');
//     }
// }); 