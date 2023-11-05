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

export default render;