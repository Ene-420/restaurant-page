/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./functions/bodyContent.js":
/*!**********************************!*\
  !*** ./functions/bodyContent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearScreen: () => (/* binding */ clearScreen),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
 const bodyContent = () =>{
    const content = document.querySelector('#content');

    const contentBody = document.createElement('div');
    contentBody.classList.add('content-body');
    
    // const bodyText = document.createElement('p');
    // bodyText.textContent= 'Lorem ispus ';

    // contentBody.appendChild(bodyText);
    content.appendChild(contentBody)
}

const clearScreen =()=>{

    //const content = document.querySelector('#content');
    const bodyItems = document.querySelector('.content-body');
        if(bodyItems.children.length >0){
            Array.from(bodyItems.children).forEach(node =>{
                bodyItems.removeChild(node);
            })
        }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodyContent);

/***/ }),

/***/ "./functions/load.js":
/*!***************************!*\
  !*** ./functions/load.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const render = () =>{
    const array =['Home', 'Menu', 'Contact']
    const head = document.querySelector('#head');
    const navDiv = document.createElement('nav');
    const navList = document.createElement('ul');
   

    
    for(let i= 0; i< array.length; i++){
        let linkButton = document.createElement('button');
        linkButton.textContent = array[i];
        navDiv.appendChild(linkButton)

    }   
    
    head.appendChild(navDiv);

}

const clearScreen =(items)=>{

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./functions/tabContent.js":
/*!*********************************!*\
  !*** ./functions/tabContent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuTab: () => (/* binding */ menuTab),
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
const render = () =>{
    const array =['Home', 'Menu', 'Contact']
    const head = document.querySelector('#head');
    const navDiv = document.createElement('nav');
    const navList = document.createElement('ul');
    const div = document.createElement('div');
    const logoImg = document.createElement('img');
    const logoText = document.createElement('p');

    logoText.textContent = 'Belle Full';
    logoImg.setAttribute('src', '../media/logo.jpg');
    logoImg.classList.add('logo-img');

    div.classList.add('logo');
    div.appendChild(logoImg);
    div.appendChild(logoText);
    head.appendChild(div)
    
    for(let i= 0; i< array.length; i++){
        let linkButton = document.createElement('button');
        linkButton.textContent = array[i];
        linkButton.classList.add('nav-button')
        if(array[i].includes('Home')){
            linkButton.classList.add('active');
        }
        navDiv.appendChild(linkButton)

    }   
    
    head.appendChild(navDiv);

}

const menuTab=() =>{

    const array = ['Meals' , 'Sides', 'Drinks'];
    const content = document.querySelector('#content');
    const menuNav = document.createElement('nav');
    const body = document.querySelector('.content-body');
    menuNav.classList.add('menu-nav');

    array.forEach(item =>{
        let menuTabButton = document.createElement('button');
        menuTabButton.textContent = item;
        menuTabButton.classList.add('menu-nav-btn');
        if(item === 'Meals'){
            menuTabButton.classList.add('tab-active');
        }
        
       // menuTabButton.addEventListener('click', addCheck)
        menuNav.appendChild(menuTabButton);
    })

        if(!content.childNodes[0].classList.contains('menu-nav')){
            content.insertBefore(menuNav, body);
        }
    
}

/***/ }),

/***/ "./item/Drink.js":
/*!***********************!*\
  !*** ./item/Drink.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Drinks: () => (/* binding */ Drinks)
/* harmony export */ });
class Drinks{
    constructor(name, price, additionalServings, optionalServings){
        this.name = name;
        this.additionalServings = additionalServings;
        this.optionalServings = optionalServings;
        this.price = price;
    }


    getName(){
        return this.name;
    }

    getPrice(){
        return this.price;
    }

    getAdditionalServings(){
        return this.additionalServings;
    }

    getOptionalServings(){
        return this.optionalServings;
    }
}

/***/ }),

/***/ "./item/dialog.js":
/*!************************!*\
  !*** ./item/dialog.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dialogMenu: () => (/* binding */ dialogMenu)
/* harmony export */ });
const dialogMenu =(item)=>{


    const dialogArea = document.querySelector('.content-body');
    const dialog = document.querySelector('dialog');
    const form = document.querySelector('form');
    const formDiv  = document.querySelectorAll('form>div');
    const additionalDiv = document.querySelector('.additional');
    const optionalDiv = document.querySelector('.optional');
    //const closeBtn = document.querySelector('.close-button');
    
    if(dialog){
        updateDialog(item)

    }else{
        createDialog(item);
    }


    

    const closeDialogBtn = document.querySelector('.close-button');
    const radioButton = document.querySelectorAll("input[name = 'additional']");

    
    closeDialogBtn.addEventListener('click', closeDialog);

    radioButton.forEach((radio) =>{
        radio.addEventListener('click', checkSelected);

    });

    function updateDialog(item){

        if(additionalDiv.hasChildNodes()){
            additionalDiv.replaceChildren()
           
            if(optionalDiv.hasChildNodes()){
                optionalDiv.replaceChildren()
              
            }
        }
        
       
        if(item.getAdditionalServings() || item.getOptionalServings()){
            const formLabels =  document.querySelectorAll('form>label');
            item.getAdditionalServings().forEach(name =>{

                additionalDiv.appendChild(createLabels(name, item.constructor.name, 'additional'));
            })

            item.getOptionalServings().forEach(name =>{
                optionalDiv.appendChild(createLabels(name, item.constructor.name, 'optional'));
            })

            dialog.style.display = 'flex';
            dialog.showModal()
        }
    }
    function closeDialog(e){
        

        e.target.parentNode.parentNode.parentNode.close();
        e.target.parentNode.parentNode.parentNode.style.display ='none';

    }

    function createDialog(item){
        const dialog = document.createElement('dialog');
        const form = document.createElement('form');
        const div  = document.createElement('div');
        const closeBtn = document.createElement('button');
        const closeImg = document.createElement('img');
        
        closeImg.setAttribute('src', '../media/circle-xmark-regular.svg')
        closeImg.classList.add('close-img');
        closeBtn.classList.add('close-button')
        closeBtn.appendChild(closeImg);
       
        div.appendChild(closeBtn);

        dialog.appendChild(div);


    
        if(item.getAdditionalServings()){
            const label = document.createElement('label');
            label.textContent = 'Select Side';
            const additional = document.createElement('div');
            additional.classList.add('additional');
            form.appendChild(label);
            for(let i=0; i< item.getAdditionalServings().length; i++){
                additional.appendChild(createLabels(item.getAdditionalServings()[i], item.constructor.name, 'additional'))
            }
            form.appendChild(additional)
            if(item.getOptionalServings()){
                const label = document.createElement('label');
                label.textContent = 'Select Complementary Side';
                const optional = document.createElement('div');
                optional.classList.add('optional');
                form.appendChild(label);
                for(let i=0; i< item.getOptionalServings().length; i++){
                    optional.appendChild(createLabels(item.getOptionalServings()[i], item.constructor.name, 'optional'));
                } 
                form.appendChild(optional)               
            }            
        }
        const buttonDiv= document.createElement('div');
        const SubmitBtn  = document.createElement('button');
        SubmitBtn.classList.add('submit-order-btn');
        SubmitBtn.textContent = 'Submit Order'
        buttonDiv.appendChild(SubmitBtn)
        form.appendChild(buttonDiv);

        dialogArea.appendChild(dialog)
        dialog.appendChild(form);
        dialog.style.display = 'flex';
        dialog.showModal()
       

    }

    function createLabels(item, itemName, itemType){
        const div = document.createElement('div');
        const itemSelection = document.createElement('input');
        const itemQuantity = document.createElement('input');
        const itemLabel = document.createElement('label'); 

        itemQuantity.setAttribute('type', 'number');
        if(itemName === 'Drinks'){
            itemSelection.setAttribute('type', 'radio');
        }
        else{
            itemSelection.setAttribute('type', 'checkbox');
        }
        
        itemSelection.setAttribute('name', itemType)
        itemLabel.textContent = item

        itemLabel.addEventListener('click', ()=>{
            if(itemSelection.checked){
                itemSelection.checked = false;
                itemQuantity.style.display = 'none';
            }
            else{
                itemSelection.checked = true;
                itemQuantity.style.display = 'block';
            }
            
        });
        //itemSelection.textContent = ;
        itemSelection.addEventListener('change', ()=>{
        
            if(itemSelection.checked){
                itemQuantity.style.display = 'block';
                
            }
            else{
                itemQuantity.style.display = 'none';
            }
        });   
        
        itemSelection.addEventListener('click',()=>{
            if(itemSelection.checked){
                //itemSelection.checked = false;
                itemQuantity.style.display = 'block';
            }
            else{
                //itemSelection.checked = true;
                itemQuantity.style.display = 'none';
            }
        })
        itemQuantity.setAttribute('value', '1');
        div.appendChild(itemSelection);
        div.appendChild(itemLabel);
        div.appendChild(itemQuantity);

        return div;
    }

    function checkSelected(e){

        radioButton.forEach((btn) =>{
            if(btn != e.target){
                if(!btn.checked){
                    if(btn.nextSibling.nextSibling.style.display === 'block'){
                        btn.nextSibling.nextSibling.style.display ='none'
                    }
          
                }
                
            }
        });
    }


}




