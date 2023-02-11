let list = document.querySelector('header ul');
let burgerMenu =  document.querySelectorAll('header img.small')[0];
let closeMenu =  document.querySelectorAll('header img.small')[1];
// let content = document.querySelector('header + div');

burgerMenu.addEventListener('click' , ()=>{
    list.style.display = 'flex';
    
        burgerMenu.classList.remove('active') 
        setTimeout(()=>{
            burgerMenu.style.display="none"
            closeMenu.classList.add('active')    
            list.style.opacity = 1;
            closeMenu.style.opacity = 1;
        } , 100)   
        
    })
    closeMenu.addEventListener('click' , ()=>{
        closeMenu.style.opacity = 0; 
        list.style.opacity = 0;
        setTimeout(()=>{
            burgerMenu.classList.add('active')    
            closeMenu.classList.remove('active') 
            
            list.style.display ='none';
            burgerMenu.style.display="block"
    } , 400)   
})
