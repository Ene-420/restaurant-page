export const dialogMenu =(item)=>{


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