/***/ }),

/***/ "./item/food-items.js":
/*!****************************!*\
  !*** ./item/food-items.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drink_items: () => (/* binding */ drink_items),
/* harmony export */   food_items: () => (/* binding */ food_items)
/* harmony export */ });
/* harmony import */ var _Drink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drink */ "./item/Drink.js");
/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food */ "./item/food.js");




 const food_items = [];
 const drink_items =[]
//const protein = ['Fish', 'Beef', 'Turkey', 'Chicken']
const swallow = ['Eba', 'Fufu', 'Semo', 'Poundo']

const beans = new _food__WEBPACK_IMPORTED_MODULE_1__.Meal('Ewa Agoyin', ['Red Palm Oil', 'pepper', 'beans'], 10, ['Bread', 'Garri']);
const jollof = new _food__WEBPACK_IMPORTED_MODULE_1__.Meal('Jollof Rice', ['rice', 'tomato', 'pepper'], 10, ['plantain', 'salad']);
const efo = new _food__WEBPACK_IMPORTED_MODULE_1__.Meal('Efo Riro', ['stock fish', 'Ugu leaves', 'Red Palm Oil'], 10, swallow);
const egusi = new _food__WEBPACK_IMPORTED_MODULE_1__.Meal('Egusi', ['Egusi', 'stock fish', 'pepper', 'Vegetable Leaves'], 10, swallow);

const coke = new _Drink__WEBPACK_IMPORTED_MODULE_0__.Drinks('Cola', 2.50, ['Basic Cola', 'Cherry Cola', 'Grape Cola', 'Diet Cola'], ['Ice', 'Lime'])
const fanta = new _Drink__WEBPACK_IMPORTED_MODULE_0__.Drinks('Fanta', 2.50, ['Basic Fanta', 'Cherry Fanta', 'Grape Fanta', 'Diet Fanta'], ['Ice', 'Lime']);
const beer = new _Drink__WEBPACK_IMPORTED_MODULE_0__.Drinks('Beer', 3.50, ['Heinikein', 'Guiness ', ' Budweiser', 'Starling', 'Corona'], ['Canned', 'Bottle'])


food_items.push(beans);
food_items.push(jollof);
food_items.push(efo);
food_items.push(egusi);

drink_items.push(coke, fanta, beer);




/***/ }),

/***/ "./item/food.js":
/*!**********************!*\
  !*** ./item/food.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Food: () => (/* binding */ Food),
/* harmony export */   Meal: () => (/* binding */ Meal)
/* harmony export */ });
class Food{
    constructor(name, ingredients, price){
        this.name = name;
        this.ingredients = ingredients;
        this.price = price;
        this.additionalServings = ['Fish', 'Beef', 'Turkey', 'Chicken']
    }

    getClassName(){
        return this.constructor.name;
    }
    getName(){
        return this.name;
    }

    getPrice(){
        return this.price;
    }

    getIngredients(){
        return this.ingredients.toString().replace(/,/g, ", ") ;
    }

    getAdditionalServings(){
        return this.additionalServings;
    }
}

class Meal extends Food{
    constructor(name, ingredients, price, optionalServings){
        super(name, ingredients, price);
        this.optionalServings = optionalServings;
    }

    getOptionalServings(){
        return this.optionalServings;
    }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/obised/Obised.ttf */ "./font/obised/Obised.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    padding: 0;
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; */
    list-style: none;
    text-decoration: none;
}

@font-face{
    font-family: my-cool-font;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body{
    display: flex;
    flex-direction: column;
    height:100vh;
}

#head{
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.home{
    font-family: my-cool-font;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.home h1{
    font-size: 5vw;
}
.home *{
    font-family: my-cool-font;
    padding: 8px;
    font-size: 3vw;
}
.home-logo{
    width: 80%;
    height: 50%;
}

.logo{
    display: flex;
    align-items: center;
    margin-right: auto;
}

.logo p{
    font-size: 2.5vw;
    font-family: my-cool-font;
}
.logo-img{
    width: 7vw;
    height: 6vw;
}



nav, .menu-nav{
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content:space-between ;
    gap: 5px;
}


.menu-nav{
    width: 80%;
    align-items: center;
    display: none;
   

}

nav button, .menu-nav-btn{
    width: 50%;
    margin: 10px 0;
    padding:8px 10px ;
    
    font-size: 2vw;
    border-radius: 20px;
    border: 5px solid green;
}

.menu-nav-btn{
    color: white;
    border: 0;
    font-size: 3vw;
    border-radius: 0;
    background: none;
}

.menu-nav-btn:hover, .tab-active{
    border-bottom: 5px solid white;
}


nav button:hover, .active{
    background-color: green;
    color: white;
}


#content{
    background-color: green;
    flex: 1;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    
}

.content-body{
    margin: 20px auto;
    padding: 10px;
    width: 90%;
    height: 90%;
    background-color: white;
    display: grid;
    grid-template-rows: repeat(auto-fit,1fr);
    grid-template-columns: repeat(auto-fit,450px);
    gap: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    position: relative;
}

.card{
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 70%;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 8px;
    font-size: 1.5vw;
    border: 5px solid green;
    border-radius: 15px;

}

.card button, .submit-order-btn{
    padding: 10px 12px;
    border-radius: 25px;
    background-color: green;
    color: white;
    border: 0;
    font-size: 2vw;
    font-weight: 900;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card p{
    text-align: center;
}

.food-menu-img{
    width: 80%;
    height: 50%;
    border-radius: 15px 0;
}

dialog{
    width: fit-content;
    height: fit-content;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    display: none;
    position: absolute;
    top: 40%;
    left: 40%;
}


form{
    margin: 10px auto;
    display: flex;
    padding: 10px;
    justify-content: space-evenly;
    flex-direction: column;
    width: fit-content;
    height: 90%;
    gap: 5px;
}


.optional, .additional{
    display: flex;
    flex-direction: column;
    gap: 8px;
    
}

.optional div, .additional div{
    display: flex;
    align-items: center;
}

form input[type= 'number']{
    display: none;
    width: 65px;
    height: 15px;
    padding: 5px;
    text-align: center;
    margin-left: auto;
}
form > label{
    font-size: 2vw;
    font-weight: 800;
}

form> div>label{
    font-size: 1.75vw;
}
.submit-order-btn{
    margin: 10px 0;
    font-size: 2vw;
}

dialog > div{
    margin-left: auto;
}

.close-img{
    width: 20px;
    height: 20px;
    padding: 5px;
}

.close-button{
    background: none;
    border: none;
    margin-left:auto;
}

.contact{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contact-socials{
    display: flex;
}
/* .body{
    background-color: green;
    flex: 1;
} */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    padding: 0;\n    margin: 0;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    /* font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; */\n    list-style: none;\n    text-decoration: none;\n}\n\n@font-face{\n    font-family: my-cool-font;\n    src: url(../font/obised/Obised.ttf);\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    height:100vh;\n}\n\n#head{\n    background-color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.home{\n    font-family: my-cool-font;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n}\n.home h1{\n    font-size: 5vw;\n}\n.home *{\n    font-family: my-cool-font;\n    padding: 8px;\n    font-size: 3vw;\n}\n.home-logo{\n    width: 80%;\n    height: 50%;\n}\n\n.logo{\n    display: flex;\n    align-items: center;\n    margin-right: auto;\n}\n\n.logo p{\n    font-size: 2.5vw;\n    font-family: my-cool-font;\n}\n.logo-img{\n    width: 7vw;\n    height: 6vw;\n}\n\n\n\nnav, .menu-nav{\n    width: 50%;\n    margin: 0 auto;\n    display: flex;\n    justify-content:space-between ;\n    gap: 5px;\n}\n\n\n.menu-nav{\n    width: 80%;\n    align-items: center;\n    display: none;\n   \n\n}\n\nnav button, .menu-nav-btn{\n    width: 50%;\n    margin: 10px 0;\n    padding:8px 10px ;\n    \n    font-size: 2vw;\n    border-radius: 20px;\n    border: 5px solid green;\n}\n\n.menu-nav-btn{\n    color: white;\n    border: 0;\n    font-size: 3vw;\n    border-radius: 0;\n    background: none;\n}\n\n.menu-nav-btn:hover, .tab-active{\n    border-bottom: 5px solid white;\n}\n\n\nnav button:hover, .active{\n    background-color: green;\n    color: white;\n}\n\n\n#content{\n    background-color: green;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    \n    align-items: center;\n    \n}\n\n.content-body{\n    margin: 20px auto;\n    padding: 10px;\n    width: 90%;\n    height: 90%;\n    background-color: white;\n    display: grid;\n    grid-template-rows: repeat(auto-fit,1fr);\n    grid-template-columns: repeat(auto-fit,450px);\n    gap: 8px;\n    justify-content: center;\n    align-items: center;\n    border-radius: 15px;\n    position: relative;\n}\n\n.card{\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    height: 70%;\n    align-items: center;\n    align-content: center;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    padding: 8px;\n    font-size: 1.5vw;\n    border: 5px solid green;\n    border-radius: 15px;\n\n}\n\n.card button, .submit-order-btn{\n    padding: 10px 12px;\n    border-radius: 25px;\n    background-color: green;\n    color: white;\n    border: 0;\n    font-size: 2vw;\n    font-weight: 900;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.card p{\n    text-align: center;\n}\n\n.food-menu-img{\n    width: 80%;\n    height: 50%;\n    border-radius: 15px 0;\n}\n\ndialog{\n    width: fit-content;\n    height: fit-content;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; \n    display: none;\n    position: absolute;\n    top: 40%;\n    left: 40%;\n}\n\n\nform{\n    margin: 10px auto;\n    display: flex;\n    padding: 10px;\n    justify-content: space-evenly;\n    flex-direction: column;\n    width: fit-content;\n    height: 90%;\n    gap: 5px;\n}\n\n\n.optional, .additional{\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    \n}\n\n.optional div, .additional div{\n    display: flex;\n    align-items: center;\n}\n\nform input[type= 'number']{\n    display: none;\n    width: 65px;\n    height: 15px;\n    padding: 5px;\n    text-align: center;\n    margin-left: auto;\n}\nform > label{\n    font-size: 2vw;\n    font-weight: 800;\n}\n\nform> div>label{\n    font-size: 1.75vw;\n}\n.submit-order-btn{\n    margin: 10px 0;\n    font-size: 2vw;\n}\n\ndialog > div{\n    margin-left: auto;\n}\n\n.close-img{\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n}\n\n.close-button{\n    background: none;\n    border: none;\n    margin-left:auto;\n}\n\n.contact{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.contact-socials{\n    display: flex;\n}\n/* .body{\n    background-color: green;\n    flex: 1;\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactMenu: () => (/* binding */ contactMenu)
/* harmony export */ });
/* harmony import */ var _functions_bodyContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/bodyContent */ "./functions/bodyContent.js");


