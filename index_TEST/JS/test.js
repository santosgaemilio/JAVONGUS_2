let logo = document.querySelector("#logo")
let page = document.querySelector("#page")
let navi = document.querySelectorAll(".navi")
let navi_i = document.querySelectorAll(".navi_i")
let img_pg = document.querySelector("#img_pg")
let d = document.querySelector("#dice")

// TEST TEST TEST TEST

function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

// TEST TEST TEST TEST
let dice = 2
let pos = 0
function urba(){
    pos = 0
    logo.style.color = "#FFFFFF";
    page.style.backgroundColor =  "#FF4D48";
    for (const element of navi) {
        element.style.color = "#FFFFFF"
    }
    for (const element of navi_i) {
        element.style.color = "#FFFFFF"
    }
    
}

// function urba_media(){
//     if(getWidth()<1300){
//         img_pg.src = "/imgs/urba6.png"
//     }else{
//         img_pg.src = "/imgs/urba4.png"
//     }
// }

function javu(){
    pos = 1
    logo.style.color = "#006637";
    page.style.backgroundColor =  "#FFFCF4";
    for (const element of navi) {
        element.style.color = "#000000"
    }
    for (const element of navi_i) {
        element.style.color = "#006637"
    }
   
}

// function javu_media(){
//     if(getWidth()<1300){
//         img_pg.src = "/imgs/blue.png"
//     }else{
//         img_pg.src = "/imgs/javucci.png"
//     }
// }

function jspenny(){
    pos = 2
    logo.style.color = "#FAB0AE";
    page.style.backgroundColor =  "#BDEFFF";
    for (const element of navi) {
        element.style.color = "#000000"
    }
    for (const element of navi_i) {
        element.style.color = "#FAB0AE"
    }
    
}

// function jspenny_media(){
//    if(getWidth()<1300){
//         img_pg.src = "/imgs/urba6.png"
//     }else{
//         img_pg.src = "/imgs/jspenny.png"
//     }
// }




function forward(){
    if(pos === 0){dice = 2}
    else if(pos === 1){dice = 3}
    else if(pos === 2){dice = 1}
    switch (dice) {
        case 1:
            // setInterval(urba,1)
            urba()
            break;
        case 2:
            // setInterval(javu,1)
            javu()
            break;
        case 3:
            // setInterval(jspenny,1)
            jspenny()
            break;
    }   

   
    // if(dice>=3){
    //     dice = 2
    // }else{
    //     dice = dice + 1
    // }
   
    // CHECK
    console.log("dice "+ dice);
    
    console.log("pos "+pos);
}

function back(){
    if(pos === 0){dice = 3}
    else if(pos === 1){dice = 1}
    else if(pos === 2){dice = 2}
    switch (dice) {
        case 1:
            // setInterval(urba,1)
            urba()
            break;
        case 2:
            // setInterval(javu,1)
            javu()
            break;
        case 3:
            // setInterval(jspenny,1)
            jspenny()
            break;
    }   

    // if(dice<=1){
    //     dice = 1
    // }else{
    //     dice = dice - 1
    // }
   
    // CHECK
    console.log("dice "+ dice);
    console.log("pos "+pos);
}
function media(){
    switch (pos) {
        case 0:
            if(getWidth()<1300){
                img_pg.src = "/imgs/urba6.png"
            }else{
                img_pg.src = "/imgs/urba4.png"
            }
            break;
        case 1:
            if(getWidth()<1300){
                img_pg.src = "/imgs/blue.png"
            }else{
                img_pg.src = "/imgs/javucci.png"
            }
            break;
        case 2:
            if(getWidth()<1300){
                img_pg.src = "/imgs/urba6.png"
            }else{
                img_pg.src = "/imgs/jspenny.png"
            }
            break;
        }
}
console.log("dice "+ dice);
console.log("pos "+pos);




setInterval(media,1)

this.canvas.addEventListener('mousewheel',function(event){
    mouseController.wheel(event);
    event.preventDefault();
}, false);