import  { food_items,drink_items } from "../item/food-items";
import { dialogMenu } from "../item/dialog";
import { clearScreen } from "../functions/bodyContent";
export const menuItems =(item)=>{

    //DOM Elements
    const contentSpace = document.querySelector('.content-body');
    const body = document.querySelector('#content');

    switch(item){
        case 'Meals':
            render(food_items);
            break;

        case 'Sides':
            break;
        
        case 'Drinks':
            render(drink_items);
            break;
    }
    
    
    const closeButton = document.querySelector('.close-button');
    const selectMealBtn = document.querySelectorAll('.card>button');

    selectMealBtn.forEach(button =>{
        button.addEventListener('click',handleSelectBtnEvents);
    })

    //render food items on screen 
    function render(item){

        clearScreen();
        
            for(let i =0; i < item.length; i++){
                createFoodItem(i, item[i]);
            }
            body.appendChild(contentSpace);
        
        
    }

    function createFoodItem(value, item){
        const itemDiv = document.createElement('div');
        const foodName = document.createElement('h3');
        
        const price = document.createElement('span');
        const foodImage = document.createElement('img');
        const foodSelectBtn = document.createElement('button');
    
        itemDiv.classList.add('card');

    
        foodName.textContent = item.getName();
        price.textContent= `$${item.getPrice()}`;
       
        foodImage.setAttribute('src', `../media/${value}.png`);
        foodImage.setAttribute('alt', `${item.getName()}`);

        foodSelectBtn.textContent='Select Item'
        //foodSelectBtn.onclick = createDialog(item);
        //foodSelectBtn.addEventListener('click', createDialog(item));
    
        itemDiv.dataset.key =value;
        itemDiv.dataset.type = item.constructor.name;
        itemDiv.appendChild(foodImage);
        itemDiv.appendChild(foodName);

        if(item.constructor.name === 'Meal'){
            const foodIngredients = document.createElement('p')
            foodIngredients.textContent = item.getIngredients();
            itemDiv.appendChild(foodIngredients);
        }
        
        itemDiv.appendChild(price);
        itemDiv.appendChild(foodSelectBtn)
    
        contentSpace.appendChild(itemDiv);
     }

     function handleSelectBtnEvents(e){
        const item = e.target.parentElement.dataset.key;
        const type= e.target.parentElement.dataset.type;
        

        switch(type){
            case 'Meal':
                dialogMenu(food_items[item]);
                break;

            case 'Drinks':
                dialogMenu(drink_items[item]);
                break;
            
            case 'Sides':

                break;


        }
        
     }



}