const contactMenu = ()=>{
    
    const contentBody = document.querySelector('.content-body');

    render();
    createSocialMedia();

    function render(){
        (0,_functions_bodyContent__WEBPACK_IMPORTED_MODULE_0__.clearScreen)();

        const div = document.createElement('div')

        const header = document.createElement('h1');
        header.textContent= 'Contact Us';

        const body = document.createElement('p');
        body.textContent = 'Phone No: 07057570952';

        const est = document.createElement('span');
        est.textContent = 'Address: 11 Waverly Place, Barclays Rd';


        div.appendChild(header);
        div.appendChild(body);
        div.appendChild(est);

        contentBody.appendChild(div)
    }


    function  createSocialMedia(){
        const array = ['twitter', 'facebook', 'instagram']
        const div = document.createElement('div');

        for(let x=0; x< array.length; x++){
            const link = document.createElement('a');
            const i = document.createElement('i');

            i.classList.add('fa-brands');
            i.classList.add(`fa-${array[x]}`);
            link.appendChild(i);

            div.appendChild(link);

        }

        contentBody.appendChild(div)


    }
}

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   home: () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _functions_bodyContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/bodyContent */ "./functions/bodyContent.js");


const home =()=>{
    const contentBody = document.querySelector('.content-body');
    render();

    function render(){
        (0,_functions_bodyContent__WEBPACK_IMPORTED_MODULE_0__.clearScreen)();

        const div = document.createElement('div')

        const headerImg = document.createElement('img');

        headerImg.setAttribute('src', '../media/logo.jpg')

        headerImg.classList.add('home-logo')
        const header = document.createElement('h1');
        header.textContent= 'Belle Full';

        const body = document.createElement('p');
        body.textContent = 'Chop Till You Belle Full';

        const est = document.createElement('span');
        est.textContent = 'Est 2023';

        div.appendChild(headerImg);
        div.appendChild(header);
        div.appendChild(body);
        div.appendChild(est);

        div.classList.add('home');
        contentBody.appendChild(div)
    }

}

/***/ }),

/***/ "./pages/menu.js":
/*!***********************!*\
  !*** ./pages/menu.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuItems: () => (/* binding */ menuItems)
/* harmony export */ });
/* harmony import */ var _item_food_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item/food-items */ "./item/food-items.js");
/* harmony import */ var _item_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item/dialog */ "./item/dialog.js");
/* harmony import */ var _functions_bodyContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/bodyContent */ "./functions/bodyContent.js");



const menuItems =(item)=>{

    //DOM Elements
    const contentSpace = document.querySelector('.content-body');
    const body = document.querySelector('#content');

    switch(item){
        case 'Meals':
            render(_item_food_items__WEBPACK_IMPORTED_MODULE_0__.food_items);
            break;

        case 'Sides':
            break;
        
        case 'Drinks':
            render(_item_food_items__WEBPACK_IMPORTED_MODULE_0__.drink_items);
            break;
    }
    
    
    const closeButton = document.querySelector('.close-button');
    const selectMealBtn = document.querySelectorAll('.card>button');

    selectMealBtn.forEach(button =>{
        button.addEventListener('click',handleSelectBtnEvents);
    })

    //render food items on screen 
    function render(item){

        ;(0,_functions_bodyContent__WEBPACK_IMPORTED_MODULE_2__.clearScreen)();
        
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
                (0,_item_dialog__WEBPACK_IMPORTED_MODULE_1__.dialogMenu)(_item_food_items__WEBPACK_IMPORTED_MODULE_0__.food_items[item]);
                break;

            case 'Drinks':
                (0,_item_dialog__WEBPACK_IMPORTED_MODULE_1__.dialogMenu)(_item_food_items__WEBPACK_IMPORTED_MODULE_0__.drink_items[item]);
                break;
            
            case 'Sides':

                break;


        }
        
     }



}






/***/ }),

/***/ "./pages/menuTab.js":
/*!**************************!*\
  !*** ./pages/menuTab.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tab: () => (/* binding */ tab)
/* harmony export */ });
/* harmony import */ var _functions_tabContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/tabContent */ "./functions/tabContent.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/menu */ "./pages/menu.js");




const tab =()=>{

    (0,_functions_tabContent__WEBPACK_IMPORTED_MODULE_0__.menuTab)();

    const  tabNav = document.querySelector('.menu-nav');
    const tabMenu = document.querySelectorAll('.menu-nav-btn');
  


    function select(button){
        if(button === 'Menu'){
            tabNav.style.display = 'flex';
            
    
            tabMenu.forEach(tab =>{
                tab.addEventListener('click', addCheck)
            })
        }
    }
    


    function addCheck(e){
        removeTabCheck();

        e.target.classList.add('tab-active');
        checkChange()
    }

    function checkChange(){
        const activeTab = getActiveMenuTab();

        switch(activeTab){
            case 'Meals':
                console.log(activeTab)
                ;(0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__.menuItems)(activeTab);
                break;

            case 'Sides':
                console.log(activeTab)
                ;(0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__.menuItems)(activeTab);
                break;
                
            case 'Drinks':
                console.log(activeTab)
                ;(0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__.menuItems)(activeTab);
                break;

            default:
                break;
        }
    }

    function removeTabCheck(){
        

        tabMenu.forEach(btn =>{
            if(btn.classList.contains('tab-active')){
                btn.classList.remove('tab-active');
            }
        })
    }

    function removeNav(){
        
        tabNav.style.display = 'none';
        
        
    }

    function getActiveMenuTab(){
        let selectedTab = document.querySelector('.tab-active');

        //console.log(selectedTab.textContent)
        return selectedTab.textContent;
    }
    
    return{ removeNav, select, getActiveMenuTab}
}

