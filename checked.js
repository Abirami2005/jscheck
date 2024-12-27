let a=document.getElementById("subi");
let b=document.getElementById("visa");
let c=document.getElementById("ma");
let d=document.getElementById("pay");
let t=document.getElementById("s");
let k=document.getElementById("r");
let g=document.getElementById("de");
g.onclick=function(){
    if(a.checked){
      t.textContent="you have subscribed";
    }
    else{
        t.textContent="you have not subscribed";
    }
    if(b.checked){
        k.textContent="you payment mode visa";
    }
    else if(c.checked){
        k.textContent="you payment mode mastercard";
    }
    else if(d.checked){
        k.textContent="you payment mode paypal";
    }
    else{
        k.textContent="you have not selected any payment mode";
    }
}  