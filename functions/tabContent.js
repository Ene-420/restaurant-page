import logo from '../media/logo.jpg'
export const render = () =>{
    const array =['Home', 'Menu', 'Contact']
    const head = document.querySelector('#head');
    const navDiv = document.createElement('nav');
    const navList = document.createElement('ul');
    const div = document.createElement('div');
    const logoImg = document.createElement('img');
    const logoText = document.createElement('p');

    logoText.textContent = 'Belle Full';
    logoImg.setAttribute('src', logo);
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

export const menuTab=() =>{

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