/***/ }),

/***/ "./font/obised/Obised.ttf":
/*!********************************!*\
  !*** ./font/obised/Obised.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5dc21f517df0e1e1857.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/load */ "./functions/load.js");
/* harmony import */ var _functions_bodyContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/bodyContent */ "./functions/bodyContent.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/menu */ "./pages/menu.js");
/* harmony import */ var _functions_tabContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/tabContent */ "./functions/tabContent.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/home */ "./pages/home.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/contact */ "./pages/contact.js");
/* harmony import */ var _pages_menuTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/menuTab */ "./pages/menuTab.js");
//alert('hello');










(0,_functions_tabContent__WEBPACK_IMPORTED_MODULE_4__.render)();
(0,_functions_bodyContent__WEBPACK_IMPORTED_MODULE_1__["default"])()

const tabMenu = (0,_pages_menuTab__WEBPACK_IMPORTED_MODULE_7__.tab)();

const navButton = document.querySelectorAll('.nav-button');


    const activeButton = getActiveMenuBtn();
    activeButton=== 'Home' ? (0,_pages_home__WEBPACK_IMPORTED_MODULE_5__.home)() : 0;

    navButton.forEach((button) => {
        button.addEventListener('click', addActive)
    })


function addActive(e){
    removeCheck();

    e.target.classList.add('active');

    changePage();

}


function changePage(){
    const activeBtn = getActiveMenuBtn();

    switch(activeBtn){
        case 'Home':
            tabMenu.removeNav();
            (0,_pages_home__WEBPACK_IMPORTED_MODULE_5__.home)();
            break;
        
        case 'Menu':
            (0,_pages_menu__WEBPACK_IMPORTED_MODULE_3__.menuItems)(tabMenu.getActiveMenuTab());
            tabMenu.select(activeBtn);
            break;
        
        case 'Contact':
            tabMenu.removeNav()
            ;(0,_pages_contact__WEBPACK_IMPORTED_MODULE_6__.contactMenu)()
            break;
    }
}


function getActiveMenuBtn(){
    const activeBtn = document.querySelector('.active');
    return activeBtn.textContent;
}

