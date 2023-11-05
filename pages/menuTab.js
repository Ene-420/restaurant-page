import { menuTab } from "../functions/tabContent";
import { menuItems } from '../pages/menu';


export const tab =()=>{

    menuTab();

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
                menuItems(activeTab);
                break;

            case 'Sides':
                console.log(activeTab)
                menuItems(activeTab);
                break;
                
            case 'Drinks':
                console.log(activeTab)
                menuItems(activeTab);
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