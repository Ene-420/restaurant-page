import xMark from '../media/circle-xmark-regular.svg';
export const dialogMenu =(item)=>{


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

        closeImg.setAttribute('src', xMark)
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


