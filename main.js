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
    const additionalDiv = document.querySelector('.additonal');
    const optionalDiv = document.querySelector('.optional');
    //const closeBtn = document.querySelector('.close-button');
    
    if(dialog){
        updateDialog(item)

    }else{
        createDialog(item);
    }


    

    const closeDialogBtn = document.querySelector('.close-button');
    
    closeDialogBtn.addEventListener('click', closeDialog);

    // function showDialog(){
        

    //     
       
    // }

    function updateDialog(item){

        // dialog.removeChild(formDiv);

        if(additionalDiv.childNodes.length >0){
            additionalDiv.childNodes.forEach(div =>{
                div.remove()
                //dialog.re
            })

            if(optionalDiv.childNodes.length >0){
                optionalDiv.childNodes.forEach(div =>{
                    div.remove()
                    //dialog.re
                })
            }
        }
        //console.log(formDiv);
       
        if(item.getAdditionalServings() || item.getOptionalServings()){
            const formLabels =  document.querySelectorAll('form>label');
            item.getAdditionalServings().forEach(name =>{

                additionalDiv.appendChild(createLabels(name, item.constructor.name, 'additional'));
            })

            item.getOptionalServings().forEach(name =>{
                optionalDiv.appendChild(createLabels(name, item.constructor.name, 'optional'));
            })

            // for(let i = 0; i< formLabels.length; i++){
            //     if(i ===0){
            //         item.getAdditionalServings().forEach(name =>{
            //             formLabels[i].after(createLabels(name, item.constructor.name));
            //         })
            //     }

            //     else{
            //         item.getOptionalServings().forEach(name =>{
            //             formLabels[i].after(createLabels(name, item.constructor.name));
            //         })
            //     }
            // }
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
            div.classList.add('additional');
            form.appendChild(label);
            for(let i=0; i< item.getAdditionalServings().length; i++){
                additional.appendChild(createLabels(item.getAdditionalServings()[i], item.constructor.name, 'additional'))
            }
            form.appendChild(additional)
            if(item.getOptionalServings()){
                const label = document.createElement('label');
                label.textContent = 'Select Complementary Side';
                const optional = document.createElement('div');
                div.classList.add('optional');
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
        div.appendChild(itemSelection);
        div.appendChild(itemLabel);
        div.appendChild(itemQuantity);

        return div;
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
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
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
    width: 40%;
    height: fit-content;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    display: none;
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

form div{
    display: flex;
    align-items: center;
    gap: 10px;

    
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

.close-img{
    width: 20px;
    height: 20px;
}

.close-button{
    background: none;
}
/* .body{
    background-color: green;
    flex: 1;
} */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,qGAAqG;IACrG,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,4CAAmC;AACvC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;AAC7B;AACA;IACI,UAAU;IACV,WAAW;AACf;;;;AAIA;IACI,UAAU;IACV,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,QAAQ;AACZ;;;AAGA;IACI,UAAU;IACV,mBAAmB;IACnB,aAAa;;;AAGjB;;AAEA;IACI,UAAU;IACV,cAAc;IACd,iBAAiB;;IAEjB,cAAc;IACd,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,SAAS;IACT,cAAc;IACd,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;AAClC;;;AAGA;IACI,uBAAuB;IACvB,YAAY;AAChB;;;AAGA;IACI,uBAAuB;IACvB,OAAO;IACP,aAAa;IACb,sBAAsB;;IAEtB,mBAAmB;;AAEvB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,UAAU;IACV,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,wCAAwC;IACxC,6CAA6C;IAC7C,QAAQ;IACR,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,qBAAqB;IACrB,eAAe;IACf,6BAA6B;IAC7B,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;;AAEvB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,SAAS;IACT,cAAc;IACd,gBAAgB;IAChB,4DAA4D;AAChE;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,aAAa;IACb,6BAA6B;IAC7B,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;;;AAGb;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;AACA;;;GAGG","sourcesContent":["*{\n    padding: 0;\n    margin: 0;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    list-style: none;\n    text-decoration: none;\n}\n\n@font-face{\n    font-family: my-cool-font;\n    src: url(../font/obised/Obised.ttf);\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    height:100vh;\n}\n\n#head{\n    background-color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.logo{\n    display: flex;\n    align-items: center;\n    margin-right: auto;\n}\n\n.logo p{\n    font-size: 2.5vw;\n    font-family: my-cool-font;\n}\n.logo-img{\n    width: 7vw;\n    height: 6vw;\n}\n\n\n\nnav, .menu-nav{\n    width: 50%;\n    margin: 0 auto;\n    display: flex;\n    justify-content:space-between ;\n    gap: 5px;\n}\n\n\n.menu-nav{\n    width: 80%;\n    align-items: center;\n    display: none;\n   \n\n}\n\nnav button, .menu-nav-btn{\n    width: 50%;\n    margin: 10px 0;\n    padding:8px 10px ;\n    \n    font-size: 2vw;\n    border-radius: 20px;\n    border: 5px solid green;\n}\n\n.menu-nav-btn{\n    color: white;\n    border: 0;\n    font-size: 3vw;\n    border-radius: 0;\n    background: none;\n}\n\n.menu-nav-btn:hover, .tab-active{\n    border-bottom: 5px solid white;\n}\n\n\nnav button:hover, .active{\n    background-color: green;\n    color: white;\n}\n\n\n#content{\n    background-color: green;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    \n    align-items: center;\n    \n}\n\n.content-body{\n    margin: 20px auto;\n    padding: 10px;\n    width: 90%;\n    height: 90%;\n    background-color: white;\n    display: grid;\n    grid-template-rows: repeat(auto-fit,1fr);\n    grid-template-columns: repeat(auto-fit,450px);\n    gap: 8px;\n    justify-content: center;\n    align-items: center;\n    border-radius: 15px;\n}\n\n.card{\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    height: 70%;\n    align-items: center;\n    align-content: center;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    padding: 8px;\n    font-size: 1.5vw;\n    border: 5px solid green;\n    border-radius: 15px;\n\n}\n\n.card button, .submit-order-btn{\n    padding: 10px 12px;\n    border-radius: 25px;\n    background-color: green;\n    color: white;\n    border: 0;\n    font-size: 2vw;\n    font-weight: 900;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.card p{\n    text-align: center;\n}\n\n.food-menu-img{\n    width: 80%;\n    height: 50%;\n    border-radius: 15px 0;\n}\n\ndialog{\n    width: 40%;\n    height: fit-content;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; \n    display: none;\n}\n\nform{\n    margin: 10px auto;\n    display: flex;\n    padding: 10px;\n    justify-content: space-evenly;\n    flex-direction: column;\n    width: fit-content;\n    height: 90%;\n    gap: 5px;\n}\n\nform div{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n\n    \n}\n\nform input[type= 'number']{\n    display: none;\n    width: 65px;\n    height: 15px;\n    padding: 5px;\n    text-align: center;\n    margin-left: auto;\n}\nform > label{\n    font-size: 2vw;\n    font-weight: 800;\n}\n\nform> div>label{\n    font-size: 1.75vw;\n}\n.submit-order-btn{\n    margin: 10px 0;\n    font-size: 2vw;\n}\n\n.close-img{\n    width: 20px;\n    height: 20px;\n}\n\n.close-button{\n    background: none;\n}\n/* .body{\n    background-color: green;\n    flex: 1;\n} */"],"sourceRoot":""}]);
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

        const header = document.createElement('h1');
        header.textContent= 'Belle Full';

        const body = document.createElement('p');
        body.textContent = 'Chop Till You Belle Full';

        const est = document.createElement('span');
        est.textContent = 'Est 2023';


        div.appendChild(header);
        div.appendChild(body);
        div.appendChild(est);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8s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Q0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL2Z1bmN0aW9ucy9ib2R5Q29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9mdW5jdGlvbnMvbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9mdW5jdGlvbnMvdGFiQ29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9pdGVtL0RyaW5rLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL2l0ZW0vZGlhbG9nLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL2l0ZW0vZm9vZC1pdGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9pdGVtL2Zvb2QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vcGFnZXMvbWVudVRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgY29uc3QgYm9keUNvbnRlbnQgPSAoKSA9PntcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGNvbnRlbnRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudEJvZHkuY2xhc3NMaXN0LmFkZCgnY29udGVudC1ib2R5Jyk7XG4gICAgXG4gICAgLy8gY29uc3QgYm9keVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gYm9keVRleHQudGV4dENvbnRlbnQ9ICdMb3JlbSBpc3B1cyAnO1xuXG4gICAgLy8gY29udGVudEJvZHkuYXBwZW5kQ2hpbGQoYm9keVRleHQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudEJvZHkpXG59XG5cbmV4cG9ydCBjb25zdCBjbGVhclNjcmVlbiA9KCk9PntcblxuICAgIC8vY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3QgYm9keUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm9keScpO1xuICAgICAgICBpZihib2R5SXRlbXMuY2hpbGRyZW4ubGVuZ3RoID4wKXtcbiAgICAgICAgICAgIEFycmF5LmZyb20oYm9keUl0ZW1zLmNoaWxkcmVuKS5mb3JFYWNoKG5vZGUgPT57XG4gICAgICAgICAgICAgICAgYm9keUl0ZW1zLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBib2R5Q29udGVudDsiLCJjb25zdCByZW5kZXIgPSAoKSA9PntcbiAgICBjb25zdCBhcnJheSA9WydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkJyk7XG4gICAgY29uc3QgbmF2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICBcblxuICAgIFxuICAgIGZvcihsZXQgaT0gMDsgaTwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgbGlua0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsaW5rQnV0dG9uLnRleHRDb250ZW50ID0gYXJyYXlbaV07XG4gICAgICAgIG5hdkRpdi5hcHBlbmRDaGlsZChsaW5rQnV0dG9uKVxuXG4gICAgfSAgIFxuICAgIFxuICAgIGhlYWQuYXBwZW5kQ2hpbGQobmF2RGl2KTtcblxufVxuXG5jb25zdCBjbGVhclNjcmVlbiA9KGl0ZW1zKT0+e1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjsiLCJleHBvcnQgY29uc3QgcmVuZGVyID0gKCkgPT57XG4gICAgY29uc3QgYXJyYXkgPVsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXVxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZCcpO1xuICAgIGNvbnN0IG5hdkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGxvZ29UZXh0LnRleHRDb250ZW50ID0gJ0JlbGxlIEZ1bGwnO1xuICAgIGxvZ29JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vbWVkaWEvbG9nby5qcGcnKTtcbiAgICBsb2dvSW1nLmNsYXNzTGlzdC5hZGQoJ2xvZ28taW1nJyk7XG5cbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsb2dvSW1nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIFxuICAgIGZvcihsZXQgaT0gMDsgaTwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgbGlua0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsaW5rQnV0dG9uLnRleHRDb250ZW50ID0gYXJyYXlbaV07XG4gICAgICAgIGxpbmtCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpXG4gICAgICAgIGlmKGFycmF5W2ldLmluY2x1ZGVzKCdIb21lJykpe1xuICAgICAgICAgICAgbGlua0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBuYXZEaXYuYXBwZW5kQ2hpbGQobGlua0J1dHRvbilcblxuICAgIH0gICBcbiAgICBcbiAgICBoZWFkLmFwcGVuZENoaWxkKG5hdkRpdik7XG5cbn1cblxuZXhwb3J0IGNvbnN0IG1lbnVUYWI9KCkgPT57XG5cbiAgICBjb25zdCBhcnJheSA9IFsnTWVhbHMnICwgJ1NpZGVzJywgJ0RyaW5rcyddO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm9keScpO1xuICAgIG1lbnVOYXYuY2xhc3NMaXN0LmFkZCgnbWVudS1uYXYnKTtcblxuICAgIGFycmF5LmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgbGV0IG1lbnVUYWJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbWVudVRhYkJ1dHRvbi50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgIG1lbnVUYWJCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1uYXYtYnRuJyk7XG4gICAgICAgIGlmKGl0ZW0gPT09ICdNZWFscycpe1xuICAgICAgICAgICAgbWVudVRhYkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YWItYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgLy8gbWVudVRhYkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZENoZWNrKVxuICAgICAgICBtZW51TmF2LmFwcGVuZENoaWxkKG1lbnVUYWJCdXR0b24pO1xuICAgIH0pXG5cbiAgICAgICAgaWYoIWNvbnRlbnQuY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtbmF2Jykpe1xuICAgICAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobWVudU5hdiwgYm9keSk7XG4gICAgICAgIH1cbiAgICBcbn0iLCJleHBvcnQgY2xhc3MgRHJpbmtze1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBhZGRpdGlvbmFsU2VydmluZ3MsIG9wdGlvbmFsU2VydmluZ3Mpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxTZXJ2aW5ncyA9IGFkZGl0aW9uYWxTZXJ2aW5ncztcbiAgICAgICAgdGhpcy5vcHRpb25hbFNlcnZpbmdzID0gb3B0aW9uYWxTZXJ2aW5ncztcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIH1cblxuXG4gICAgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGdldFByaWNlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlO1xuICAgIH1cblxuICAgIGdldEFkZGl0aW9uYWxTZXJ2aW5ncygpe1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRpdGlvbmFsU2VydmluZ3M7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uYWxTZXJ2aW5ncygpe1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25hbFNlcnZpbmdzO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgZGlhbG9nTWVudSA9KGl0ZW0pPT57XG5cblxuICAgIGNvbnN0IGRpYWxvZ0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib2R5Jyk7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICBjb25zdCBmb3JtRGl2ICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0+ZGl2Jyk7XG4gICAgY29uc3QgYWRkaXRpb25hbERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRpdG9uYWwnKTtcbiAgICBjb25zdCBvcHRpb25hbERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25hbCcpO1xuICAgIC8vY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJyk7XG4gICAgXG4gICAgaWYoZGlhbG9nKXtcbiAgICAgICAgdXBkYXRlRGlhbG9nKGl0ZW0pXG5cbiAgICB9ZWxzZXtcbiAgICAgICAgY3JlYXRlRGlhbG9nKGl0ZW0pO1xuICAgIH1cblxuXG4gICAgXG5cbiAgICBjb25zdCBjbG9zZURpYWxvZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKTtcbiAgICBcbiAgICBjbG9zZURpYWxvZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRGlhbG9nKTtcblxuICAgIC8vIGZ1bmN0aW9uIHNob3dEaWFsb2coKXtcbiAgICAgICAgXG5cbiAgICAvLyAgICAgXG4gICAgICAgXG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGlhbG9nKGl0ZW0pe1xuXG4gICAgICAgIC8vIGRpYWxvZy5yZW1vdmVDaGlsZChmb3JtRGl2KTtcblxuICAgICAgICBpZihhZGRpdGlvbmFsRGl2LmNoaWxkTm9kZXMubGVuZ3RoID4wKXtcbiAgICAgICAgICAgIGFkZGl0aW9uYWxEaXYuY2hpbGROb2Rlcy5mb3JFYWNoKGRpdiA9PntcbiAgICAgICAgICAgICAgICBkaXYucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAvL2RpYWxvZy5yZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYob3B0aW9uYWxEaXYuY2hpbGROb2Rlcy5sZW5ndGggPjApe1xuICAgICAgICAgICAgICAgIG9wdGlvbmFsRGl2LmNoaWxkTm9kZXMuZm9yRWFjaChkaXYgPT57XG4gICAgICAgICAgICAgICAgICAgIGRpdi5yZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICAvL2RpYWxvZy5yZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZyhmb3JtRGl2KTtcbiAgICAgICBcbiAgICAgICAgaWYoaXRlbS5nZXRBZGRpdGlvbmFsU2VydmluZ3MoKSB8fCBpdGVtLmdldE9wdGlvbmFsU2VydmluZ3MoKSl7XG4gICAgICAgICAgICBjb25zdCBmb3JtTGFiZWxzID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0+bGFiZWwnKTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0QWRkaXRpb25hbFNlcnZpbmdzKCkuZm9yRWFjaChuYW1lID0+e1xuXG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbERpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbHMobmFtZSwgaXRlbS5jb25zdHJ1Y3Rvci5uYW1lLCAnYWRkaXRpb25hbCcpKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGl0ZW0uZ2V0T3B0aW9uYWxTZXJ2aW5ncygpLmZvckVhY2gobmFtZSA9PntcbiAgICAgICAgICAgICAgICBvcHRpb25hbERpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbHMobmFtZSwgaXRlbS5jb25zdHJ1Y3Rvci5uYW1lLCAnb3B0aW9uYWwnKSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBmb3IobGV0IGkgPSAwOyBpPCBmb3JtTGFiZWxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vICAgICBpZihpID09PTApe1xuICAgICAgICAgICAgLy8gICAgICAgICBpdGVtLmdldEFkZGl0aW9uYWxTZXJ2aW5ncygpLmZvckVhY2gobmFtZSA9PntcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZvcm1MYWJlbHNbaV0uYWZ0ZXIoY3JlYXRlTGFiZWxzKG5hbWUsIGl0ZW0uY29uc3RydWN0b3IubmFtZSkpO1xuICAgICAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAgICAgLy8gICAgIGVsc2V7XG4gICAgICAgICAgICAvLyAgICAgICAgIGl0ZW0uZ2V0T3B0aW9uYWxTZXJ2aW5ncygpLmZvckVhY2gobmFtZSA9PntcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZvcm1MYWJlbHNbaV0uYWZ0ZXIoY3JlYXRlTGFiZWxzKG5hbWUsIGl0ZW0uY29uc3RydWN0b3IubmFtZSkpO1xuICAgICAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGRpYWxvZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2xvc2VEaWFsb2coZSl7XG4gICAgICAgIFxuXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsb3NlKCk7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSdub25lJztcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURpYWxvZyhpdGVtKXtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IGRpdiAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgY2xvc2VJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgXG4gICAgICAgIGNsb3NlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL21lZGlhL2NpcmNsZS14bWFyay1yZWd1bGFyLnN2ZycpXG4gICAgICAgIGNsb3NlSW1nLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWltZycpO1xuICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idXR0b24nKVxuICAgICAgICBjbG9zZUJ0bi5hcHBlbmRDaGlsZChjbG9zZUltZyk7XG4gICAgICAgXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiAgICAgICAgZGlhbG9nLmFwcGVuZENoaWxkKGRpdik7XG5cblxuICAgIFxuICAgICAgICBpZihpdGVtLmdldEFkZGl0aW9uYWxTZXJ2aW5ncygpKXtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1NlbGVjdCBTaWRlJztcbiAgICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsJyk7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPCBpdGVtLmdldEFkZGl0aW9uYWxTZXJ2aW5ncygpLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBhZGRpdGlvbmFsLmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVscyhpdGVtLmdldEFkZGl0aW9uYWxTZXJ2aW5ncygpW2ldLCBpdGVtLmNvbnN0cnVjdG9yLm5hbWUsICdhZGRpdGlvbmFsJykpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGFkZGl0aW9uYWwpXG4gICAgICAgICAgICBpZihpdGVtLmdldE9wdGlvbmFsU2VydmluZ3MoKSl7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1NlbGVjdCBDb21wbGVtZW50YXJ5IFNpZGUnO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ29wdGlvbmFsJyk7XG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8IGl0ZW0uZ2V0T3B0aW9uYWxTZXJ2aW5ncygpLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWwuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWxzKGl0ZW0uZ2V0T3B0aW9uYWxTZXJ2aW5ncygpW2ldLCBpdGVtLmNvbnN0cnVjdG9yLm5hbWUsICdvcHRpb25hbCcpKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQob3B0aW9uYWwpICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnV0dG9uRGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgU3VibWl0QnRuICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBTdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0LW9yZGVyLWJ0bicpO1xuICAgICAgICBTdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0IE9yZGVyJ1xuICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoU3VibWl0QnRuKVxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG5cbiAgICAgICAgZGlhbG9nQXJlYS5hcHBlbmRDaGlsZChkaWFsb2cpXG4gICAgICAgIGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgZGlhbG9nLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKVxuICAgICAgIFxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTGFiZWxzKGl0ZW0sIGl0ZW1OYW1lLCBpdGVtVHlwZSl7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpdGVtU2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgaXRlbVF1YW50aXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgaXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTsgXG5cbiAgICAgICAgaXRlbVF1YW50aXR5LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcbiAgICAgICAgaWYoaXRlbU5hbWUgPT09ICdEcmlua3MnKXtcbiAgICAgICAgICAgIGl0ZW1TZWxlY3Rpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGl0ZW1TZWxlY3Rpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGl0ZW1TZWxlY3Rpb24uc2V0QXR0cmlidXRlKCduYW1lJywgaXRlbVR5cGUpXG4gICAgICAgIGl0ZW1MYWJlbC50ZXh0Q29udGVudCA9IGl0ZW1cblxuICAgICAgICBpdGVtTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgaWYoaXRlbVNlbGVjdGlvbi5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICBpdGVtU2VsZWN0aW9uLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpdGVtUXVhbnRpdHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgaXRlbVNlbGVjdGlvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpdGVtUXVhbnRpdHkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIC8vaXRlbVNlbGVjdGlvbi50ZXh0Q29udGVudCA9IDtcbiAgICAgICAgaXRlbVNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKT0+e1xuICAgICAgICBcbiAgICAgICAgICAgIGlmKGl0ZW1TZWxlY3Rpb24uY2hlY2tlZCl7XG4gICAgICAgICAgICAgICAgaXRlbVF1YW50aXR5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBpdGVtUXVhbnRpdHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGl0ZW1TZWxlY3Rpb24pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbUxhYmVsKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGl0ZW1RdWFudGl0eSk7XG5cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBEcmlua3MgfSBmcm9tIFwiLi9Ecmlua1wiO1xuaW1wb3J0IHsgRm9vZCwgTWVhbCB9IGZyb20gXCIuL2Zvb2RcIjtcblxuXG4gY29uc3QgZm9vZF9pdGVtcyA9IFtdO1xuIGNvbnN0IGRyaW5rX2l0ZW1zID1bXVxuLy9jb25zdCBwcm90ZWluID0gWydGaXNoJywgJ0JlZWYnLCAnVHVya2V5JywgJ0NoaWNrZW4nXVxuY29uc3Qgc3dhbGxvdyA9IFsnRWJhJywgJ0Z1ZnUnLCAnU2VtbycsICdQb3VuZG8nXVxuXG5jb25zdCBiZWFucyA9IG5ldyBNZWFsKCdFd2EgQWdveWluJywgWydSZWQgUGFsbSBPaWwnLCAncGVwcGVyJywgJ2JlYW5zJ10sIDEwLCBbJ0JyZWFkJywgJ0dhcnJpJ10pO1xuY29uc3Qgam9sbG9mID0gbmV3IE1lYWwoJ0pvbGxvZiBSaWNlJywgWydyaWNlJywgJ3RvbWF0bycsICdwZXBwZXInXSwgMTAsIFsncGxhbnRhaW4nLCAnc2FsYWQnXSk7XG5jb25zdCBlZm8gPSBuZXcgTWVhbCgnRWZvIFJpcm8nLCBbJ3N0b2NrIGZpc2gnLCAnVWd1IGxlYXZlcycsICdSZWQgUGFsbSBPaWwnXSwgMTAsIHN3YWxsb3cpO1xuY29uc3QgZWd1c2kgPSBuZXcgTWVhbCgnRWd1c2knLCBbJ0VndXNpJywgJ3N0b2NrIGZpc2gnLCAncGVwcGVyJywgJ1ZlZ2V0YWJsZSBMZWF2ZXMnXSwgMTAsIHN3YWxsb3cpO1xuXG5jb25zdCBjb2tlID0gbmV3IERyaW5rcygnQ29sYScsIDIuNTAsIFsnQmFzaWMgQ29sYScsICdDaGVycnkgQ29sYScsICdHcmFwZSBDb2xhJywgJ0RpZXQgQ29sYSddLCBbJ0ljZScsICdMaW1lJ10pXG5jb25zdCBmYW50YSA9IG5ldyBEcmlua3MoJ0ZhbnRhJywgMi41MCwgWydCYXNpYyBGYW50YScsICdDaGVycnkgRmFudGEnLCAnR3JhcGUgRmFudGEnLCAnRGlldCBGYW50YSddLCBbJ0ljZScsICdMaW1lJ10pO1xuY29uc3QgYmVlciA9IG5ldyBEcmlua3MoJ0JlZXInLCAzLjUwLCBbJ0hlaW5pa2VpbicsICdHdWluZXNzICcsICcgQnVkd2Vpc2VyJywgJ1N0YXJsaW5nJywgJ0Nvcm9uYSddLCBbJ0Nhbm5lZCcsICdCb3R0bGUnXSlcblxuXG5mb29kX2l0ZW1zLnB1c2goYmVhbnMpO1xuZm9vZF9pdGVtcy5wdXNoKGpvbGxvZik7XG5mb29kX2l0ZW1zLnB1c2goZWZvKTtcbmZvb2RfaXRlbXMucHVzaChlZ3VzaSk7XG5cbmRyaW5rX2l0ZW1zLnB1c2goY29rZSwgZmFudGEsIGJlZXIpO1xuXG5leHBvcnQgIHtkcmlua19pdGVtcywgZm9vZF9pdGVtc31cbiIsImV4cG9ydCBjbGFzcyBGb29ke1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGluZ3JlZGllbnRzLCBwcmljZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50cztcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxTZXJ2aW5ncyA9IFsnRmlzaCcsICdCZWVmJywgJ1R1cmtleScsICdDaGlja2VuJ11cbiAgICB9XG5cbiAgICBnZXRDbGFzc05hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG4gICAgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGdldFByaWNlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlO1xuICAgIH1cblxuICAgIGdldEluZ3JlZGllbnRzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmluZ3JlZGllbnRzLnRvU3RyaW5nKCkucmVwbGFjZSgvLC9nLCBcIiwgXCIpIDtcbiAgICB9XG5cbiAgICBnZXRBZGRpdGlvbmFsU2VydmluZ3MoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkaXRpb25hbFNlcnZpbmdzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1lYWwgZXh0ZW5kcyBGb29ke1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGluZ3JlZGllbnRzLCBwcmljZSwgb3B0aW9uYWxTZXJ2aW5ncyl7XG4gICAgICAgIHN1cGVyKG5hbWUsIGluZ3JlZGllbnRzLCBwcmljZSk7XG4gICAgICAgIHRoaXMub3B0aW9uYWxTZXJ2aW5ncyA9IG9wdGlvbmFsU2VydmluZ3M7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uYWxTZXJ2aW5ncygpe1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25hbFNlcnZpbmdzO1xuICAgIH1cbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9vYmlzZWQvT2Jpc2VkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogbXktY29vbC1mb250O1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5ib2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6MTAwdmg7XG59XG5cbiNoZWFke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvZ297XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmxvZ28gcHtcbiAgICBmb250LXNpemU6IDIuNXZ3O1xuICAgIGZvbnQtZmFtaWx5OiBteS1jb29sLWZvbnQ7XG59XG4ubG9nby1pbWd7XG4gICAgd2lkdGg6IDd2dztcbiAgICBoZWlnaHQ6IDZ2dztcbn1cblxuXG5cbm5hdiwgLm1lbnUtbmF2e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbiA7XG4gICAgZ2FwOiA1cHg7XG59XG5cblxuLm1lbnUtbmF2e1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgXG5cbn1cblxubmF2IGJ1dHRvbiwgLm1lbnUtbmF2LWJ0bntcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHBhZGRpbmc6OHB4IDEwcHggO1xuICAgIFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgZ3JlZW47XG59XG5cbi5tZW51LW5hdi1idG57XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDN2dztcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5tZW51LW5hdi1idG46aG92ZXIsIC50YWItYWN0aXZle1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcbn1cblxuXG5uYXYgYnV0dG9uOmhvdmVyLCAuYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4jY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxufVxuXG4uY29udGVudC1ib2R5e1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsNDUwcHgpO1xuICAgIGdhcDogOHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmNhcmR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuLmNhcmQgYnV0dG9uLCAuc3VibWl0LW9yZGVyLWJ0bntcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG4uY2FyZCBwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvb2QtbWVudS1pbWd7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDA7XG59XG5cbmRpYWxvZ3tcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuZm9ybXtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgZ2FwOiA1cHg7XG59XG5cbmZvcm0gZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICBcbn1cblxuZm9ybSBpbnB1dFt0eXBlPSAnbnVtYmVyJ117XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbmZvcm0gPiBsYWJlbHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG5mb3JtPiBkaXY+bGFiZWx7XG4gICAgZm9udC1zaXplOiAxLjc1dnc7XG59XG4uc3VibWl0LW9yZGVyLWJ0bntcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBmb250LXNpemU6IDJ2dztcbn1cblxuLmNsb3NlLWltZ3tcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5jbG9zZS1idXR0b257XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi8qIC5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGZsZXg6IDE7XG59ICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxxR0FBcUc7SUFDckcsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw0Q0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7Ozs7QUFJQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixRQUFRO0FBQ1o7OztBQUdBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixhQUFhOzs7QUFHakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjs7SUFFakIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOzs7QUFHQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLHVCQUF1QjtJQUN2QixPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHdDQUF3QztJQUN4Qyw2Q0FBNkM7SUFDN0MsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFNBQVM7SUFDVCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7OztBQUdiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTs7O0dBR0dcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5AZm9udC1mYWNle1xcbiAgICBmb250LWZhbWlseTogbXktY29vbC1mb250O1xcbiAgICBzcmM6IHVybCguLi9mb250L29iaXNlZC9PYmlzZWQudHRmKTtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbn1cXG5cXG4jaGVhZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubG9nb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubG9nbyBwe1xcbiAgICBmb250LXNpemU6IDIuNXZ3O1xcbiAgICBmb250LWZhbWlseTogbXktY29vbC1mb250O1xcbn1cXG4ubG9nby1pbWd7XFxuICAgIHdpZHRoOiA3dnc7XFxuICAgIGhlaWdodDogNnZ3O1xcbn1cXG5cXG5cXG5cXG5uYXYsIC5tZW51LW5hdntcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuIDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcblxcbi5tZW51LW5hdntcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICBcXG5cXG59XFxuXFxubmF2IGJ1dHRvbiwgLm1lbnUtbmF2LWJ0bntcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIHBhZGRpbmc6OHB4IDEwcHggO1xcbiAgICBcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4ubWVudS1uYXYtYnRue1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAzdnc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5tZW51LW5hdi1idG46aG92ZXIsIC50YWItYWN0aXZle1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XFxufVxcblxcblxcbm5hdiBidXR0b246aG92ZXIsIC5hY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbiNjb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4uY29udGVudC1ib2R5e1xcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCw0NTBweCk7XFxuICAgIGdhcDogOHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLmNhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1zaXplOiAxLjV2dztcXG4gICAgYm9yZGVyOiA1cHggc29saWQgZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFxufVxcblxcbi5jYXJkIGJ1dHRvbiwgLnN1Ym1pdC1vcmRlci1idG57XFxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDJ2dztcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY2FyZCBwe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb29kLW1lbnUtaW1ne1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAwO1xcbn1cXG5cXG5kaWFsb2d7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5mb3Jte1xcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5mb3JtIGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBcXG59XFxuXFxuZm9ybSBpbnB1dFt0eXBlPSAnbnVtYmVyJ117XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiA2NXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuZm9ybSA+IGxhYmVse1xcbiAgICBmb250LXNpemU6IDJ2dztcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuZm9ybT4gZGl2PmxhYmVse1xcbiAgICBmb250LXNpemU6IDEuNzV2dztcXG59XFxuLnN1Ym1pdC1vcmRlci1idG57XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBmb250LXNpemU6IDJ2dztcXG59XFxuXFxuLmNsb3NlLWltZ3tcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuLyogLmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBmbGV4OiAxO1xcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNsZWFyU2NyZWVuIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9ib2R5Q29udGVudFwiO1xuXG5leHBvcnQgY29uc3QgY29udGFjdE1lbnUgPSAoKT0+e1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnRCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm9keScpO1xuXG4gICAgcmVuZGVyKCk7XG4gICAgY3JlYXRlU29jaWFsTWVkaWEoKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpe1xuICAgICAgICBjbGVhclNjcmVlbigpO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50PSAnQ29udGFjdCBVcyc7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYm9keS50ZXh0Q29udGVudCA9ICdQaG9uZSBObzogMDcwNTc1NzA5NTInO1xuXG4gICAgICAgIGNvbnN0IGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZXN0LnRleHRDb250ZW50ID0gJ0FkZHJlc3M6IDExIFdhdmVybHkgUGxhY2UsIEJhcmNsYXlzIFJkJztcblxuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChlc3QpO1xuXG4gICAgICAgIGNvbnRlbnRCb2R5LmFwcGVuZENoaWxkKGRpdilcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uICBjcmVhdGVTb2NpYWxNZWRpYSgpe1xuICAgICAgICBjb25zdCBhcnJheSA9IFsndHdpdHRlcicsICdmYWNlYm9vaycsICdpbnN0YWdyYW0nXVxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBmb3IobGV0IHg9MDsgeDwgYXJyYXkubGVuZ3RoOyB4Kyspe1xuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbiAgICAgICAgICAgIGkuY2xhc3NMaXN0LmFkZCgnZmEtYnJhbmRzJyk7XG4gICAgICAgICAgICBpLmNsYXNzTGlzdC5hZGQoYGZhLSR7YXJyYXlbeF19YCk7XG4gICAgICAgICAgICBsaW5rLmFwcGVuZENoaWxkKGkpO1xuXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRlbnRCb2R5LmFwcGVuZENoaWxkKGRpdilcblxuXG4gICAgfVxufSIsImltcG9ydCB7IGNsZWFyU2NyZWVuIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9ib2R5Q29udGVudFwiO1xuXG5leHBvcnQgY29uc3QgaG9tZSA9KCk9PntcbiAgICBjb25zdCBjb250ZW50Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvZHknKTtcbiAgICByZW5kZXIoKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpe1xuICAgICAgICBjbGVhclNjcmVlbigpO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50PSAnQmVsbGUgRnVsbCc7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYm9keS50ZXh0Q29udGVudCA9ICdDaG9wIFRpbGwgWW91IEJlbGxlIEZ1bGwnO1xuXG4gICAgICAgIGNvbnN0IGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZXN0LnRleHRDb250ZW50ID0gJ0VzdCAyMDIzJztcblxuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChlc3QpO1xuXG4gICAgICAgIGNvbnRlbnRCb2R5LmFwcGVuZENoaWxkKGRpdilcbiAgICB9XG5cbn0iLCJpbXBvcnQgIHsgZm9vZF9pdGVtcyxkcmlua19pdGVtcyB9IGZyb20gXCIuLi9pdGVtL2Zvb2QtaXRlbXNcIjtcbmltcG9ydCB7IGRpYWxvZ01lbnUgfSBmcm9tIFwiLi4vaXRlbS9kaWFsb2dcIjtcbmltcG9ydCB7IGNsZWFyU2NyZWVuIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9ib2R5Q29udGVudFwiO1xuZXhwb3J0IGNvbnN0IG1lbnVJdGVtcyA9KGl0ZW0pPT57XG5cbiAgICAvL0RPTSBFbGVtZW50c1xuICAgIGNvbnN0IGNvbnRlbnRTcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvZHknKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIHN3aXRjaChpdGVtKXtcbiAgICAgICAgY2FzZSAnTWVhbHMnOlxuICAgICAgICAgICAgcmVuZGVyKGZvb2RfaXRlbXMpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnU2lkZXMnOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICBjYXNlICdEcmlua3MnOlxuICAgICAgICAgICAgcmVuZGVyKGRyaW5rX2l0ZW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKTtcbiAgICBjb25zdCBzZWxlY3RNZWFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQ+YnV0dG9uJyk7XG5cbiAgICBzZWxlY3RNZWFsQnRuLmZvckVhY2goYnV0dG9uID0+e1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGhhbmRsZVNlbGVjdEJ0bkV2ZW50cyk7XG4gICAgfSlcblxuICAgIC8vcmVuZGVyIGZvb2QgaXRlbXMgb24gc2NyZWVuIFxuICAgIGZ1bmN0aW9uIHJlbmRlcihpdGVtKXtcblxuICAgICAgICBjbGVhclNjcmVlbigpO1xuICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgaSA9MDsgaSA8IGl0ZW0ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGNyZWF0ZUZvb2RJdGVtKGksIGl0ZW1baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50U3BhY2UpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRm9vZEl0ZW0odmFsdWUsIGl0ZW0pe1xuICAgICAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGZvb2ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb25zdCBmb29kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgZm9vZFNlbGVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIFxuICAgICAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuICAgIFxuICAgICAgICBmb29kTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0TmFtZSgpO1xuICAgICAgICBwcmljZS50ZXh0Q29udGVudD0gYCQke2l0ZW0uZ2V0UHJpY2UoKX1gO1xuICAgICAgIFxuICAgICAgICBmb29kSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBgLi4vbWVkaWEvJHt2YWx1ZX0ucG5nYCk7XG4gICAgICAgIGZvb2RJbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGAke2l0ZW0uZ2V0TmFtZSgpfWApO1xuXG4gICAgICAgIGZvb2RTZWxlY3RCdG4udGV4dENvbnRlbnQ9J1NlbGVjdCBJdGVtJ1xuICAgICAgICAvL2Zvb2RTZWxlY3RCdG4ub25jbGljayA9IGNyZWF0ZURpYWxvZyhpdGVtKTtcbiAgICAgICAgLy9mb29kU2VsZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlRGlhbG9nKGl0ZW0pKTtcbiAgICBcbiAgICAgICAgaXRlbURpdi5kYXRhc2V0LmtleSA9dmFsdWU7XG4gICAgICAgIGl0ZW1EaXYuZGF0YXNldC50eXBlID0gaXRlbS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGZvb2RJbWFnZSk7XG4gICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoZm9vZE5hbWUpO1xuXG4gICAgICAgIGlmKGl0ZW0uY29uc3RydWN0b3IubmFtZSA9PT0gJ01lYWwnKXtcbiAgICAgICAgICAgIGNvbnN0IGZvb2RJbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgZm9vZEluZ3JlZGllbnRzLnRleHRDb250ZW50ID0gaXRlbS5nZXRJbmdyZWRpZW50cygpO1xuICAgICAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChmb29kSW5ncmVkaWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKHByaWNlKTtcbiAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChmb29kU2VsZWN0QnRuKVxuICAgIFxuICAgICAgICBjb250ZW50U3BhY2UuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG4gICAgIH1cblxuICAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3RCdG5FdmVudHMoZSl7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQua2V5O1xuICAgICAgICBjb25zdCB0eXBlPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQudHlwZTtcbiAgICAgICAgXG5cbiAgICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICAgICAgY2FzZSAnTWVhbCc6XG4gICAgICAgICAgICAgICAgZGlhbG9nTWVudShmb29kX2l0ZW1zW2l0ZW1dKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnRHJpbmtzJzpcbiAgICAgICAgICAgICAgICBkaWFsb2dNZW51KGRyaW5rX2l0ZW1zW2l0ZW1dKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSAnU2lkZXMnOlxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICB9XG5cblxuXG59XG5cblxuXG5cbiIsImltcG9ydCB7IG1lbnVUYWIgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3RhYkNvbnRlbnRcIjtcbmltcG9ydCB7IG1lbnVJdGVtcyB9IGZyb20gJy4uL3BhZ2VzL21lbnUnO1xuXG5cbmV4cG9ydCBjb25zdCB0YWIgPSgpPT57XG5cbiAgICBtZW51VGFiKCk7XG5cbiAgICBjb25zdCAgdGFiTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtbmF2Jyk7XG4gICAgY29uc3QgdGFiTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LW5hdi1idG4nKTtcbiAgXG5cblxuICAgIGZ1bmN0aW9uIHNlbGVjdChidXR0b24pe1xuICAgICAgICBpZihidXR0b24gPT09ICdNZW51Jyl7XG4gICAgICAgICAgICB0YWJOYXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgdGFiTWVudS5mb3JFYWNoKHRhYiA9PntcbiAgICAgICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRDaGVjaylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cblxuICAgIGZ1bmN0aW9uIGFkZENoZWNrKGUpe1xuICAgICAgICByZW1vdmVUYWJDaGVjaygpO1xuXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3RhYi1hY3RpdmUnKTtcbiAgICAgICAgY2hlY2tDaGFuZ2UoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrQ2hhbmdlKCl7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhYiA9IGdldEFjdGl2ZU1lbnVUYWIoKTtcblxuICAgICAgICBzd2l0Y2goYWN0aXZlVGFiKXtcbiAgICAgICAgICAgIGNhc2UgJ01lYWxzJzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVUYWIpXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1zKGFjdGl2ZVRhYik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1NpZGVzJzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVUYWIpXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1zKGFjdGl2ZVRhYik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlICdEcmlua3MnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVRhYilcbiAgICAgICAgICAgICAgICBtZW51SXRlbXMoYWN0aXZlVGFiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhYkNoZWNrKCl7XG4gICAgICAgIFxuXG4gICAgICAgIHRhYk1lbnUuZm9yRWFjaChidG4gPT57XG4gICAgICAgICAgICBpZihidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWItYWN0aXZlJykpe1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCd0YWItYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTmF2KCl7XG4gICAgICAgIFxuICAgICAgICB0YWJOYXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEFjdGl2ZU1lbnVUYWIoKXtcbiAgICAgICAgbGV0IHNlbGVjdGVkVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1hY3RpdmUnKTtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKHNlbGVjdGVkVGFiLnRleHRDb250ZW50KVxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRUYWIudGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIFxuICAgIHJldHVybnsgcmVtb3ZlTmF2LCBzZWxlY3QsIGdldEFjdGl2ZU1lbnVUYWJ9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL2FsZXJ0KCdoZWxsbycpO1xuXG5pbXBvcnQgbG9hZCBmcm9tICcuLi9mdW5jdGlvbnMvbG9hZCc7XG5pbXBvcnQgYm9keUNvbnRlbnQgZnJvbSAnLi4vZnVuY3Rpb25zL2JvZHlDb250ZW50JztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgbWVudUl0ZW1zIH0gZnJvbSAnLi4vcGFnZXMvbWVudSc7XG5pbXBvcnQgeyBtZW51VGFiLCByZW5kZXIgfSBmcm9tICcuLi9mdW5jdGlvbnMvdGFiQ29udGVudCc7XG5pbXBvcnQgeyBob21lIH0gZnJvbSAnLi4vcGFnZXMvaG9tZSc7XG5pbXBvcnQgeyBjb250YWN0TWVudSB9IGZyb20gJy4uL3BhZ2VzL2NvbnRhY3QnO1xuaW1wb3J0IHsgdGFiIH0gZnJvbSAnLi4vcGFnZXMvbWVudVRhYic7XG5cbnJlbmRlcigpO1xuYm9keUNvbnRlbnQoKVxuXG5jb25zdCB0YWJNZW51ID0gdGFiKCk7XG5cbmNvbnN0IG5hdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtYnV0dG9uJyk7XG5cblxuICAgIGNvbnN0IGFjdGl2ZUJ1dHRvbiA9IGdldEFjdGl2ZU1lbnVCdG4oKTtcbiAgICBhY3RpdmVCdXR0b249PT0gJ0hvbWUnID8gaG9tZSgpIDogMDtcblxuICAgIG5hdkJ1dHRvbi5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkQWN0aXZlKVxuICAgIH0pXG5cblxuZnVuY3Rpb24gYWRkQWN0aXZlKGUpe1xuICAgIHJlbW92ZUNoZWNrKCk7XG5cbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIGNoYW5nZVBhZ2UoKTtcblxufVxuXG5cbmZ1bmN0aW9uIGNoYW5nZVBhZ2UoKXtcbiAgICBjb25zdCBhY3RpdmVCdG4gPSBnZXRBY3RpdmVNZW51QnRuKCk7XG5cbiAgICBzd2l0Y2goYWN0aXZlQnRuKXtcbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICB0YWJNZW51LnJlbW92ZU5hdigpO1xuICAgICAgICAgICAgaG9tZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICBjYXNlICdNZW51JzpcbiAgICAgICAgICAgIG1lbnVJdGVtcyh0YWJNZW51LmdldEFjdGl2ZU1lbnVUYWIoKSk7XG4gICAgICAgICAgICB0YWJNZW51LnNlbGVjdChhY3RpdmVCdG4pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICBjYXNlICdDb250YWN0JzpcbiAgICAgICAgICAgIHRhYk1lbnUucmVtb3ZlTmF2KClcbiAgICAgICAgICAgIGNvbnRhY3RNZW51KClcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBnZXRBY3RpdmVNZW51QnRuKCl7XG4gICAgY29uc3QgYWN0aXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuICAgIHJldHVybiBhY3RpdmVCdG4udGV4dENvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoZWNrKCl7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuXG4gICAgaWYoYnV0dG9uKXtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9