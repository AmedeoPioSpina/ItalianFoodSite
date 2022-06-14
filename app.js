const showMoreBtn = document.querySelector("#showMoreBtn");
let clickTurn = 0;

showMoreBtn.addEventListener("click", () => {
    const dish = document.querySelectorAll(".dish");
    if(clickTurn == 0){
        clickTurn += 1;
        dish.forEach((dish) =>{
            const dishText = dish.querySelector(".infoDish");
            dishText.style.height = "9rem";
            dishText.style.whiteSpace = "normal";
        });
    }else{
        clickTurn -= 1;
        dish.forEach((dish) =>{
            const dishText = dish.querySelector(".infoDish");
            dishText.style.height = "1rem";
            dishText.style.whiteSpace = "nowrap";
        });
    };
});