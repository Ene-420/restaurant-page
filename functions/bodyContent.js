 const bodyContent = () =>{
    const content = document.querySelector('#content');

    const contentBody = document.createElement('div');
    contentBody.classList.add('content-body');
    
    // const bodyText = document.createElement('p');
    // bodyText.textContent= 'Lorem ispus ';

    // contentBody.appendChild(bodyText);
    content.appendChild(contentBody)
}

export const clearScreen =()=>{

    //const content = document.querySelector('#content');
    const bodyItems = document.querySelector('.content-body');
        if(bodyItems.children.length >0){
            Array.from(bodyItems.children).forEach(node =>{
                bodyItems.removeChild(node);
            })
        }
}

export default bodyContent;