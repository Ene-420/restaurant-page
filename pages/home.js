import { clearScreen } from "../functions/bodyContent";

export const home =()=>{
    const contentBody = document.querySelector('.content-body');
    render();

    function render(){
        clearScreen();

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