function removeCheck(){
    const button = document.querySelector('.active');

    if(button){
        button.classList.remove('active');
    }
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsU0FBUyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVB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QSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRXFDO0FBQ2M7QUFDOUI7QUFDcUI7QUFDZ0I7QUFDckI7QUFDVTtBQUNSOztBQUV2Qyw2REFBTTtBQUNOLGtFQUFXOztBQUVYLGdCQUFnQixtREFBRzs7QUFFbkI7OztBQUdBO0FBQ0EsNkJBQTZCLGlEQUFJOztBQUVqQztBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNERBQVc7QUFDdkI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vZnVuY3Rpb25zL2JvZHlDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL2Z1bmN0aW9ucy9sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL2Z1bmN0aW9ucy90YWJDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL2l0ZW0vRHJpbmsuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vaXRlbS9kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vaXRlbS9mb29kLWl0ZW1zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL2l0ZW0vZm9vZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9wYWdlcy9tZW51VGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBjb25zdCBib2R5Q29udGVudCA9ICgpID0+e1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29uc3QgY29udGVudEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50Qm9keS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWJvZHknKTtcbiAgICBcbiAgICAvLyBjb25zdCBib2R5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAvLyBib2R5VGV4dC50ZXh0Q29udGVudD0gJ0xvcmVtIGlzcHVzICc7XG5cbiAgICAvLyBjb250ZW50Qm9keS5hcHBlbmRDaGlsZChib2R5VGV4dCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50Qm9keSlcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFyU2NyZWVuID0oKT0+e1xuXG4gICAgLy9jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBib2R5SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib2R5Jyk7XG4gICAgICAgIGlmKGJvZHlJdGVtcy5jaGlsZHJlbi5sZW5ndGggPjApe1xuICAgICAgICAgICAgQXJyYXkuZnJvbShib2R5SXRlbXMuY2hpbGRyZW4pLmZvckVhY2gobm9kZSA9PntcbiAgICAgICAgICAgICAgICBib2R5SXRlbXMucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJvZHlDb250ZW50OyIsImNvbnN0IHJlbmRlciA9ICgpID0+e1xuICAgIGNvbnN0IGFycmF5ID1bJ0hvbWUnLCAnTWVudScsICdDb250YWN0J11cbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWQnKTtcbiAgICBjb25zdCBuYXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgIFxuXG4gICAgXG4gICAgZm9yKGxldCBpPSAwOyBpPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBsaW5rQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGxpbmtCdXR0b24udGV4dENvbnRlbnQgPSBhcnJheVtpXTtcbiAgICAgICAgbmF2RGl2LmFwcGVuZENoaWxkKGxpbmtCdXR0b24pXG5cbiAgICB9ICAgXG4gICAgXG4gICAgaGVhZC5hcHBlbmRDaGlsZChuYXZEaXYpO1xuXG59XG5cbmNvbnN0IGNsZWFyU2NyZWVuID0oaXRlbXMpPT57XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyOyIsImV4cG9ydCBjb25zdCByZW5kZXIgPSAoKSA9PntcbiAgICBjb25zdCBhcnJheSA9WydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkJyk7XG4gICAgY29uc3QgbmF2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGxvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgbG9nb1RleHQudGV4dENvbnRlbnQgPSAnQmVsbGUgRnVsbCc7XG4gICAgbG9nb0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9tZWRpYS9sb2dvLmpwZycpO1xuICAgIGxvZ29JbWcuY2xhc3NMaXN0LmFkZCgnbG9nby1pbWcnKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsb2dvVGV4dCk7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChkaXYpXG4gICAgXG4gICAgZm9yKGxldCBpPSAwOyBpPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBsaW5rQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGxpbmtCdXR0b24udGV4dENvbnRlbnQgPSBhcnJheVtpXTtcbiAgICAgICAgbGlua0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJylcbiAgICAgICAgaWYoYXJyYXlbaV0uaW5jbHVkZXMoJ0hvbWUnKSl7XG4gICAgICAgICAgICBsaW5rQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIG5hdkRpdi5hcHBlbmRDaGlsZChsaW5rQnV0dG9uKVxuXG4gICAgfSAgIFxuICAgIFxuICAgIGhlYWQuYXBwZW5kQ2hpbGQobmF2RGl2KTtcblxufVxuXG5leHBvcnQgY29uc3QgbWVudVRhYj0oKSA9PntcblxuICAgIGNvbnN0IGFycmF5ID0gWydNZWFscycgLCAnU2lkZXMnLCAnRHJpbmtzJ107XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib2R5Jyk7XG4gICAgbWVudU5hdi5jbGFzc0xpc3QuYWRkKCdtZW51LW5hdicpO1xuXG4gICAgYXJyYXkuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICBsZXQgbWVudVRhYkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBtZW51VGFiQnV0dG9uLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgbWVudVRhYkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LW5hdi1idG4nKTtcbiAgICAgICAgaWYoaXRlbSA9PT0gJ01lYWxzJyl7XG4gICAgICAgICAgICBtZW51VGFiQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RhYi1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAvLyBtZW51VGFiQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkQ2hlY2spXG4gICAgICAgIG1lbnVOYXYuYXBwZW5kQ2hpbGQobWVudVRhYkJ1dHRvbik7XG4gICAgfSlcblxuICAgICAgICBpZighY29udGVudC5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1uYXYnKSl7XG4gICAgICAgICAgICBjb250ZW50Lmluc2VydEJlZm9yZShtZW51TmF2LCBib2R5KTtcbiAgICAgICAgfVxuICAgIFxufSIsImV4cG9ydCBjbGFzcyBEcmlua3N7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UsIGFkZGl0aW9uYWxTZXJ2aW5ncywgb3B0aW9uYWxTZXJ2aW5ncyl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWRkaXRpb25hbFNlcnZpbmdzID0gYWRkaXRpb25hbFNlcnZpbmdzO1xuICAgICAgICB0aGlzLm9wdGlvbmFsU2VydmluZ3MgPSBvcHRpb25hbFNlcnZpbmdzO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgfVxuXG5cbiAgICBnZXROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0UHJpY2UoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpY2U7XG4gICAgfVxuXG4gICAgZ2V0QWRkaXRpb25hbFNlcnZpbmdzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZGl0aW9uYWxTZXJ2aW5ncztcbiAgICB9XG5cbiAgICBnZXRPcHRpb25hbFNlcnZpbmdzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsU2VydmluZ3M7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBkaWFsb2dNZW51ID0oaXRlbSk9PntcblxuXG4gICAgY29uc3QgZGlhbG9nQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvZHknKTtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIGNvbnN0IGZvcm1EaXYgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybT5kaXYnKTtcbiAgICBjb25zdCBhZGRpdGlvbmFsRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZGl0aW9uYWwnKTtcbiAgICBjb25zdCBvcHRpb25hbERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25hbCcpO1xuICAgIC8vY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJyk7XG4gICAgXG4gICAgaWYoZGlhbG9nKXtcbiAgICAgICAgdXBkYXRlRGlhbG9nKGl0ZW0pXG5cbiAgICB9ZWxzZXtcbiAgICAgICAgY3JlYXRlRGlhbG9nKGl0ZW0pO1xuICAgIH1cblxuXG4gICAgXG5cbiAgICBjb25zdCBjbG9zZURpYWxvZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKTtcbiAgICBjb25zdCByYWRpb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lID0gJ2FkZGl0aW9uYWwnXVwiKTtcblxuICAgIFxuICAgIGNsb3NlRGlhbG9nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VEaWFsb2cpO1xuXG4gICAgcmFkaW9CdXR0b24uZm9yRWFjaCgocmFkaW8pID0+e1xuICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrU2VsZWN0ZWQpO1xuXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEaWFsb2coaXRlbSl7XG5cbiAgICAgICAgaWYoYWRkaXRpb25hbERpdi5oYXNDaGlsZE5vZGVzKCkpe1xuICAgICAgICAgICAgYWRkaXRpb25hbERpdi5yZXBsYWNlQ2hpbGRyZW4oKVxuICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKG9wdGlvbmFsRGl2Lmhhc0NoaWxkTm9kZXMoKSl7XG4gICAgICAgICAgICAgICAgb3B0aW9uYWxEaXYucmVwbGFjZUNoaWxkcmVuKClcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIGlmKGl0ZW0uZ2V0QWRkaXRpb25hbFNlcnZpbmdzKCkgfHwgaXRlbS5nZXRPcHRpb25hbFNlcnZpbmdzKCkpe1xuICAgICAgICAgICAgY29uc3QgZm9ybUxhYmVscyA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtPmxhYmVsJyk7XG4gICAgICAgICAgICBpdGVtLmdldEFkZGl0aW9uYWxTZXJ2aW5ncygpLmZvckVhY2gobmFtZSA9PntcblxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWxzKG5hbWUsIGl0ZW0uY29uc3RydWN0b3IubmFtZSwgJ2FkZGl0aW9uYWwnKSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpdGVtLmdldE9wdGlvbmFsU2VydmluZ3MoKS5mb3JFYWNoKG5hbWUgPT57XG4gICAgICAgICAgICAgICAgb3B0aW9uYWxEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWxzKG5hbWUsIGl0ZW0uY29uc3RydWN0b3IubmFtZSwgJ29wdGlvbmFsJykpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZGlhbG9nLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBkaWFsb2cuc2hvd01vZGFsKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZURpYWxvZyhlKXtcbiAgICAgICAgXG5cbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xvc2UoKTtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9J25vbmUnO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGlhbG9nKGl0ZW0pe1xuICAgICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgZGl2ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjbG9zZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBcbiAgICAgICAgY2xvc2VJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vbWVkaWEvY2lyY2xlLXhtYXJrLXJlZ3VsYXIuc3ZnJylcbiAgICAgICAgY2xvc2VJbWcuY2xhc3NMaXN0LmFkZCgnY2xvc2UtaW1nJyk7XG4gICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ1dHRvbicpXG4gICAgICAgIGNsb3NlQnRuLmFwcGVuZENoaWxkKGNsb3NlSW1nKTtcbiAgICAgICBcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuICAgICAgICBkaWFsb2cuYXBwZW5kQ2hpbGQoZGl2KTtcblxuXG4gICAgXG4gICAgICAgIGlmKGl0ZW0uZ2V0QWRkaXRpb25hbFNlcnZpbmdzKCkpe1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnU2VsZWN0IFNpZGUnO1xuICAgICAgICAgICAgY29uc3QgYWRkaXRpb25hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYWRkaXRpb25hbC5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsJyk7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPCBpdGVtLmdldEFkZGl0aW9uYWxTZXJ2aW5ncygpLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBhZGRpdGlvbmFsLmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVscyhpdGVtLmdldEFkZGl0aW9uYWxTZXJ2aW5ncygpW2ldLCBpdGVtLmNvbnN0cnVjdG9yLm5hbWUsICdhZGRpdGlvbmFsJykpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGFkZGl0aW9uYWwpXG4gICAgICAgICAgICBpZihpdGVtLmdldE9wdGlvbmFsU2VydmluZ3MoKSl7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1NlbGVjdCBDb21wbGVtZW50YXJ5IFNpZGUnO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgb3B0aW9uYWwuY2xhc3NMaXN0LmFkZCgnb3B0aW9uYWwnKTtcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTwgaXRlbS5nZXRPcHRpb25hbFNlcnZpbmdzKCkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbC5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbHMoaXRlbS5nZXRPcHRpb25hbFNlcnZpbmdzKClbaV0sIGl0ZW0uY29uc3RydWN0b3IubmFtZSwgJ29wdGlvbmFsJykpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChvcHRpb25hbCkgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidXR0b25EaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBTdWJtaXRCdG4gID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIFN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtb3JkZXItYnRuJyk7XG4gICAgICAgIFN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQgT3JkZXInXG4gICAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChTdWJtaXRCdG4pXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcblxuICAgICAgICBkaWFsb2dBcmVhLmFwcGVuZENoaWxkKGRpYWxvZylcbiAgICAgICAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBkaWFsb2cuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpXG4gICAgICAgXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMYWJlbHMoaXRlbSwgaXRlbU5hbWUsIGl0ZW1UeXBlKXtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGl0ZW1TZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBpdGVtUXVhbnRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBpdGVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyBcblxuICAgICAgICBpdGVtUXVhbnRpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuICAgICAgICBpZihpdGVtTmFtZSA9PT0gJ0RyaW5rcycpe1xuICAgICAgICAgICAgaXRlbVNlbGVjdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgaXRlbVNlbGVjdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaXRlbVNlbGVjdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBpdGVtVHlwZSlcbiAgICAgICAgaXRlbUxhYmVsLnRleHRDb250ZW50ID0gaXRlbVxuXG4gICAgICAgIGl0ZW1MYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICBpZihpdGVtU2VsZWN0aW9uLmNoZWNrZWQpe1xuICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3Rpb24uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGl0ZW1RdWFudGl0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBpdGVtU2VsZWN0aW9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGl0ZW1RdWFudGl0eS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgLy9pdGVtU2VsZWN0aW9uLnRleHRDb250ZW50ID0gO1xuICAgICAgICBpdGVtU2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpPT57XG4gICAgICAgIFxuICAgICAgICAgICAgaWYoaXRlbVNlbGVjdGlvbi5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICBpdGVtUXVhbnRpdHkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGl0ZW1RdWFudGl0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgICBcbiAgICAgICAgXG4gICAgICAgIGl0ZW1TZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBpZihpdGVtU2VsZWN0aW9uLmNoZWNrZWQpe1xuICAgICAgICAgICAgICAgIC8vaXRlbVNlbGVjdGlvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaXRlbVF1YW50aXR5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAvL2l0ZW1TZWxlY3Rpb24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaXRlbVF1YW50aXR5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGl0ZW1RdWFudGl0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzEnKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGl0ZW1TZWxlY3Rpb24pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbUxhYmVsKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGl0ZW1RdWFudGl0eSk7XG5cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1NlbGVjdGVkKGUpe1xuXG4gICAgICAgIHJhZGlvQnV0dG9uLmZvckVhY2goKGJ0bikgPT57XG4gICAgICAgICAgICBpZihidG4gIT0gZS50YXJnZXQpe1xuICAgICAgICAgICAgICAgIGlmKCFidG4uY2hlY2tlZCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGJ0bi5uZXh0U2libGluZy5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5uZXh0U2libGluZy5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID0nbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn1cblxuXG4iLCJpbXBvcnQgeyBEcmlua3MgfSBmcm9tIFwiLi9Ecmlua1wiO1xuaW1wb3J0IHsgRm9vZCwgTWVhbCB9IGZyb20gXCIuL2Zvb2RcIjtcblxuXG4gY29uc3QgZm9vZF9pdGVtcyA9IFtdO1xuIGNvbnN0IGRyaW5rX2l0ZW1zID1bXVxuLy9jb25zdCBwcm90ZWluID0gWydGaXNoJywgJ0JlZWYnLCAnVHVya2V5JywgJ0NoaWNrZW4nXVxuY29uc3Qgc3dhbGxvdyA9IFsnRWJhJywgJ0Z1ZnUnLCAnU2VtbycsICdQb3VuZG8nXVxuXG5jb25zdCBiZWFucyA9IG5ldyBNZWFsKCdFd2EgQWdveWluJywgWydSZWQgUGFsbSBPaWwnLCAncGVwcGVyJywgJ2JlYW5zJ10sIDEwLCBbJ0JyZWFkJywgJ0dhcnJpJ10pO1xuY29uc3Qgam9sbG9mID0gbmV3IE1lYWwoJ0pvbGxvZiBSaWNlJywgWydyaWNlJywgJ3RvbWF0bycsICdwZXBwZXInXSwgMTAsIFsncGxhbnRhaW4nLCAnc2FsYWQnXSk7XG5jb25zdCBlZm8gPSBuZXcgTWVhbCgnRWZvIFJpcm8nLCBbJ3N0b2NrIGZpc2gnLCAnVWd1IGxlYXZlcycsICdSZWQgUGFsbSBPaWwnXSwgMTAsIHN3YWxsb3cpO1xuY29uc3QgZWd1c2kgPSBuZXcgTWVhbCgnRWd1c2knLCBbJ0VndXNpJywgJ3N0b2NrIGZpc2gnLCAncGVwcGVyJywgJ1ZlZ2V0YWJsZSBMZWF2ZXMnXSwgMTAsIHN3YWxsb3cpO1xuXG5jb25zdCBjb2tlID0gbmV3IERyaW5rcygnQ29sYScsIDIuNTAsIFsnQmFzaWMgQ29sYScsICdDaGVycnkgQ29sYScsICdHcmFwZSBDb2xhJywgJ0RpZXQgQ29sYSddLCBbJ0ljZScsICdMaW1lJ10pXG5jb25zdCBmYW50YSA9IG5ldyBEcmlua3MoJ0ZhbnRhJywgMi41MCwgWydCYXNpYyBGYW50YScsICdDaGVycnkgRmFudGEnLCAnR3JhcGUgRmFudGEnLCAnRGlldCBGYW50YSddLCBbJ0ljZScsICdMaW1lJ10pO1xuY29uc3QgYmVlciA9IG5ldyBEcmlua3MoJ0JlZXInLCAzLjUwLCBbJ0hlaW5pa2VpbicsICdHdWluZXNzICcsICcgQnVkd2Vpc2VyJywgJ1N0YXJsaW5nJywgJ0Nvcm9uYSddLCBbJ0Nhbm5lZCcsICdCb3R0bGUnXSlcblxuXG5mb29kX2l0ZW1zLnB1c2goYmVhbnMpO1xuZm9vZF9pdGVtcy5wdXNoKGpvbGxvZik7XG5mb29kX2l0ZW1zLnB1c2goZWZvKTtcbmZvb2RfaXRlbXMucHVzaChlZ3VzaSk7XG5cbmRyaW5rX2l0ZW1zLnB1c2goY29rZSwgZmFudGEsIGJlZXIpO1xuXG5leHBvcnQgIHtkcmlua19pdGVtcywgZm9vZF9pdGVtc31cbiIsImV4cG9ydCBjbGFzcyBGb29ke1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGluZ3JlZGllbnRzLCBwcmljZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50cztcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxTZXJ2aW5ncyA9IFsnRmlzaCcsICdCZWVmJywgJ1R1cmtleScsICdDaGlja2VuJ11cbiAgICB9XG5cbiAgICBnZXRDbGFzc05hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG4gICAgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGdldFByaWNlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlO1xuICAgIH1cblxuICAgIGdldEluZ3JlZGllbnRzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmluZ3JlZGllbnRzLnRvU3RyaW5nKCkucmVwbGFjZSgvLC9nLCBcIiwgXCIpIDtcbiAgICB9XG5cbiAgICBnZXRBZGRpdGlvbmFsU2VydmluZ3MoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkaXRpb25hbFNlcnZpbmdzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1lYWwgZXh0ZW5kcyBGb29ke1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGluZ3JlZGllbnRzLCBwcmljZSwgb3B0aW9uYWxTZXJ2aW5ncyl7XG4gICAgICAgIHN1cGVyKG5hbWUsIGluZ3JlZGllbnRzLCBwcmljZSk7XG4gICAgICAgIHRoaXMub3B0aW9uYWxTZXJ2aW5ncyA9IG9wdGlvbmFsU2VydmluZ3M7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uYWxTZXJ2aW5ncygpe1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25hbFNlcnZpbmdzO1xuICAgIH1cbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9vYmlzZWQvT2Jpc2VkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgLyogZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7ICovXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6IG15LWNvb2wtZm9udDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuYm9keXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OjEwMHZoO1xufVxuXG4jaGVhZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ob21le1xuICAgIGZvbnQtZmFtaWx5OiBteS1jb29sLWZvbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG59XG4uaG9tZSBoMXtcbiAgICBmb250LXNpemU6IDV2dztcbn1cbi5ob21lICp7XG4gICAgZm9udC1mYW1pbHk6IG15LWNvb2wtZm9udDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1zaXplOiAzdnc7XG59XG4uaG9tZS1sb2dve1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG5cbi5sb2dve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5sb2dvIHB7XG4gICAgZm9udC1zaXplOiAyLjV2dztcbiAgICBmb250LWZhbWlseTogbXktY29vbC1mb250O1xufVxuLmxvZ28taW1ne1xuICAgIHdpZHRoOiA3dnc7XG4gICAgaGVpZ2h0OiA2dnc7XG59XG5cblxuXG5uYXYsIC5tZW51LW5hdntcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW4gO1xuICAgIGdhcDogNXB4O1xufVxuXG5cbi5tZW51LW5hdntcbiAgICB3aWR0aDogODAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgIFxuXG59XG5cbm5hdiBidXR0b24sIC5tZW51LW5hdi1idG57XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBwYWRkaW5nOjhweCAxMHB4IDtcbiAgICBcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGdyZWVuO1xufVxuXG4ubWVudS1uYXYtYnRue1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAzdnc7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4ubWVudS1uYXYtYnRuOmhvdmVyLCAudGFiLWFjdGl2ZXtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XG59XG5cblxubmF2IGJ1dHRvbjpob3ZlciwgLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuI2NvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbn1cblxuLmNvbnRlbnQtYm9keXtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LDQ1MHB4KTtcbiAgICBnYXA6IDhweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgYm9yZGVyOiA1cHggc29saWQgZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcblxufVxuXG4uY2FyZCBidXR0b24sIC5zdWJtaXQtb3JkZXItYnRue1xuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbi5jYXJkIHB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9vZC1tZW51LWltZ3tcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMDtcbn1cblxuZGlhbG9ne1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDAlO1xuICAgIGxlZnQ6IDQwJTtcbn1cblxuXG5mb3Jte1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBnYXA6IDVweDtcbn1cblxuXG4ub3B0aW9uYWwsIC5hZGRpdGlvbmFse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbiAgICBcbn1cblxuLm9wdGlvbmFsIGRpdiwgLmFkZGl0aW9uYWwgZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZm9ybSBpbnB1dFt0eXBlPSAnbnVtYmVyJ117XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbmZvcm0gPiBsYWJlbHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG5mb3JtPiBkaXY+bGFiZWx7XG4gICAgZm9udC1zaXplOiAxLjc1dnc7XG59XG4uc3VibWl0LW9yZGVyLWJ0bntcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBmb250LXNpemU6IDJ2dztcbn1cblxuZGlhbG9nID4gZGl2e1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uY2xvc2UtaW1ne1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jbG9zZS1idXR0b257XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcbn1cblxuLmNvbnRhY3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFjdC1zb2NpYWxze1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4vKiAuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBmbGV4OiAxO1xufSAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsbUpBQW1KO0lBQ25KLDJHQUEyRztJQUMzRyxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7OztBQUlBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFFBQVE7QUFDWjs7O0FBR0E7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGFBQWE7OztBQUdqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCOztJQUVqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7OztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLDZDQUE2QztJQUM3QyxRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFNBQVM7SUFDVCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztBQUNiOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0FBQ1o7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFROztBQUVaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTs7O0dBR0dcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmOyAqL1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiBteS1jb29sLWZvbnQ7XFxuICAgIHNyYzogdXJsKC4uL2ZvbnQvb2Jpc2VkL09iaXNlZC50dGYpO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxufVxcblxcbiNoZWFke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ob21le1xcbiAgICBmb250LWZhbWlseTogbXktY29vbC1mb250O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuLmhvbWUgaDF7XFxuICAgIGZvbnQtc2l6ZTogNXZ3O1xcbn1cXG4uaG9tZSAqe1xcbiAgICBmb250LWZhbWlseTogbXktY29vbC1mb250O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogM3Z3O1xcbn1cXG4uaG9tZS1sb2dve1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuLmxvZ297XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmxvZ28gcHtcXG4gICAgZm9udC1zaXplOiAyLjV2dztcXG4gICAgZm9udC1mYW1pbHk6IG15LWNvb2wtZm9udDtcXG59XFxuLmxvZ28taW1ne1xcbiAgICB3aWR0aDogN3Z3O1xcbiAgICBoZWlnaHQ6IDZ2dztcXG59XFxuXFxuXFxuXFxubmF2LCAubWVudS1uYXZ7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbiA7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5cXG4ubWVudS1uYXZ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgXFxuXFxufVxcblxcbm5hdiBidXR0b24sIC5tZW51LW5hdi1idG57XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBwYWRkaW5nOjhweCAxMHB4IDtcXG4gICAgXFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLm1lbnUtbmF2LWJ0bntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogM3Z3O1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4ubWVudS1uYXYtYnRuOmhvdmVyLCAudGFiLWFjdGl2ZXtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG5cXG5uYXYgYnV0dG9uOmhvdmVyLCAuYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG4jY29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLmNvbnRlbnQtYm9keXtcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsNDUwcHgpO1xcbiAgICBnYXA6IDhweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1zaXplOiAxLjV2dztcXG4gICAgYm9yZGVyOiA1cHggc29saWQgZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFxufVxcblxcbi5jYXJkIGJ1dHRvbiwgLnN1Ym1pdC1vcmRlci1idG57XFxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDJ2dztcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY2FyZCBwe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb29kLW1lbnUtaW1ne1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAwO1xcbn1cXG5cXG5kaWFsb2d7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0MCU7XFxuICAgIGxlZnQ6IDQwJTtcXG59XFxuXFxuXFxuZm9ybXtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuXFxuLm9wdGlvbmFsLCAuYWRkaXRpb25hbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIFxcbn1cXG5cXG4ub3B0aW9uYWwgZGl2LCAuYWRkaXRpb25hbCBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0gaW5wdXRbdHlwZT0gJ251bWJlcidde1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogNjVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbmZvcm0gPiBsYWJlbHtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbmZvcm0+IGRpdj5sYWJlbHtcXG4gICAgZm9udC1zaXplOiAxLjc1dnc7XFxufVxcbi5zdWJtaXQtb3JkZXItYnRue1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgZm9udC1zaXplOiAydnc7XFxufVxcblxcbmRpYWxvZyA+IGRpdntcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5jbG9zZS1pbWd7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xcbn1cXG5cXG4uY29udGFjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvbnRhY3Qtc29jaWFsc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLyogLmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBmbGV4OiAxO1xcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNsZWFyU2NyZWVuIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9ib2R5Q29udGVudFwiO1xuXG5leHBvcnQgY29uc3QgY29udGFjdE1lbnUgPSAoKT0+e1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnRCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm9keScpO1xuXG4gICAgcmVuZGVyKCk7XG4gICAgY3JlYXRlU29jaWFsTWVkaWEoKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpe1xuICAgICAgICBjbGVhclNjcmVlbigpO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50PSAnQ29udGFjdCBVcyc7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYm9keS50ZXh0Q29udGVudCA9ICdQaG9uZSBObzogMDcwNTc1NzA5NTInO1xuXG4gICAgICAgIGNvbnN0IGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZXN0LnRleHRDb250ZW50ID0gJ0FkZHJlc3M6IDExIFdhdmVybHkgUGxhY2UsIEJhcmNsYXlzIFJkJztcblxuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChlc3QpO1xuXG4gICAgICAgIGNvbnRlbnRCb2R5LmFwcGVuZENoaWxkKGRpdilcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uICBjcmVhdGVTb2NpYWxNZWRpYSgpe1xuICAgICAgICBjb25zdCBhcnJheSA9IFsndHdpdHRlcicsICdmYWNlYm9vaycsICdpbnN0YWdyYW0nXVxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBmb3IobGV0IHg9MDsgeDwgYXJyYXkubGVuZ3RoOyB4Kyspe1xuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbiAgICAgICAgICAgIGkuY2xhc3NMaXN0LmFkZCgnZmEtYnJhbmRzJyk7XG4gICAgICAgICAgICBpLmNsYXNzTGlzdC5hZGQoYGZhLSR7YXJyYXlbeF19YCk7XG4gICAgICAgICAgICBsaW5rLmFwcGVuZENoaWxkKGkpO1xuXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRlbnRCb2R5LmFwcGVuZENoaWxkKGRpdilcblxuXG4gICAgfVxufSIsImltcG9ydCB7IGNsZWFyU2NyZWVuIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9ib2R5Q29udGVudFwiO1xuXG5leHBvcnQgY29uc3QgaG9tZSA9KCk9PntcbiAgICBjb25zdCBjb250ZW50Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvZHknKTtcbiAgICByZW5kZXIoKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpe1xuICAgICAgICBjbGVhclNjcmVlbigpO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgICAgY29uc3QgaGVhZGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgaGVhZGVySW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL21lZGlhL2xvZ28uanBnJylcblxuICAgICAgICBoZWFkZXJJbWcuY2xhc3NMaXN0LmFkZCgnaG9tZS1sb2dvJylcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50PSAnQmVsbGUgRnVsbCc7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYm9keS50ZXh0Q29udGVudCA9ICdDaG9wIFRpbGwgWW91IEJlbGxlIEZ1bGwnO1xuXG4gICAgICAgIGNvbnN0IGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZXN0LnRleHRDb250ZW50ID0gJ0VzdCAyMDIzJztcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVySW1nKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChib2R5KTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGVzdCk7XG5cbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICAgICAgY29udGVudEJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIH1cblxufSIsImltcG9ydCAgeyBmb29kX2l0ZW1zLGRyaW5rX2l0ZW1zIH0gZnJvbSBcIi4uL2l0ZW0vZm9vZC1pdGVtc1wiO1xuaW1wb3J0IHsgZGlhbG9nTWVudSB9IGZyb20gXCIuLi9pdGVtL2RpYWxvZ1wiO1xuaW1wb3J0IHsgY2xlYXJTY3JlZW4gfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2JvZHlDb250ZW50XCI7XG5leHBvcnQgY29uc3QgbWVudUl0ZW1zID0oaXRlbSk9PntcblxuICAgIC8vRE9NIEVsZW1lbnRzXG4gICAgY29uc3QgY29udGVudFNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm9keScpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgc3dpdGNoKGl0ZW0pe1xuICAgICAgICBjYXNlICdNZWFscyc6XG4gICAgICAgICAgICByZW5kZXIoZm9vZF9pdGVtcyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdTaWRlcyc6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgIGNhc2UgJ0RyaW5rcyc6XG4gICAgICAgICAgICByZW5kZXIoZHJpbmtfaXRlbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ1dHRvbicpO1xuICAgIGNvbnN0IHNlbGVjdE1lYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZD5idXR0b24nKTtcblxuICAgIHNlbGVjdE1lYWxCdG4uZm9yRWFjaChidXR0b24gPT57XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsaGFuZGxlU2VsZWN0QnRuRXZlbnRzKTtcbiAgICB9KVxuXG4gICAgLy9yZW5kZXIgZm9vZCBpdGVtcyBvbiBzY3JlZW4gXG4gICAgZnVuY3Rpb24gcmVuZGVyKGl0ZW0pe1xuXG4gICAgICAgIGNsZWFyU2NyZWVuKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgZm9yKGxldCBpID0wOyBpIDwgaXRlbS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgY3JlYXRlRm9vZEl0ZW0oaSwgaXRlbVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRTcGFjZSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGb29kSXRlbSh2YWx1ZSwgaXRlbSl7XG4gICAgICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCBmb29kU2VsZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgXG4gICAgICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gICAgXG4gICAgICAgIGZvb2ROYW1lLnRleHRDb250ZW50ID0gaXRlbS5nZXROYW1lKCk7XG4gICAgICAgIHByaWNlLnRleHRDb250ZW50PSBgJCR7aXRlbS5nZXRQcmljZSgpfWA7XG4gICAgICAgXG4gICAgICAgIGZvb2RJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuLi9tZWRpYS8ke3ZhbHVlfS5wbmdgKTtcbiAgICAgICAgZm9vZEltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgYCR7aXRlbS5nZXROYW1lKCl9YCk7XG5cbiAgICAgICAgZm9vZFNlbGVjdEJ0bi50ZXh0Q29udGVudD0nU2VsZWN0IEl0ZW0nXG4gICAgICAgIC8vZm9vZFNlbGVjdEJ0bi5vbmNsaWNrID0gY3JlYXRlRGlhbG9nKGl0ZW0pO1xuICAgICAgICAvL2Zvb2RTZWxlY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVEaWFsb2coaXRlbSkpO1xuICAgIFxuICAgICAgICBpdGVtRGl2LmRhdGFzZXQua2V5ID12YWx1ZTtcbiAgICAgICAgaXRlbURpdi5kYXRhc2V0LnR5cGUgPSBpdGVtLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoZm9vZEltYWdlKTtcbiAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChmb29kTmFtZSk7XG5cbiAgICAgICAgaWYoaXRlbS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnTWVhbCcpe1xuICAgICAgICAgICAgY29uc3QgZm9vZEluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICBmb29kSW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBpdGVtLmdldEluZ3JlZGllbnRzKCk7XG4gICAgICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGZvb2RJbmdyZWRpZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQocHJpY2UpO1xuICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGZvb2RTZWxlY3RCdG4pXG4gICAgXG4gICAgICAgIGNvbnRlbnRTcGFjZS5hcHBlbmRDaGlsZChpdGVtRGl2KTtcbiAgICAgfVxuXG4gICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdEJ0bkV2ZW50cyhlKXtcbiAgICAgICAgY29uc3QgaXRlbSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5rZXk7XG4gICAgICAgIGNvbnN0IHR5cGU9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC50eXBlO1xuICAgICAgICBcblxuICAgICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgICAgICBjYXNlICdNZWFsJzpcbiAgICAgICAgICAgICAgICBkaWFsb2dNZW51KGZvb2RfaXRlbXNbaXRlbV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdEcmlua3MnOlxuICAgICAgICAgICAgICAgIGRpYWxvZ01lbnUoZHJpbmtfaXRlbXNbaXRlbV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlICdTaWRlcyc6XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgIH1cblxuXG5cbn1cblxuXG5cblxuIiwiaW1wb3J0IHsgbWVudVRhYiB9IGZyb20gXCIuLi9mdW5jdGlvbnMvdGFiQ29udGVudFwiO1xuaW1wb3J0IHsgbWVudUl0ZW1zIH0gZnJvbSAnLi4vcGFnZXMvbWVudSc7XG5cblxuZXhwb3J0IGNvbnN0IHRhYiA9KCk9PntcblxuICAgIG1lbnVUYWIoKTtcblxuICAgIGNvbnN0ICB0YWJOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1uYXYnKTtcbiAgICBjb25zdCB0YWJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtbmF2LWJ0bicpO1xuICBcblxuXG4gICAgZnVuY3Rpb24gc2VsZWN0KGJ1dHRvbil7XG4gICAgICAgIGlmKGJ1dHRvbiA9PT0gJ01lbnUnKXtcbiAgICAgICAgICAgIHRhYk5hdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB0YWJNZW51LmZvckVhY2godGFiID0+e1xuICAgICAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZENoZWNrKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuXG4gICAgZnVuY3Rpb24gYWRkQ2hlY2soZSl7XG4gICAgICAgIHJlbW92ZVRhYkNoZWNrKCk7XG5cbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgndGFiLWFjdGl2ZScpO1xuICAgICAgICBjaGVja0NoYW5nZSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tDaGFuZ2UoKXtcbiAgICAgICAgY29uc3QgYWN0aXZlVGFiID0gZ2V0QWN0aXZlTWVudVRhYigpO1xuXG4gICAgICAgIHN3aXRjaChhY3RpdmVUYWIpe1xuICAgICAgICAgICAgY2FzZSAnTWVhbHMnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVRhYilcbiAgICAgICAgICAgICAgICBtZW51SXRlbXMoYWN0aXZlVGFiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnU2lkZXMnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVRhYilcbiAgICAgICAgICAgICAgICBtZW51SXRlbXMoYWN0aXZlVGFiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgJ0RyaW5rcyc6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aXZlVGFiKVxuICAgICAgICAgICAgICAgIG1lbnVJdGVtcyhhY3RpdmVUYWIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVGFiQ2hlY2soKXtcbiAgICAgICAgXG5cbiAgICAgICAgdGFiTWVudS5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgICAgIGlmKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYi1hY3RpdmUnKSl7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYi1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVOYXYoKXtcbiAgICAgICAgXG4gICAgICAgIHRhYk5hdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZlTWVudVRhYigpe1xuICAgICAgICBsZXQgc2VsZWN0ZWRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWFjdGl2ZScpO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coc2VsZWN0ZWRUYWIudGV4dENvbnRlbnQpXG4gICAgICAgIHJldHVybiBzZWxlY3RlZFRhYi50ZXh0Q29udGVudDtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJueyByZW1vdmVOYXYsIHNlbGVjdCwgZ2V0QWN0aXZlTWVudVRhYn1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vYWxlcnQoJ2hlbGxvJyk7XG5cbmltcG9ydCBsb2FkIGZyb20gJy4uL2Z1bmN0aW9ucy9sb2FkJztcbmltcG9ydCBib2R5Q29udGVudCBmcm9tICcuLi9mdW5jdGlvbnMvYm9keUNvbnRlbnQnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBtZW51SXRlbXMgfSBmcm9tICcuLi9wYWdlcy9tZW51JztcbmltcG9ydCB7IG1lbnVUYWIsIHJlbmRlciB9IGZyb20gJy4uL2Z1bmN0aW9ucy90YWJDb250ZW50JztcbmltcG9ydCB7IGhvbWUgfSBmcm9tICcuLi9wYWdlcy9ob21lJztcbmltcG9ydCB7IGNvbnRhY3RNZW51IH0gZnJvbSAnLi4vcGFnZXMvY29udGFjdCc7XG5pbXBvcnQgeyB0YWIgfSBmcm9tICcuLi9wYWdlcy9tZW51VGFiJztcblxucmVuZGVyKCk7XG5ib2R5Q29udGVudCgpXG5cbmNvbnN0IHRhYk1lbnUgPSB0YWIoKTtcblxuY29uc3QgbmF2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1idXR0b24nKTtcblxuXG4gICAgY29uc3QgYWN0aXZlQnV0dG9uID0gZ2V0QWN0aXZlTWVudUJ0bigpO1xuICAgIGFjdGl2ZUJ1dHRvbj09PSAnSG9tZScgPyBob21lKCkgOiAwO1xuXG4gICAgbmF2QnV0dG9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRBY3RpdmUpXG4gICAgfSlcblxuXG5mdW5jdGlvbiBhZGRBY3RpdmUoZSl7XG4gICAgcmVtb3ZlQ2hlY2soKTtcblxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgY2hhbmdlUGFnZSgpO1xuXG59XG5cblxuZnVuY3Rpb24gY2hhbmdlUGFnZSgpe1xuICAgIGNvbnN0IGFjdGl2ZUJ0biA9IGdldEFjdGl2ZU1lbnVCdG4oKTtcblxuICAgIHN3aXRjaChhY3RpdmVCdG4pe1xuICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgIHRhYk1lbnUucmVtb3ZlTmF2KCk7XG4gICAgICAgICAgICBob21lKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgIGNhc2UgJ01lbnUnOlxuICAgICAgICAgICAgbWVudUl0ZW1zKHRhYk1lbnUuZ2V0QWN0aXZlTWVudVRhYigpKTtcbiAgICAgICAgICAgIHRhYk1lbnUuc2VsZWN0KGFjdGl2ZUJ0bik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgIGNhc2UgJ0NvbnRhY3QnOlxuICAgICAgICAgICAgdGFiTWVudS5yZW1vdmVOYXYoKVxuICAgICAgICAgICAgY29udGFjdE1lbnUoKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGdldEFjdGl2ZU1lbnVCdG4oKXtcbiAgICBjb25zdCBhY3RpdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gICAgcmV0dXJuIGFjdGl2ZUJ0bi50ZXh0Q29udGVudDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hlY2soKXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG5cbiAgICBpZihidXR0b24pe1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=