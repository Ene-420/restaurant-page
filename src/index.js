//alert('hello');

import load from '../functions/load';
import bodyContent from '../functions/bodyContent';
import './style.css';
import { menuItems } from '../pages/menu';
import { menuTab, render } from '../functions/tabContent';
import { home } from '../pages/home';
import { contactMenu } from '../pages/contact';
import { tab } from '../pages/menuTab';

render();
bodyContent()

const tabMenu = tab();

const navButton = document.querySelectorAll('.nav-button');


    const activeButton = getActiveMenuBtn();
    activeButton=== 'Home' ? home() : 0;

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
            home();
            break;
        
        case 'Menu':
            menuItems(tabMenu.getActiveMenuTab());
            tabMenu.select(activeBtn);
            break;
        
        case 'Contact':
            tabMenu.removeNav()
            contactMenu()
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

