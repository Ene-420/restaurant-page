import { clearScreen } from "../functions/bodyContent";

export const contactMenu = ()=>{
    
    const contentBody = document.querySelector('.content-body');

    render();
    createSocialMedia();

    function render(){
        clearScreen();

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