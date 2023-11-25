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
/* harmony import */ var _media_logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/logo.jpg */ "./media/logo.jpg");

const render = () =>{
    const array =['Home', 'Menu', 'Contact']
    const head = document.querySelector('#head');
    const navDiv = document.createElement('nav');
    const navList = document.createElement('ul');
    const div = document.createElement('div');
    const logoImg = document.createElement('img');
    const logoText = document.createElement('p');

    logoText.textContent = 'Belle Full';
    logoImg.setAttribute('src', _media_logo_jpg__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _media_circle_xmark_regular_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/circle-xmark-regular.svg */ "./media/circle-xmark-regular.svg");

const dialogMenu =(item)=>{


    const dialogArea = document.querySelector('.content-body');
    const dialog = document.querySelector('dialog');
    const form = document.querySelector('form');
    const formDiv  = document.querySelectorAll('form>div');
    const additionalDiv = document.querySelector('.additional');
    const optionalDiv = document.querySelector('.optional');
    const dialogHeader = document.querySelector('.form-dialog-header')
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
        dialogHeader.textContent = item.getName()
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
        const header = document.createElement('h2')
        header.classList.add('form-dialog-header')
        header.textContent = item.getName();

        closeImg.setAttribute('src', _media_circle_xmark_regular_svg__WEBPACK_IMPORTED_MODULE_0__)
        closeImg.classList.add('close-img');
        closeBtn.classList.add('close-button')
        closeBtn.appendChild(closeImg);
        
        div.appendChild(header)
        div.appendChild(closeBtn);
        div.classList.add('dialog-head')
        dialog.appendChild(div);


    
        if(item.getAdditionalServings()){
            const label = document.createElement('label');
            label.textContent = 'Choose Side';
            const additional = document.createElement('div');
            additional.classList.add('additional');
            form.appendChild(label);
            for(let i=0; i< item.getAdditionalServings().length; i++){
                additional.appendChild(createLabels(item.getAdditionalServings()[i], item.constructor.name, 'additional'))
            }
            form.appendChild(additional)
            if(item.getOptionalServings()){
                const label = document.createElement('label');
                label.textContent = 'Choose More Side';
                const optional = document.createElement('div');
                optional.classList.add('optional');
                form.appendChild(label);
                for(let i=0; i< item.getOptionalServings().length; i++){
                    optional.appendChild(createLabels(item.getOptionalServings()[i], item.constructor.name, 'optional'));
                } 
                form.appendChild(optional)               
            }            
        }
        const buttonDiv = document.createElement('div');
        const SubmitBtn = document.createElement('button');
        SubmitBtn.classList.add('submit-order-btn');
        SubmitBtn.textContent = 'Submit Order'
        buttonDiv.classList.add('submit-btn-div')
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
    margin: 15px auto;
    width: 90%;
    font-family: my-cool-font;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* align-content: center;
    flex-flow: column wrap; */
    
}
.home h1{
    font-size: 4vw;
    font-weight: 200;
}
.home *{
    font-family: my-cool-font;
    padding: 8px;
    font-size: 2.5vw;
}
.home-logo{
    width: 80%;
    height: 50%;
    /* background: url('../media/logo.jpg'); */
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
    /* grid-template-rows: repeat(auto-fit,1fr); */
    grid-template-columns: repeat(auto-fit,400px);
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
    height: 60%;
    align-items: center;
    align-content: center;
    /* flex-wrap: wrap; */
    justify-content: center;
    padding: 8px;
    font-size: 1.2em;
    border: 5px solid green;
    border-radius: 15px;

}

.card-ingredients{
    display: none;
}
.card:hover .card-ingredients{
    display: block;
}
.card button, .submit-order-btn{
    padding: 10px 12px;
    border-radius: 25px;
    background-color: green;
    color: white;
    border: 0;
    font-size: 1.5em;
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
    width: 25%;
    margin: 0 auto;
    height: fit-content;
    display:flex;
    flex-direction: column;
    /* align-items: stretch; */
    justify-content: center; 
    display: none;
    position: absolute;
    top: 40%;
    left: 40%;
}


form{
    /* margin: 10px auto; */
    display: flex;
    padding: 10px;
    justify-content: space-evenly;
    flex-direction: column;
    width: 90%;
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
    gap: 5px;
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
    font-size: 1.75em;
    font-weight: 800;
}

.optional div>label, .additional div>label{
    font-size: 1.5em;
}

.submit-btn-div{
    display: flex;
    justify-self: center;
}

.submit-order-btn{
    margin: 10px auto;
    font-size: 2em;
}

.dialog-head{
    display: flex;
    width: 100%;
}

.form-dialog-header{
    flex: 1;
    font-size: 2em;
    margin-left: 5px;
}
.close-img{
    width: 20px;
    height: 20px;
    padding: 5px;
}

.close-button{
    background: none;
    border: none;
    /* margin-left:auto; */
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
} */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    padding: 0;\n    margin: 0;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    /* font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; */\n    list-style: none;\n    text-decoration: none;\n}\n\n@font-face{\n    font-family: my-cool-font;\n    src: url(../font/obised/Obised.ttf);\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    height:100vh;\n}\n\n#head{\n    background-color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.home{\n    margin: 15px auto;\n    width: 90%;\n    font-family: my-cool-font;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    /* align-content: center;\n    flex-flow: column wrap; */\n    \n}\n.home h1{\n    font-size: 4vw;\n    font-weight: 200;\n}\n.home *{\n    font-family: my-cool-font;\n    padding: 8px;\n    font-size: 2.5vw;\n}\n.home-logo{\n    width: 80%;\n    height: 50%;\n    /* background: url('../media/logo.jpg'); */\n}\n\n.logo{\n    display: flex;\n    align-items: center;\n    margin-right: auto;\n}\n\n.logo p{\n    font-size: 2.5vw;\n    font-family: my-cool-font;\n}\n.logo-img{\n    width: 7vw;\n    height: 6vw;\n}\n\n\n\nnav, .menu-nav{\n    width: 50%;\n    margin: 0 auto;\n    display: flex;\n    justify-content:space-between ;\n    gap: 5px;\n}\n\n\n.menu-nav{\n    width: 80%;\n    align-items: center;\n    display: none;\n   \n\n}\n\nnav button, .menu-nav-btn{\n    width: 50%;\n    margin: 10px 0;\n    padding:8px 10px ;\n    \n    font-size: 2vw;\n    border-radius: 20px;\n    border: 5px solid green;\n}\n\n.menu-nav-btn{\n    color: white;\n    border: 0;\n    font-size: 3vw;\n    border-radius: 0;\n    background: none;\n}\n\n.menu-nav-btn:hover, .tab-active{\n    border-bottom: 5px solid white;\n}\n\n\nnav button:hover, .active{\n    background-color: green;\n    color: white;\n}\n\n\n#content{\n    background-color: green;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    \n    align-items: center;\n    \n}\n\n.content-body{\n    margin: 20px auto;\n    padding: 10px;\n    width: 90%;\n    height: 90%;\n    background-color: white;\n    display: grid;\n    /* grid-template-rows: repeat(auto-fit,1fr); */\n    grid-template-columns: repeat(auto-fit,400px);\n    gap: 8px;\n    justify-content: center;\n    align-items: center;\n    border-radius: 15px;\n    position: relative;\n}\n\n.card{\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    height: 60%;\n    align-items: center;\n    align-content: center;\n    /* flex-wrap: wrap; */\n    justify-content: center;\n    padding: 8px;\n    font-size: 1.2em;\n    border: 5px solid green;\n    border-radius: 15px;\n\n}\n\n.card-ingredients{\n    display: none;\n}\n.card:hover .card-ingredients{\n    display: block;\n}\n.card button, .submit-order-btn{\n    padding: 10px 12px;\n    border-radius: 25px;\n    background-color: green;\n    color: white;\n    border: 0;\n    font-size: 1.5em;\n    font-weight: 900;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.card p{\n    text-align: center;\n}\n\n.food-menu-img{\n    width: 80%;\n    height: 50%;\n    border-radius: 15px 0;\n}\n\ndialog{\n    width: 25%;\n    margin: 0 auto;\n    height: fit-content;\n    display:flex;\n    flex-direction: column;\n    /* align-items: stretch; */\n    justify-content: center; \n    display: none;\n    position: absolute;\n    top: 40%;\n    left: 40%;\n}\n\n\nform{\n    /* margin: 10px auto; */\n    display: flex;\n    padding: 10px;\n    justify-content: space-evenly;\n    flex-direction: column;\n    width: 90%;\n    height: 90%;\n    gap: 5px;\n}\n\n\n.optional, .additional{\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    \n}\n\n.optional div, .additional div{\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\nform input[type= 'number']{\n    display: none;\n    width: 65px;\n    height: 15px;\n    padding: 5px;\n    text-align: center;\n    margin-left: auto;\n}\nform > label{\n    font-size: 1.75em;\n    font-weight: 800;\n}\n\n.optional div>label, .additional div>label{\n    font-size: 1.5em;\n}\n\n.submit-btn-div{\n    display: flex;\n    justify-self: center;\n}\n\n.submit-order-btn{\n    margin: 10px auto;\n    font-size: 2em;\n}\n\n.dialog-head{\n    display: flex;\n    width: 100%;\n}\n\n.form-dialog-header{\n    flex: 1;\n    font-size: 2em;\n    margin-left: 5px;\n}\n.close-img{\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n}\n\n.close-button{\n    background: none;\n    border: none;\n    /* margin-left:auto; */\n}\n\n.contact{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.contact-socials{\n    display: flex;\n}\n/* .body{\n    background-color: green;\n    flex: 1;\n} */"],"sourceRoot":""}]);
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
/* harmony import */ var _media_logo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media/logo.jpg */ "./media/logo.jpg");



