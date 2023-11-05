export const dialogMenu =(item)=>{


    const dialogArea = document.querySelector('.content-body');
    const dialog = document.querySelector('dialog');
    const form = document.querySelector('form');
    const formDiv  = document.querySelectorAll('form>div');
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

        if(formDiv.length >0){
            formDiv.forEach(div =>{
                div.remove()
                //dialog.re
            })
        }
        //console.log(formDiv);
       
        if(item.getAdditionalServings() || item.getOptionalServings()){
            const formLabels =  document.querySelectorAll('form>label');

            for(let i = 0; i< formLabels.length; i++){
                if(i ===0){
                    item.getAdditionalServings().forEach(name =>{
                        formLabels[i].after(createLabels(name));
                    })
                }

                else{
                    item.getOptionalServings().forEach(name =>{
                        formLabels[i].after(createLabels(name));
                    })
                }
            }
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
            form.appendChild(label);
            for(let i=0; i< item.getAdditionalServings().length; i++){
                form.appendChild(createLabels(item.getAdditionalServings()[i]))
            }
            if(item.getOptionalServings()){
                const label = document.createElement('label');
                label.textContent = 'Select Complementary Side';
                form.appendChild(label);
                for(let i=0; i< item.getOptionalServings().length; i++){
                    form.appendChild(createLabels(item.getOptionalServings()[i]));
                }                
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

    function createLabels(item){
        const div = document.createElement('div');
        const itemSelection = document.createElement('input');
        const itemQuantity = document.createElement('input');
        const itemLabel = document.createElement('label'); 

        itemQuantity.setAttribute('type', 'number');
        itemSelection.setAttribute('type', 'checkbox');
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