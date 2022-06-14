const showMoreBtn = document.querySelector("#showMoreBtn");
let clickTurn = 0;

showMoreBtn.addEventListener("click", () => {
    const dish = document.querySelectorAll(".dish");
    if(clickTurn == 0){
        clickTurn += 1;
        dish.forEach((dish) =>{
            const dishText = dish.querySelector("p");
            dishText.innerHTML= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore laboriosam voluptas, harum voluptates perspiciatis praesentium cupiditate doloremque dignissimos, sapiente ea voluptatem. Doloribus delectus praesentium facilis dolorum doloremque voluptate sint quod.";
        });
    }else{
        clickTurn -= 1;
        dish.forEach((dish) =>{
            const dishText = dish.querySelector("p");
            dishText.innerHTML= "Lorem ipsum dolor, sit amet consectetur adipisicing...";
        });
    };
});