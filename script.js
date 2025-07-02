 const displayInput = document.getElementById("displayBox");
      const buttons = document.querySelectorAll("button");
    //   console.log(buttons);

    let strings = "";
      const buttonArray = Array.from(buttons)
      buttonArray.forEach((button) => {
        button.addEventListener('click', (e) => {
      
    //    console.log(e.target.innerHTML);
       
        // displayInput.value = displayInput.value +  e.target.innerHTML

        if(e.target.innerHTML == "=")
        {
         strings = eval(strings);
         displayInput.value = strings;
         console.log(strings);
         

        }
        else if(e.target.innerHTML == "AC")
        {
            strings = "";
            displayInput.value = strings;
        }
        else if(e.target.innerHTML == "DEL")
        {
            // strings = strings.substring(0, strings.length -1);
            strings = strings.slice(0,  -1);
            displayInput.value = strings;
           
        }
        
        else
        {
            strings = strings + e.target.innerHTML;
            displayInput.value = strings;
        }
        
        console.log(strings);
        
        
        
            
       
            
            
            
        })
      })