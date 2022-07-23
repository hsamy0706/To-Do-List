/*    font style    */
  let bt1 =document.querySelector('#bt_1'); 
    let bt2 =document.querySelector('#bt_2'); 
  let bt3 =document.querySelector('#bt_3');
  let bt4 =document.querySelector('#bt_4');
    let bt5 =document.querySelector('#bt_5');
    let bt6 =document.querySelector('#bt_6');
    let bt7 =document.querySelector('#bt_7');
    let bt8 =document.querySelector('#bt_8');
     let bt9 =document.querySelector('#bt_9');
     let bt10 =document.querySelector('#bt_10');
  
  bt1.addEventListener('click', () => {
    document.body.style.fontFamily = 'Dancing Script';  
  }); 
      
  bt2.addEventListener('click', () => {
    document.body.style.fontFamily = 'Grenze Gotisch';  
  }); 
      
  bt3.addEventListener('click', () => {
    document.body.style.fontFamily = 'Indie Flower';  
  }); 
      
  bt4.addEventListener('click', () => {
    document.body.style.fontFamily = 'Raleway'; 
  });
    bt5.addEventListener('click', () => {
    document.body.style.fontFamily = 'cursive'; 
  });
    bt6.addEventListener('click', () => {
    document.body.style.fontFamily = 'sans-serif';  
  });
    bt7.addEventListener('click', () => {
    document.body.style.fontFamily = 'fantasy'; 
  });
                bt8.addEventListener('click', () => {
    document.body.style.fontFamily = 'monospace'; 
  });
                bt9.addEventListener('click', () => {
    document.body.style.fontFamily = 'serif'; 
  });
                bt10.addEventListener('click', () => {
    document.body.style.fontFamily = 'inherit'; 
  });
     /*    font color    */

       let bt11 =document.querySelector('#bt11'); 
    let bt12 =document.querySelector('#bt12'); 
  let bt13 =document.querySelector('#bt13');
  let bt14 =document.querySelector('#bt14');
    let bt15 =document.querySelector('#bt15');
    let bt16 =document.querySelector('#bt16');
    let bt17 =document.querySelector('#bt17');
    let bt18 =document.querySelector('#bt18');
    let bt19 =document.querySelector('#bt19');
    let bt20 =document.querySelector('#bt20');
  
  bt11.addEventListener('click', () => {
    document.body.style.color = 'red';  
  }); 
      
  bt12.addEventListener('click', () => {
    document.body.style.color = 'aqua'; 
  }); 
      
  bt13.addEventListener('click', () => {
    document.body.style.color = 'black';  
  }); 
      
  bt14.addEventListener('click', () => {
    document.body.style.color = 'blue'; 
  });
    bt15.addEventListener('click', () => {
    document.body.style.color = 'silver'; 
  });
    bt16.addEventListener('click', () => {
    document.body.style.color = 'pink'; 
  });
    bt17.addEventListener('click', () => {
    document.body.style.color = 'navy'; 
  });
                bt18.addEventListener('click', () => {
    document.body.style.color = 'darkgray'; 
  });
                bt19.addEventListener('click', () => {
    document.body.style.color = 'teal'; 
  });
                bt20.addEventListener('click', () => {
    document.body.style.color = 'fuchsia';  
  });
            
  /*  back-ground color */
   function changeColor(color)
  {
  document.bgColor=color;
  }
  function Save()
  {
    var transFont=document.body.style.fontFamily;
     var transCol=document.bgColor;
     var  transStyle= document.body.style.color;
     
     localStorage.setItem("Fon",transFont);
     localStorage.setItem("Col",transCol);
     localStorage.setItem("Sty",transStyle);
  }