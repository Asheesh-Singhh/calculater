let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
let strings="";
let arr = Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            strings=eval(strings);
            input.value=strings;
        }
        else if(e.target.innerHTML=='AC'){
            strings="";
            input.value=strings;
        }
        else if(e.target.innerHTML=='DEL'){
            strings=strings.substring(0,strings.length-1);
            input.value=strings;
        }

        else{
            strings+=e.target.innerHTML;
            input.value=strings;
        }
    })
})