const home =()=>{
    const contentBody = document.querySelector('.content-body');
    render();

    function render(){
        (0,_functions_bodyContent__WEBPACK_IMPORTED_MODULE_0__.clearScreen)();

        const div = document.createElement('div')

        const headerImg = document.createElement('img');

        
        headerImg.setAttribute('src', _media_logo_jpg__WEBPACK_IMPORTED_MODULE_1__)

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
            render([])
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
            foodIngredients.classList.add('card-ingredients')
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

/***/ }),

/***/ "./media/circle-xmark-regular.svg":
/*!****************************************!*\
  !*** ./media/circle-xmark-regular.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3962bd1b9e383ecaf67e.svg";

/***/ }),

/***/ "./media/logo.jpg":
/*!************************!*\
  !*** ./media/logo.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87ce7dfe5dac180376d0.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ3hCMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmU7QUFDN0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyw0Q0FBSTtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4QnNEO0FBQy9DOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyw0REFBSztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3Q0FBd0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNDQUFzQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNNaUM7QUFDRzs7O0FBR3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQix1Q0FBSTtBQUN0QixtQkFBbUIsdUNBQUk7QUFDdkIsZ0JBQWdCLHVDQUFJO0FBQ3BCLGtCQUFrQix1Q0FBSTs7QUFFdEIsaUJBQWlCLDBDQUFNO0FBQ3ZCLGtCQUFrQiwwQ0FBTTtBQUN4QixpQkFBaUIsMENBQU07OztBQUd2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFaUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQjFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDBIQUE0QztBQUN4Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhHQUE4RztBQUM5RztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFNBQVMsZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtB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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFcUM7QUFDYztBQUM5QjtBQUNxQjtBQUNnQjtBQUNyQjtBQUNVO0FBQ1I7O0FBRXZDLDZEQUFNO0FBQ04sa0VBQVc7O0FBRVgsZ0JBQWdCLG1EQUFHOztBQUVuQjs7O0FBR0E7QUFDQSw2QkFBNkIsaURBQUk7O0FBRWpDO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaURBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzREFBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0REFBVztBQUN2QjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9mdW5jdGlvbnMvYm9keUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vZnVuY3Rpb25zL2xvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vZnVuY3Rpb25zL3RhYkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vaXRlbS9Ecmluay5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9pdGVtL2RpYWxvZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9pdGVtL2Zvb2QtaXRlbXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vaXRlbS9mb29kLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3BhZ2VzL21lbnVUYWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIGNvbnN0IGJvZHlDb250ZW50ID0gKCkgPT57XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBjb250ZW50Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRCb2R5LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtYm9keScpO1xuICAgIFxuICAgIC8vIGNvbnN0IGJvZHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIGJvZHlUZXh0LnRleHRDb250ZW50PSAnTG9yZW0gaXNwdXMgJztcblxuICAgIC8vIGNvbnRlbnRCb2R5LmFwcGVuZENoaWxkKGJvZHlUZXh0KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRCb2R5KVxufVxuXG5leHBvcnQgY29uc3QgY2xlYXJTY3JlZW4gPSgpPT57XG5cbiAgICAvL2NvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IGJvZHlJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvZHknKTtcbiAgICAgICAgaWYoYm9keUl0ZW1zLmNoaWxkcmVuLmxlbmd0aCA+MCl7XG4gICAgICAgICAgICBBcnJheS5mcm9tKGJvZHlJdGVtcy5jaGlsZHJlbikuZm9yRWFjaChub2RlID0+e1xuICAgICAgICAgICAgICAgIGJvZHlJdGVtcy5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYm9keUNvbnRlbnQ7IiwiY29uc3QgcmVuZGVyID0gKCkgPT57XG4gICAgY29uc3QgYXJyYXkgPVsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXVxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZCcpO1xuICAgIGNvbnN0IG5hdkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgXG5cbiAgICBcbiAgICBmb3IobGV0IGk9IDA7IGk8IGFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IGxpbmtCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbGlua0J1dHRvbi50ZXh0Q29udGVudCA9IGFycmF5W2ldO1xuICAgICAgICBuYXZEaXYuYXBwZW5kQ2hpbGQobGlua0J1dHRvbilcblxuICAgIH0gICBcbiAgICBcbiAgICBoZWFkLmFwcGVuZENoaWxkKG5hdkRpdik7XG5cbn1cblxuY29uc3QgY2xlYXJTY3JlZW4gPShpdGVtcyk9PntcblxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXI7IiwiaW1wb3J0IGxvZ28gZnJvbSAnLi4vbWVkaWEvbG9nby5qcGcnXG5leHBvcnQgY29uc3QgcmVuZGVyID0gKCkgPT57XG4gICAgY29uc3QgYXJyYXkgPVsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXVxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZCcpO1xuICAgIGNvbnN0IG5hdkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGxvZ29UZXh0LnRleHRDb250ZW50ID0gJ0JlbGxlIEZ1bGwnO1xuICAgIGxvZ29JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBsb2dvKTtcbiAgICBsb2dvSW1nLmNsYXNzTGlzdC5hZGQoJ2xvZ28taW1nJyk7XG5cbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsb2dvSW1nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIFxuICAgIGZvcihsZXQgaT0gMDsgaTwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgbGlua0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsaW5rQnV0dG9uLnRleHRDb250ZW50ID0gYXJyYXlbaV07XG4gICAgICAgIGxpbmtCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpXG4gICAgICAgIGlmKGFycmF5W2ldLmluY2x1ZGVzKCdIb21lJykpe1xuICAgICAgICAgICAgbGlua0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBuYXZEaXYuYXBwZW5kQ2hpbGQobGlua0J1dHRvbilcblxuICAgIH0gICBcbiAgICBcbiAgICBoZWFkLmFwcGVuZENoaWxkKG5hdkRpdik7XG5cbn1cblxuZXhwb3J0IGNvbnN0IG1lbnVUYWI9KCkgPT57XG5cbiAgICBjb25zdCBhcnJheSA9IFsnTWVhbHMnICwgJ1NpZGVzJywgJ0RyaW5rcyddO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm9keScpO1xuICAgIG1lbnVOYXYuY2xhc3NMaXN0LmFkZCgnbWVudS1uYXYnKTtcblxuICAgIGFycmF5LmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgbGV0IG1lbnVUYWJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbWVudVRhYkJ1dHRvbi50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgIG1lbnVUYWJCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1uYXYtYnRuJyk7XG4gICAgICAgIGlmKGl0ZW0gPT09ICdNZWFscycpe1xuICAgICAgICAgICAgbWVudVRhYkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YWItYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgLy8gbWVudVRhYkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZENoZWNrKVxuICAgICAgICBtZW51TmF2LmFwcGVuZENoaWxkKG1lbnVUYWJCdXR0b24pO1xuICAgIH0pXG5cbiAgICAgICAgaWYoIWNvbnRlbnQuY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtbmF2Jykpe1xuICAgICAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobWVudU5hdiwgYm9keSk7XG4gICAgICAgIH1cbiAgICBcbn0iLCJleHBvcnQgY2xhc3MgRHJpbmtze1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBhZGRpdGlvbmFsU2VydmluZ3MsIG9wdGlvbmFsU2VydmluZ3Mpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxTZXJ2aW5ncyA9IGFkZGl0aW9uYWxTZXJ2aW5ncztcbiAgICAgICAgdGhpcy5vcHRpb25hbFNlcnZpbmdzID0gb3B0aW9uYWxTZXJ2aW5ncztcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIH1cblxuXG4gICAgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGdldFByaWNlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlO1xuICAgIH1cblxuICAgIGdldEFkZGl0aW9uYWxTZXJ2aW5ncygpe1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRpdGlvbmFsU2VydmluZ3M7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uYWxTZXJ2aW5ncygpe1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25hbFNlcnZpbmdzO1xuICAgIH1cbn0iLCJpbXBvcnQgeE1hcmsgZnJvbSAnLi4vbWVkaWEvY2lyY2xlLXhtYXJrLXJlZ3VsYXIuc3ZnJztcbmV4cG9ydCBjb25zdCBkaWFsb2dNZW51ID0oaXRlbSk9PntcblxuXG4gICAgY29uc3QgZGlhbG9nQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvZHknKTtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIGNvbnN0IGZvcm1EaXYgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybT5kaXYnKTtcbiAgICBjb25zdCBhZGRpdGlvbmFsRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZGl0aW9uYWwnKTtcbiAgICBjb25zdCBvcHRpb25hbERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25hbCcpO1xuICAgIGNvbnN0IGRpYWxvZ0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWRpYWxvZy1oZWFkZXInKVxuICAgIC8vY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJyk7XG4gICAgXG4gICAgaWYoZGlhbG9nKXtcbiAgICAgICAgdXBkYXRlRGlhbG9nKGl0ZW0pXG5cbiAgICB9ZWxzZXtcbiAgICAgICAgY3JlYXRlRGlhbG9nKGl0ZW0pO1xuICAgIH1cblxuXG4gICAgXG5cbiAgICBjb25zdCBjbG9zZURpYWxvZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKTtcbiAgICBjb25zdCByYWRpb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lID0gJ2FkZGl0aW9uYWwnXVwiKTtcblxuICAgIFxuICAgIGNsb3NlRGlhbG9nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VEaWFsb2cpO1xuXG4gICAgcmFkaW9CdXR0b24uZm9yRWFjaCgocmFkaW8pID0+e1xuICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrU2VsZWN0ZWQpO1xuXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEaWFsb2coaXRlbSl7XG4gICAgICAgIGRpYWxvZ0hlYWRlci50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0TmFtZSgpXG4gICAgICAgIGlmKGFkZGl0aW9uYWxEaXYuaGFzQ2hpbGROb2RlcygpKXtcbiAgICAgICAgICAgIGFkZGl0aW9uYWxEaXYucmVwbGFjZUNoaWxkcmVuKClcbiAgICAgICAgICAgXG4gICAgICAgICAgICBpZihvcHRpb25hbERpdi5oYXNDaGlsZE5vZGVzKCkpe1xuICAgICAgICAgICAgICAgIG9wdGlvbmFsRGl2LnJlcGxhY2VDaGlsZHJlbigpXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICBpZihpdGVtLmdldEFkZGl0aW9uYWxTZXJ2aW5ncygpIHx8IGl0ZW0uZ2V0T3B0aW9uYWxTZXJ2aW5ncygpKXtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1MYWJlbHMgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybT5sYWJlbCcpO1xuICAgICAgICAgICAgaXRlbS5nZXRBZGRpdGlvbmFsU2VydmluZ3MoKS5mb3JFYWNoKG5hbWUgPT57XG5cbiAgICAgICAgICAgICAgICBhZGRpdGlvbmFsRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVscyhuYW1lLCBpdGVtLmNvbnN0cnVjdG9yLm5hbWUsICdhZGRpdGlvbmFsJykpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaXRlbS5nZXRPcHRpb25hbFNlcnZpbmdzKCkuZm9yRWFjaChuYW1lID0+e1xuICAgICAgICAgICAgICAgIG9wdGlvbmFsRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVscyhuYW1lLCBpdGVtLmNvbnN0cnVjdG9yLm5hbWUsICdvcHRpb25hbCcpKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGRpYWxvZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2xvc2VEaWFsb2coZSl7XG4gICAgICAgIFxuXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsb3NlKCk7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSdub25lJztcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURpYWxvZyhpdGVtKXtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IGRpdiAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgY2xvc2VJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1kaWFsb2ctaGVhZGVyJylcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gaXRlbS5nZXROYW1lKCk7XG5cbiAgICAgICAgY2xvc2VJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCB4TWFyaylcbiAgICAgICAgY2xvc2VJbWcuY2xhc3NMaXN0LmFkZCgnY2xvc2UtaW1nJyk7XG4gICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ1dHRvbicpXG4gICAgICAgIGNsb3NlQnRuLmFwcGVuZENoaWxkKGNsb3NlSW1nKTtcbiAgICAgICAgXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctaGVhZCcpXG4gICAgICAgIGRpYWxvZy5hcHBlbmRDaGlsZChkaXYpO1xuXG5cbiAgICBcbiAgICAgICAgaWYoaXRlbS5nZXRBZGRpdGlvbmFsU2VydmluZ3MoKSl7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdDaG9vc2UgU2lkZSc7XG4gICAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhZGRpdGlvbmFsLmNsYXNzTGlzdC5hZGQoJ2FkZGl0aW9uYWwnKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8IGl0ZW0uZ2V0QWRkaXRpb25hbFNlcnZpbmdzKCkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWwuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWxzKGl0ZW0uZ2V0QWRkaXRpb25hbFNlcnZpbmdzKClbaV0sIGl0ZW0uY29uc3RydWN0b3IubmFtZSwgJ2FkZGl0aW9uYWwnKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkaXRpb25hbClcbiAgICAgICAgICAgIGlmKGl0ZW0uZ2V0T3B0aW9uYWxTZXJ2aW5ncygpKXtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnQ2hvb3NlIE1vcmUgU2lkZSc7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBvcHRpb25hbC5jbGFzc0xpc3QuYWRkKCdvcHRpb25hbCcpO1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPCBpdGVtLmdldE9wdGlvbmFsU2VydmluZ3MoKS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsLmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVscyhpdGVtLmdldE9wdGlvbmFsU2VydmluZ3MoKVtpXSwgaXRlbS5jb25zdHJ1Y3Rvci5uYW1lLCAnb3B0aW9uYWwnKSk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG9wdGlvbmFsKSAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBTdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgU3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1vcmRlci1idG4nKTtcbiAgICAgICAgU3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCBPcmRlcidcbiAgICAgICAgYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idG4tZGl2JylcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKFN1Ym1pdEJ0bilcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xuXG4gICAgICAgIGRpYWxvZ0FyZWEuYXBwZW5kQ2hpbGQoZGlhbG9nKVxuICAgICAgICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgIGRpYWxvZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKClcbiAgICAgICBcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxhYmVscyhpdGVtLCBpdGVtTmFtZSwgaXRlbVR5cGUpe1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaXRlbVNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGl0ZW1RdWFudGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGl0ZW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IFxuXG4gICAgICAgIGl0ZW1RdWFudGl0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG4gICAgICAgIGlmKGl0ZW1OYW1lID09PSAnRHJpbmtzJyl7XG4gICAgICAgICAgICBpdGVtU2VsZWN0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBpdGVtU2VsZWN0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpdGVtU2VsZWN0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsIGl0ZW1UeXBlKVxuICAgICAgICBpdGVtTGFiZWwudGV4dENvbnRlbnQgPSBpdGVtXG5cbiAgICAgICAgaXRlbUxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIGlmKGl0ZW1TZWxlY3Rpb24uY2hlY2tlZCl7XG4gICAgICAgICAgICAgICAgaXRlbVNlbGVjdGlvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaXRlbVF1YW50aXR5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3Rpb24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaXRlbVF1YW50aXR5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICAvL2l0ZW1TZWxlY3Rpb24udGV4dENvbnRlbnQgPSA7XG4gICAgICAgIGl0ZW1TZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk9PntcbiAgICAgICAgXG4gICAgICAgICAgICBpZihpdGVtU2VsZWN0aW9uLmNoZWNrZWQpe1xuICAgICAgICAgICAgICAgIGl0ZW1RdWFudGl0eS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgaXRlbVF1YW50aXR5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pOyAgIFxuICAgICAgICBcbiAgICAgICAgaXRlbVNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIGlmKGl0ZW1TZWxlY3Rpb24uY2hlY2tlZCl7XG4gICAgICAgICAgICAgICAgLy9pdGVtU2VsZWN0aW9uLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpdGVtUXVhbnRpdHkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIC8vaXRlbVNlbGVjdGlvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpdGVtUXVhbnRpdHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaXRlbVF1YW50aXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnMScpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbVNlbGVjdGlvbik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpdGVtTGFiZWwpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbVF1YW50aXR5KTtcblxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrU2VsZWN0ZWQoZSl7XG5cbiAgICAgICAgcmFkaW9CdXR0b24uZm9yRWFjaCgoYnRuKSA9PntcbiAgICAgICAgICAgIGlmKGJ0biAhPSBlLnRhcmdldCl7XG4gICAgICAgICAgICAgICAgaWYoIWJ0bi5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoYnRuLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSdub25lJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxufVxuXG5cbiIsImltcG9ydCB7IERyaW5rcyB9IGZyb20gXCIuL0RyaW5rXCI7XG5pbXBvcnQgeyBGb29kLCBNZWFsIH0gZnJvbSBcIi4vZm9vZFwiO1xuXG5cbiBjb25zdCBmb29kX2l0ZW1zID0gW107XG4gY29uc3QgZHJpbmtfaXRlbXMgPVtdXG4vL2NvbnN0IHByb3RlaW4gPSBbJ0Zpc2gnLCAnQmVlZicsICdUdXJrZXknLCAnQ2hpY2tlbiddXG5jb25zdCBzd2FsbG93ID0gWydFYmEnLCAnRnVmdScsICdTZW1vJywgJ1BvdW5kbyddXG5cbmNvbnN0IGJlYW5zID0gbmV3IE1lYWwoJ0V3YSBBZ295aW4nLCBbJ1JlZCBQYWxtIE9pbCcsICdwZXBwZXInLCAnYmVhbnMnXSwgMTAsIFsnQnJlYWQnLCAnR2FycmknXSk7XG5jb25zdCBqb2xsb2YgPSBuZXcgTWVhbCgnSm9sbG9mIFJpY2UnLCBbJ3JpY2UnLCAndG9tYXRvJywgJ3BlcHBlciddLCAxMCwgWydwbGFudGFpbicsICdzYWxhZCddKTtcbmNvbnN0IGVmbyA9IG5ldyBNZWFsKCdFZm8gUmlybycsIFsnc3RvY2sgZmlzaCcsICdVZ3UgbGVhdmVzJywgJ1JlZCBQYWxtIE9pbCddLCAxMCwgc3dhbGxvdyk7XG5jb25zdCBlZ3VzaSA9IG5ldyBNZWFsKCdFZ3VzaScsIFsnRWd1c2knLCAnc3RvY2sgZmlzaCcsICdwZXBwZXInLCAnVmVnZXRhYmxlIExlYXZlcyddLCAxMCwgc3dhbGxvdyk7XG5cbmNvbnN0IGNva2UgPSBuZXcgRHJpbmtzKCdDb2xhJywgMi41MCwgWydCYXNpYyBDb2xhJywgJ0NoZXJyeSBDb2xhJywgJ0dyYXBlIENvbGEnLCAnRGlldCBDb2xhJ10sIFsnSWNlJywgJ0xpbWUnXSlcbmNvbnN0IGZhbnRhID0gbmV3IERyaW5rcygnRmFudGEnLCAyLjUwLCBbJ0Jhc2ljIEZhbnRhJywgJ0NoZXJyeSBGYW50YScsICdHcmFwZSBGYW50YScsICdEaWV0IEZhbnRhJ10sIFsnSWNlJywgJ0xpbWUnXSk7XG5jb25zdCBiZWVyID0gbmV3IERyaW5rcygnQmVlcicsIDMuNTAsIFsnSGVpbmlrZWluJywgJ0d1aW5lc3MgJywgJyBCdWR3ZWlzZXInLCAnU3RhcmxpbmcnLCAnQ29yb25hJ10sIFsnQ2FubmVkJywgJ0JvdHRsZSddKVxuXG5cbmZvb2RfaXRlbXMucHVzaChiZWFucyk7XG5mb29kX2l0ZW1zLnB1c2goam9sbG9mKTtcbmZvb2RfaXRlbXMucHVzaChlZm8pO1xuZm9vZF9pdGVtcy5wdXNoKGVndXNpKTtcblxuZHJpbmtfaXRlbXMucHVzaChjb2tlLCBmYW50YSwgYmVlcik7XG5cbmV4cG9ydCAge2RyaW5rX2l0ZW1zLCBmb29kX2l0ZW1zfVxuIiwiZXhwb3J0IGNsYXNzIEZvb2R7XG4gICAgY29uc3RydWN0b3IobmFtZSwgaW5ncmVkaWVudHMsIHByaWNlKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pbmdyZWRpZW50cyA9IGluZ3JlZGllbnRzO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgICAgIHRoaXMuYWRkaXRpb25hbFNlcnZpbmdzID0gWydGaXNoJywgJ0JlZWYnLCAnVHVya2V5JywgJ0NoaWNrZW4nXVxuICAgIH1cblxuICAgIGdldENsYXNzTmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cbiAgICBnZXROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0UHJpY2UoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpY2U7XG4gICAgfVxuXG4gICAgZ2V0SW5ncmVkaWVudHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5ncmVkaWVudHMudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csIFwiLCBcIikgO1xuICAgIH1cblxuICAgIGdldEFkZGl0aW9uYWxTZXJ2aW5ncygpe1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRpdGlvbmFsU2VydmluZ3M7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWVhbCBleHRlbmRzIEZvb2R7XG4gICAgY29uc3RydWN0b3IobmFtZSwgaW5ncmVkaWVudHMsIHByaWNlLCBvcHRpb25hbFNlcnZpbmdzKXtcbiAgICAgICAgc3VwZXIobmFtZSwgaW5ncmVkaWVudHMsIHByaWNlKTtcbiAgICAgICAgdGhpcy5vcHRpb25hbFNlcnZpbmdzID0gb3B0aW9uYWxTZXJ2aW5ncztcbiAgICB9XG5cbiAgICBnZXRPcHRpb25hbFNlcnZpbmdzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsU2VydmluZ3M7XG4gICAgfVxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250L29iaXNlZC9PYmlzZWQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAvKiBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjsgKi9cbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogbXktY29vbC1mb250O1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5ib2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6MTAwdmg7XG59XG5cbiNoZWFke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhvbWV7XG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbiAgICBmb250LWZhbWlseTogbXktY29vbC1mb250O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDsgKi9cbiAgICBcbn1cbi5ob21lIGgxe1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG4uaG9tZSAqe1xuICAgIGZvbnQtZmFtaWx5OiBteS1jb29sLWZvbnQ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtc2l6ZTogMi41dnc7XG59XG4uaG9tZS1sb2dve1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuLi9tZWRpYS9sb2dvLmpwZycpOyAqL1xufVxuXG4ubG9nb3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ubG9nbyBwe1xuICAgIGZvbnQtc2l6ZTogMi41dnc7XG4gICAgZm9udC1mYW1pbHk6IG15LWNvb2wtZm9udDtcbn1cbi5sb2dvLWltZ3tcbiAgICB3aWR0aDogN3Z3O1xuICAgIGhlaWdodDogNnZ3O1xufVxuXG5cblxubmF2LCAubWVudS1uYXZ7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuIDtcbiAgICBnYXA6IDVweDtcbn1cblxuXG4ubWVudS1uYXZ7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICBcblxufVxuXG5uYXYgYnV0dG9uLCAubWVudS1uYXYtYnRue1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgcGFkZGluZzo4cHggMTBweCA7XG4gICAgXG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBncmVlbjtcbn1cblxuLm1lbnUtbmF2LWJ0bntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLm1lbnUtbmF2LWJ0bjpob3ZlciwgLnRhYi1hY3RpdmV7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlO1xufVxuXG5cbm5hdiBidXR0b246aG92ZXIsIC5hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cbiNjb250ZW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG59XG5cbi5jb250ZW50LWJvZHl7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsMWZyKTsgKi9cbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCw0MDBweCk7XG4gICAgZ2FwOiA4cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuLmNhcmQtaW5ncmVkaWVudHN7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5jYXJkOmhvdmVyIC5jYXJkLWluZ3JlZGllbnRze1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNhcmQgYnV0dG9uLCAuc3VibWl0LW9yZGVyLWJ0bntcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbi5jYXJkIHB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9vZC1tZW51LWltZ3tcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMDtcbn1cblxuZGlhbG9ne1xuICAgIHdpZHRoOiAyNSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvKiBhbGlnbi1pdGVtczogc3RyZXRjaDsgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MCU7XG4gICAgbGVmdDogNDAlO1xufVxuXG5cbmZvcm17XG4gICAgLyogbWFyZ2luOiAxMHB4IGF1dG87ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBnYXA6IDVweDtcbn1cblxuXG4ub3B0aW9uYWwsIC5hZGRpdGlvbmFse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbiAgICBcbn1cblxuLm9wdGlvbmFsIGRpdiwgLmFkZGl0aW9uYWwgZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbn1cblxuZm9ybSBpbnB1dFt0eXBlPSAnbnVtYmVyJ117XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbmZvcm0gPiBsYWJlbHtcbiAgICBmb250LXNpemU6IDEuNzVlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG4ub3B0aW9uYWwgZGl2PmxhYmVsLCAuYWRkaXRpb25hbCBkaXY+bGFiZWx7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLnN1Ym1pdC1idG4tZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5zdWJtaXQtb3JkZXItYnRue1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4uZGlhbG9nLWhlYWR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tZGlhbG9nLWhlYWRlcntcbiAgICBmbGV4OiAxO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY2xvc2UtaW1ne1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jbG9zZS1idXR0b257XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgLyogbWFyZ2luLWxlZnQ6YXV0bzsgKi9cbn1cblxuLmNvbnRhY3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFjdC1zb2NpYWxze1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4vKiAuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBmbGV4OiAxO1xufSAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsbUpBQW1KO0lBQ25KLDJHQUEyRztJQUMzRyxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEI7NkJBQ3lCOztBQUU3QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtJ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Ozs7R0FHR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgLyogZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7ICovXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6IG15LWNvb2wtZm9udDtcXG4gICAgc3JjOiB1cmwoLi4vZm9udC9vYmlzZWQvT2Jpc2VkLnR0Zik7XFxufVxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDoxMDB2aDtcXG59XFxuXFxuI2hlYWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWV7XFxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBmb250LWZhbWlseTogbXktY29vbC1mb250O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7ICovXFxuICAgIFxcbn1cXG4uaG9tZSBoMXtcXG4gICAgZm9udC1zaXplOiA0dnc7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcbi5ob21lICp7XFxuICAgIGZvbnQtZmFtaWx5OiBteS1jb29sLWZvbnQ7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1zaXplOiAyLjV2dztcXG59XFxuLmhvbWUtbG9nb3tcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi4vbWVkaWEvbG9nby5qcGcnKTsgKi9cXG59XFxuXFxuLmxvZ297XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmxvZ28gcHtcXG4gICAgZm9udC1zaXplOiAyLjV2dztcXG4gICAgZm9udC1mYW1pbHk6IG15LWNvb2wtZm9udDtcXG59XFxuLmxvZ28taW1ne1xcbiAgICB3aWR0aDogN3Z3O1xcbiAgICBoZWlnaHQ6IDZ2dztcXG59XFxuXFxuXFxuXFxubmF2LCAubWVudS1uYXZ7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbiA7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5cXG4ubWVudS1uYXZ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgXFxuXFxufVxcblxcbm5hdiBidXR0b24sIC5tZW51LW5hdi1idG57XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBwYWRkaW5nOjhweCAxMHB4IDtcXG4gICAgXFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLm1lbnUtbmF2LWJ0bntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogM3Z3O1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4ubWVudS1uYXYtYnRuOmhvdmVyLCAudGFiLWFjdGl2ZXtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG5cXG5uYXYgYnV0dG9uOmhvdmVyLCAuYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG4jY29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLmNvbnRlbnQtYm9keXtcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsMWZyKTsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsNDAwcHgpO1xcbiAgICBnYXA6IDhweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFxufVxcblxcbi5jYXJkLWluZ3JlZGllbnRze1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uY2FyZDpob3ZlciAuY2FyZC1pbmdyZWRpZW50c3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jYXJkIGJ1dHRvbiwgLnN1Ym1pdC1vcmRlci1idG57XFxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jYXJkIHB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvb2QtbWVudS1pbWd7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDA7XFxufVxcblxcbmRpYWxvZ3tcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYWxpZ24taXRlbXM6IHN0cmV0Y2g7ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQwJTtcXG4gICAgbGVmdDogNDAlO1xcbn1cXG5cXG5cXG5mb3Jte1xcbiAgICAvKiBtYXJnaW46IDEwcHggYXV0bzsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuXFxuLm9wdGlvbmFsLCAuYWRkaXRpb25hbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIFxcbn1cXG5cXG4ub3B0aW9uYWwgZGl2LCAuYWRkaXRpb25hbCBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9ICdudW1iZXInXXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDY1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5mb3JtID4gbGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMS43NWVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4ub3B0aW9uYWwgZGl2PmxhYmVsLCAuYWRkaXRpb25hbCBkaXY+bGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5zdWJtaXQtYnRuLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zdWJtaXQtb3JkZXItYnRue1xcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5kaWFsb2ctaGVhZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mb3JtLWRpYWxvZy1oZWFkZXJ7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG4uY2xvc2UtaW1ne1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jbG9zZS1idXR0b257XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgLyogbWFyZ2luLWxlZnQ6YXV0bzsgKi9cXG59XFxuXFxuLmNvbnRhY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb250YWN0LXNvY2lhbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi8qIC5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgZmxleDogMTtcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjbGVhclNjcmVlbiB9IGZyb20gXCIuLi9mdW5jdGlvbnMvYm9keUNvbnRlbnRcIjtcblxuZXhwb3J0IGNvbnN0IGNvbnRhY3RNZW51ID0gKCk9PntcbiAgICBcbiAgICBjb25zdCBjb250ZW50Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvZHknKTtcblxuICAgIHJlbmRlcigpO1xuICAgIGNyZWF0ZVNvY2lhbE1lZGlhKCk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKXtcbiAgICAgICAgY2xlYXJTY3JlZW4oKTtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudD0gJ0NvbnRhY3QgVXMnO1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGJvZHkudGV4dENvbnRlbnQgPSAnUGhvbmUgTm86IDA3MDU3NTcwOTUyJztcblxuICAgICAgICBjb25zdCBlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGVzdC50ZXh0Q29udGVudCA9ICdBZGRyZXNzOiAxMSBXYXZlcmx5IFBsYWNlLCBCYXJjbGF5cyBSZCc7XG5cblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJvZHkpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZXN0KTtcblxuICAgICAgICBjb250ZW50Qm9keS5hcHBlbmRDaGlsZChkaXYpXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiAgY3JlYXRlU29jaWFsTWVkaWEoKXtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbJ3R3aXR0ZXInLCAnZmFjZWJvb2snLCAnaW5zdGFncmFtJ11cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgZm9yKGxldCB4PTA7IHg8IGFycmF5Lmxlbmd0aDsgeCsrKXtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXG4gICAgICAgICAgICBpLmNsYXNzTGlzdC5hZGQoJ2ZhLWJyYW5kcycpO1xuICAgICAgICAgICAgaS5jbGFzc0xpc3QuYWRkKGBmYS0ke2FycmF5W3hdfWApO1xuICAgICAgICAgICAgbGluay5hcHBlbmRDaGlsZChpKTtcblxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpbmspO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb250ZW50Qm9keS5hcHBlbmRDaGlsZChkaXYpXG5cblxuICAgIH1cbn0iLCJpbXBvcnQgeyBjbGVhclNjcmVlbiB9IGZyb20gXCIuLi9mdW5jdGlvbnMvYm9keUNvbnRlbnRcIjtcbmltcG9ydCBsb2dvIGZyb20gJy4uL21lZGlhL2xvZ28uanBnJztcblxuZXhwb3J0IGNvbnN0IGhvbWUgPSgpPT57XG4gICAgY29uc3QgY29udGVudEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib2R5Jyk7XG4gICAgcmVuZGVyKCk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKXtcbiAgICAgICAgY2xlYXJTY3JlZW4oKTtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgIGNvbnN0IGhlYWRlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgIFxuICAgICAgICBoZWFkZXJJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBsb2dvKVxuXG4gICAgICAgIGhlYWRlckltZy5jbGFzc0xpc3QuYWRkKCdob21lLWxvZ28nKVxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQ9ICdCZWxsZSBGdWxsJztcblxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBib2R5LnRleHRDb250ZW50ID0gJ0Nob3AgVGlsbCBZb3UgQmVsbGUgRnVsbCc7XG5cbiAgICAgICAgY29uc3QgZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBlc3QudGV4dENvbnRlbnQgPSAnRXN0IDIwMjMnO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkZXJJbWcpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJvZHkpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZXN0KTtcblxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgICAgICBjb250ZW50Qm9keS5hcHBlbmRDaGlsZChkaXYpXG4gICAgfVxuXG59IiwiaW1wb3J0ICB7IGZvb2RfaXRlbXMsZHJpbmtfaXRlbXMgfSBmcm9tIFwiLi4vaXRlbS9mb29kLWl0ZW1zXCI7XG5pbXBvcnQgeyBkaWFsb2dNZW51IH0gZnJvbSBcIi4uL2l0ZW0vZGlhbG9nXCI7XG5pbXBvcnQgeyBjbGVhclNjcmVlbiB9IGZyb20gXCIuLi9mdW5jdGlvbnMvYm9keUNvbnRlbnRcIjtcbmV4cG9ydCBjb25zdCBtZW51SXRlbXMgPShpdGVtKT0+e1xuXG4gICAgLy9ET00gRWxlbWVudHNcbiAgICBjb25zdCBjb250ZW50U3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib2R5Jyk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBzd2l0Y2goaXRlbSl7XG4gICAgICAgIGNhc2UgJ01lYWxzJzpcbiAgICAgICAgICAgIHJlbmRlcihmb29kX2l0ZW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1NpZGVzJzpcbiAgICAgICAgICAgIHJlbmRlcihbXSlcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgY2FzZSAnRHJpbmtzJzpcbiAgICAgICAgICAgIHJlbmRlcihkcmlua19pdGVtcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gICAgXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJyk7XG4gICAgY29uc3Qgc2VsZWN0TWVhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkPmJ1dHRvbicpO1xuXG4gICAgc2VsZWN0TWVhbEJ0bi5mb3JFYWNoKGJ1dHRvbiA9PntcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxoYW5kbGVTZWxlY3RCdG5FdmVudHMpO1xuICAgIH0pXG5cbiAgICAvL3JlbmRlciBmb29kIGl0ZW1zIG9uIHNjcmVlbiBcbiAgICBmdW5jdGlvbiByZW5kZXIoaXRlbSl7XG5cbiAgICAgICAgY2xlYXJTY3JlZW4oKTtcbiAgICAgICAgXG4gICAgICAgICAgICBmb3IobGV0IGkgPTA7IGkgPCBpdGVtLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBjcmVhdGVGb29kSXRlbShpLCBpdGVtW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudFNwYWNlKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvb2RJdGVtKHZhbHVlLCBpdGVtKXtcbiAgICAgICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBmb29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IGZvb2RTZWxlY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBcbiAgICAgICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgICBcbiAgICAgICAgZm9vZE5hbWUudGV4dENvbnRlbnQgPSBpdGVtLmdldE5hbWUoKTtcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQ9IGAkJHtpdGVtLmdldFByaWNlKCl9YDtcbiAgICAgICBcbiAgICAgICAgZm9vZEltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4uL21lZGlhLyR7dmFsdWV9LnBuZ2ApO1xuICAgICAgICBmb29kSW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBgJHtpdGVtLmdldE5hbWUoKX1gKTtcblxuICAgICAgICBmb29kU2VsZWN0QnRuLnRleHRDb250ZW50PSdTZWxlY3QgSXRlbSdcbiAgICAgICAgLy9mb29kU2VsZWN0QnRuLm9uY2xpY2sgPSBjcmVhdGVEaWFsb2coaXRlbSk7XG4gICAgICAgIC8vZm9vZFNlbGVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZURpYWxvZyhpdGVtKSk7XG4gICAgXG4gICAgICAgIGl0ZW1EaXYuZGF0YXNldC5rZXkgPXZhbHVlO1xuICAgICAgICBpdGVtRGl2LmRhdGFzZXQudHlwZSA9IGl0ZW0uY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChmb29kSW1hZ2UpO1xuICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcblxuICAgICAgICBpZihpdGVtLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdNZWFsJyl7XG4gICAgICAgICAgICBjb25zdCBmb29kSW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIGZvb2RJbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0SW5ncmVkaWVudHMoKTtcbiAgICAgICAgICAgIGZvb2RJbmdyZWRpZW50cy5jbGFzc0xpc3QuYWRkKCdjYXJkLWluZ3JlZGllbnRzJylcbiAgICAgICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoZm9vZEluZ3JlZGllbnRzKTtcbiAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChwcmljZSk7XG4gICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoZm9vZFNlbGVjdEJ0bilcbiAgICBcbiAgICAgICAgY29udGVudFNwYWNlLmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuICAgICB9XG5cbiAgICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0QnRuRXZlbnRzKGUpe1xuICAgICAgICBjb25zdCBpdGVtID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmtleTtcbiAgICAgICAgY29uc3QgdHlwZT0gZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnR5cGU7XG4gICAgICAgIFxuXG4gICAgICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgICAgICAgIGNhc2UgJ01lYWwnOlxuICAgICAgICAgICAgICAgIGRpYWxvZ01lbnUoZm9vZF9pdGVtc1tpdGVtXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0RyaW5rcyc6XG4gICAgICAgICAgICAgICAgZGlhbG9nTWVudShkcmlua19pdGVtc1tpdGVtXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgJ1NpZGVzJzpcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgfVxuXG5cblxufVxuXG5cblxuXG4iLCJpbXBvcnQgeyBtZW51VGFiIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy90YWJDb250ZW50XCI7XG5pbXBvcnQgeyBtZW51SXRlbXMgfSBmcm9tICcuLi9wYWdlcy9tZW51JztcblxuXG5leHBvcnQgY29uc3QgdGFiID0oKT0+e1xuXG4gICAgbWVudVRhYigpO1xuXG4gICAgY29uc3QgIHRhYk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LW5hdicpO1xuICAgIGNvbnN0IHRhYk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1uYXYtYnRuJyk7XG4gIFxuXG5cbiAgICBmdW5jdGlvbiBzZWxlY3QoYnV0dG9uKXtcbiAgICAgICAgaWYoYnV0dG9uID09PSAnTWVudScpe1xuICAgICAgICAgICAgdGFiTmF2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIHRhYk1lbnUuZm9yRWFjaCh0YWIgPT57XG4gICAgICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkQ2hlY2spXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG5cbiAgICBmdW5jdGlvbiBhZGRDaGVjayhlKXtcbiAgICAgICAgcmVtb3ZlVGFiQ2hlY2soKTtcblxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCd0YWItYWN0aXZlJyk7XG4gICAgICAgIGNoZWNrQ2hhbmdlKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0NoYW5nZSgpe1xuICAgICAgICBjb25zdCBhY3RpdmVUYWIgPSBnZXRBY3RpdmVNZW51VGFiKCk7XG5cbiAgICAgICAgc3dpdGNoKGFjdGl2ZVRhYil7XG4gICAgICAgICAgICBjYXNlICdNZWFscyc6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aXZlVGFiKVxuICAgICAgICAgICAgICAgIG1lbnVJdGVtcyhhY3RpdmVUYWIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdTaWRlcyc6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aXZlVGFiKVxuICAgICAgICAgICAgICAgIG1lbnVJdGVtcyhhY3RpdmVUYWIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSAnRHJpbmtzJzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVUYWIpXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1zKGFjdGl2ZVRhYik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVUYWJDaGVjaygpe1xuICAgICAgICBcblxuICAgICAgICB0YWJNZW51LmZvckVhY2goYnRuID0+e1xuICAgICAgICAgICAgaWYoYnRuLmNsYXNzTGlzdC5jb250YWlucygndGFiLWFjdGl2ZScpKXtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgndGFiLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZU5hdigpe1xuICAgICAgICBcbiAgICAgICAgdGFiTmF2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBY3RpdmVNZW51VGFiKCl7XG4gICAgICAgIGxldCBzZWxlY3RlZFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItYWN0aXZlJyk7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhzZWxlY3RlZFRhYi50ZXh0Q29udGVudClcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkVGFiLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBcbiAgICByZXR1cm57IHJlbW92ZU5hdiwgc2VsZWN0LCBnZXRBY3RpdmVNZW51VGFifVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy9hbGVydCgnaGVsbG8nKTtcblxuaW1wb3J0IGxvYWQgZnJvbSAnLi4vZnVuY3Rpb25zL2xvYWQnO1xuaW1wb3J0IGJvZHlDb250ZW50IGZyb20gJy4uL2Z1bmN0aW9ucy9ib2R5Q29udGVudCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IG1lbnVJdGVtcyB9IGZyb20gJy4uL3BhZ2VzL21lbnUnO1xuaW1wb3J0IHsgbWVudVRhYiwgcmVuZGVyIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3RhYkNvbnRlbnQnO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gJy4uL3BhZ2VzL2hvbWUnO1xuaW1wb3J0IHsgY29udGFjdE1lbnUgfSBmcm9tICcuLi9wYWdlcy9jb250YWN0JztcbmltcG9ydCB7IHRhYiB9IGZyb20gJy4uL3BhZ2VzL21lbnVUYWInO1xuXG5yZW5kZXIoKTtcbmJvZHlDb250ZW50KClcblxuY29uc3QgdGFiTWVudSA9IHRhYigpO1xuXG5jb25zdCBuYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ1dHRvbicpO1xuXG5cbiAgICBjb25zdCBhY3RpdmVCdXR0b24gPSBnZXRBY3RpdmVNZW51QnRuKCk7XG4gICAgYWN0aXZlQnV0dG9uPT09ICdIb21lJyA/IGhvbWUoKSA6IDA7XG5cbiAgICBuYXZCdXR0b24uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEFjdGl2ZSlcbiAgICB9KVxuXG5cbmZ1bmN0aW9uIGFkZEFjdGl2ZShlKXtcbiAgICByZW1vdmVDaGVjaygpO1xuXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICBjaGFuZ2VQYWdlKCk7XG5cbn1cblxuXG5mdW5jdGlvbiBjaGFuZ2VQYWdlKCl7XG4gICAgY29uc3QgYWN0aXZlQnRuID0gZ2V0QWN0aXZlTWVudUJ0bigpO1xuXG4gICAgc3dpdGNoKGFjdGl2ZUJ0bil7XG4gICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgICAgdGFiTWVudS5yZW1vdmVOYXYoKTtcbiAgICAgICAgICAgIGhvbWUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgY2FzZSAnTWVudSc6XG4gICAgICAgICAgICBtZW51SXRlbXModGFiTWVudS5nZXRBY3RpdmVNZW51VGFiKCkpO1xuICAgICAgICAgICAgdGFiTWVudS5zZWxlY3QoYWN0aXZlQnRuKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgY2FzZSAnQ29udGFjdCc6XG4gICAgICAgICAgICB0YWJNZW51LnJlbW92ZU5hdigpXG4gICAgICAgICAgICBjb250YWN0TWVudSgpXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gZ2V0QWN0aXZlTWVudUJ0bigpe1xuICAgIGNvbnN0IGFjdGl2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICByZXR1cm4gYWN0aXZlQnRuLnRleHRDb250ZW50O1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGVjaygpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcblxuICAgIGlmKGJ1dHRvbil7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==