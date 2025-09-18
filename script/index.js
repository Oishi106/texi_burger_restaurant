const loadCatagory = () => {
    const uri = " https://taxi-kitchen-api.vercel.app/api/v1/categories";

    fetch(uri)  //responser promise
        .then(res => res.json())
        .then((data) => displayCatagory(data.categories));
}  

const loadFoods = (id) => {
    //console.log("load foods called",id)
    const url = `https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`

    fetch(url)
        .then(res => res.json())
        .then((data) => displayFood(data.foods));
};

const loadRandomData = () => {

    const url = `https://taxi-kitchen-api.vercel.app/api/v1/foods/random`

    fetch(url)
        .then(res => res.json())
        .then((data) => displayFood(data.foods));
}




const displayCatagory = (catagories) => {
    //console.log(catagories); 

    // 1. jekhane rakhbo seta ke dhore niye ashaa
    const catContainer = document.getElementById("category-container")
    // console.log(catContainer)

    catContainer.innerHTML = "";      //etar mane holo empty kore fela,,kno button ee r thakbe nah
    for (let cat of catagories) {

        //console.log(cat)

        //3.create html elementss
        const catagoryCard = document.createElement("div");
        catagoryCard.innerHTML = `
          <button onclick="loadFoods(${cat.id})" class="btn btn-block  justify-start shadow btn-category">
            <img
              src="${cat.categoryImg}"
              alt=""
              class="w-10"
            />${cat.categoryName}
          </button>
         
         `;
        catContainer.append(catagoryCard);
    }
}



const displayFood = (foods) => {
    const foodContainer = document.getElementById("food-container");

    foodContainer.innerHTML = "";
    for (let food of foods) {

        const foodCard = document.createElement("div");
        foodCard.innerHTML = `
        <div class="p-5 bg-white flex gap-3 shadow rounded-xl">
            <div class="img flex-1">
              <img
                src="${food.foodImg}"
                alt=""
                class="w-[160px] rounded-xl h-[160px] object-cover"
              />
            </div>
            <div class="flex-2">
              <h1 class="text-xl font-bold">
                ${food.title}
              </h1>

              <div class="badge badge-warning">${food.category}</div>

              <div class="divider divider-end">
                <h2 class="text-yellow-600 font-semibold">
                  $ <span class="price">${food.price}</span> BDT
                </h2>
              </div>

              <button class="btn btn-warning">
                <i class="fa-solid fa-square-plus"></i>
                Add This Item
              </button>
            </div>
          </div>
        
        
        `;

        foodContainer.append(foodCard);
    }



}

loadCatagory();
loadRandomData();