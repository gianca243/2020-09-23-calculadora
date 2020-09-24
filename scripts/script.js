let num1='';
let num2='';
let operacion='';
let resultado=0;
let realizado=false;
let punto=false;
let teclado = document.getElementById("teclado")
let historial = document.getElementById("historial")
teclado.addEventListener("keydown",()=>{
    
})
let calculadora = document.getElementById("caja")
caja.addEventListener("click",(e)=>{
  const temp = e.target.innerText;
  if(!Number.isNaN(parseFloat(temp)) && temp.length == 1 ){
    if(realizado==true){
      teclado.value=temp
      realizado=false
    }
    else{
      teclado.value=teclado.value+temp
    }
    
  }
  else{
    if(temp=="CE"){
      num1=""
      operacion=""
      teclado.value=""
    }
    else if(temp=="C"){
      teclado.value=""
    }
    else if(temp=="1/x"){
      teclado.value=1/(parseFloat(teclado.value))
      realizado=true;
    }
    else if(temp=="x^2"){
      teclado.value=(parseFloat(teclado.value))*(parseFloat(teclado.value))
      realizado=true;
    }
    else if(temp=="x^2"){
      teclado.value=Math.pow(parseFloat(teclado.value), 1 / 2);
      realizado=true;
    }
    else if(temp=="+/-"){
      teclado.value=parseFloat(teclado.value)*(-1);
    }
    else if(temp=="."){
      teclado.value=teclado.value+".";
    }
    else if(temp=="<-"){
      teclado.value=(teclado.value).slice(0,(teclado.value).length-1)
    }
    else if(temp=="="){
      if(num1==""){
        num1="0"
      }
      switch (operacion) {
        case '/':
            resultado=(parseFloat(num1))/(parseFloat(teclado.value));
            historial.innerHTML += ` <h5> ${resultado} = ${num1} / ${teclado.value} </h5> `
            teclado.value=resultado;
            realizado=true;
          break;
          case 'X':
            resultado=(parseFloat(num1))*(parseFloat(teclado.value));
            historial.innerHTML += ` <h5> ${resultado} = ${num1} * ${teclado.value} </h5> `
            teclado.value=resultado;
            realizado=true;
          break;
          case '+':
            resultado=(parseFloat(num1))+(parseFloat(teclado.value));
            historial.innerHTML += ` <h5> ${resultado} = ${num1} + ${teclado.value} </h5> `
            teclado.value=resultado;
            realizado=true;
            
          break;
          case '-':
            resultado=(parseFloat(num1))-(parseFloat(teclado.value));
            historial.innerHTML += ` <h5> ${resultado} = ${num1} - ${teclado.value} </h5> `
            teclado.value=resultado;
            realizado=true;
          break;
  
        default:

          break;
      }
      operacion="";
      num1=resultado
    }
    else{
      if(operacion==""){
        num1=teclado.value;
        realizado=true
        operacion=temp;
      }
      else{
        
          switch (operacion) {
            case '/':
                resultado=(parseFloat(num1))/(parseFloat(teclado.value));
                historial.innerHTML += ` <h5> ${resultado} = ${num1} / ${teclado.value} </h5> `
                teclado.value=resultado;
                realizado=true;
              break;
              case 'X':
                resultado=(parseFloat(num1))*(parseFloat(teclado.value));
                historial.innerHTML += ` <h5> ${resultado} = ${num1} * ${teclado.value} </h5> `
                teclado.value=resultado;
                realizado=true;
              break;
              case '+':
                resultado=(parseFloat(num1))+(parseFloat(teclado.value));
                historial.innerHTML += ` <h5> ${resultado} = ${num1} + ${teclado.value} </h5> `
                teclado.value=resultado;
                realizado=true;
                
              break;
              case '-':
                resultado=(parseFloat(num1))-(parseFloat(teclado.value));
                historial.innerHTML += ` <h5> ${resultado} = ${num1} - ${teclado.value} </h5> `
                teclado.value=resultado;
                realizado=true;
              break;
      
            default:
    
              break;
          }
          operacion=temp;
          num1=resultado
      }
    }
  }

        /* if(Number.isNaN(parseFloat(e.target.innerText))){
            if(e.target.innerText=='='){
                if(Number.isNaN(num1) || num1==''){
                    num1='0';
                }
                switch (operacion) {
                    case '+':
                        resultado=parseFloat(num1)+parseFloat(num2);
                        swal("Buen trabajo", num1+" + "+num2+" = " +resultado, "success");
                        break;
                    case '-':
                        resultado=parseFloat(num1)-parseFloat(num2);
                        swal("Buen trabajo", num1+" - "+num2+" =" +resultado, "success");
                        break;
                    case 'x':
                        resultado=parseFloat(num1)*parseFloat(num2);
                        swal("Buen trabajo", num1+" * "+num2+" = " +resultado, "success");
                        break;
                    case '/':
                        resultado=parseFloat(num1)/parseFloat(num2);
                        if(Number.isNaN(resultado) || !Number.isFinite(resultado)){
                            swal("Error!!", num1+" / "+num2+" = Math Error ("+resultado+")", "error");
                            resultado="Math Error"
                        }
                        else{
                            swal("Buen trabajo", num1+" / "+num2+" = " +resultado, "success");
                        }
                        break;
                    default:
                        break;
                }
                operacion=''
                teclado.innerHTML=resultado;
                if(resultado=="Math Error"){
                    num1=''
                }
                else{
                    num1=String(resultado);
                }
                num2='';
                realizado=true;
            }
            else if(e.target.innerText=='AC'){
                teclado.innerHTML = '0'
                num1='';
                num2='';
            }
            else if(e.target.innerText=='.'){
                if(!punto){
                    if(operacion==''){
                        teclado.innerHTML = num1+e.target.innerText;
                        num1=num1+e.target.innerText;
                        punto=true;
                    }
                    else{
                        teclado.innerHTML = num2+e.target.innerText;
                        num2=num2+e.target.innerText;
                        punto=true;
                    }
                }
            }
            else{
                operacion= temp;
                realizado=false;
                punto=false;
            }
        }
        else{
            if(!realizado){
                if(operacion==''){
                    teclado.innerHTML = num1+e.target.innerText;
                    num1=num1+e.target.innerText;
                }
                else{
                    teclado.innerHTML = num2+e.target.innerText;
                    num2=num2+e.target.innerText;
                }
            }
            else{
                if(operacion==''){
                    teclado.innerHTML = e.target.innerText;
                    num1=e.target.innerText;
                    realizado=false;
                }
            }
        } */
})

/* let nums= false

let teclado = document.getElementById("teclado")
let titulo = document.getElementById("titulo")
let retro = document.getElementById("customSwitch1")
let oscuro = document.getElementById("customSwitch2")
let fondo = document.body;
let cajas1= document.getElementById('caja').getElementsByClassName("cajita")
 
let calculadora = document.getElementById("caja")

if (!localStorage.getItem("tema")){
  localStorage.setItem("tema","white")
}
else{
  const tema = localStorage.getItem("tema")
  if(tema=="retro"){
    fondo.classList.add("bg-warning")
    fondo.classList.remove("bg-white")
    fondo.classList.remove("bg-dark")
    for(let i=0; i <cajas1.length; i++){
      cajas1[i].classList.add("bg-info")
      cajas1[i].classList.remove("bg-dark")
      cajas1[i].classList.remove("bg-white")
    }
    retro.checked=true
    localStorage.setItem("tema","retro")
  }else if(tema=="dark"){
    fondo.classList.add("bg-warning")
    fondo.classList.remove("bg-white")
    fondo.classList.add("bg-dark")
    for(let i=0; i <cajas1.length; i++){
      cajas1[i].classList.remove("bg-info")
      cajas1[i].classList.remove("bg-dark")
      cajas1[i].classList.add("bg-white")
    }
    oscuro.checked = true
    localStorage.setItem("tema","dark")
  }
}



caja.addEventListener("click",(e)=>{
  let temp = e.target.innerText;
  if (temp== "RES"){
    teclado.innerHTML=""
  }
  else if(temp=="CAL"){
    window.open('https://juans1lva.github.io/Calculadora/', '_self');
  }
  else if(temp.length == 3){
    if(nums==true){
      temp=temp.slice(2);
      const long= (teclado.innerHTML+temp).length
      teclado.innerHTML=teclado.innerHTML+temp;
      if(long==10){
        if((teclado.innerHTML).includes('1234567890')){
          swal("Buen trabajo", "Reto de numeros superado", "success");
          nums=false;
          teclado.innerHTML=""
          titulo.innerHTML="Reto Ansalo (Nivel I: Letras)"
        }
        else{
          let mensaje = ""
          if(!(teclado.innerHTML).includes('0')){
            mensaje=mensaje+" 0 "
          }
          if(!(teclado.innerHTML).includes('1')){
            mensaje=mensaje+" 1 "
          }
          if(!(teclado.innerHTML).includes('2')){
            mensaje=mensaje+" 2 "
          }
          if(!(teclado.innerHTML).includes('3')){
            mensaje=mensaje+" 3 "
          }
          if(!(teclado.innerHTML).includes('4')){
            mensaje=mensaje+" 4 "
          }
          if(!(teclado.innerHTML).includes('5')){
            mensaje=mensaje+" 5 "
          }
          if(!(teclado.innerHTML).includes('6')){
            mensaje=mensaje+" 6 "
          }
          if(!(teclado.innerHTML).includes('7')){
            mensaje=mensaje+" 7 "
          }
          if(!(teclado.innerHTML).includes('8')){
            mensaje=mensaje+" 8 "
          }
          if(!(teclado.innerHTML).includes('9')){
            mensaje=mensaje+" 9 "
          }
          if(mensaje.length!=0){
            mensaje= ", te faltaron los siguientes numeros: "+mensaje;
          }
          swal("Oh no! :C", "Tus numeros parecen estar en desorden" + mensaje, "error");
          teclado.innerHTML=""
        }
      }
    }else{
      temp=temp.slice(0,-2);
      const long= (teclado.innerHTML+temp).length
      teclado.innerHTML=teclado.innerHTML+temp;
      if(long==10){
        if((teclado.innerHTML).includes('ABCDEFGHIJ')){
          swal("Buen trabajo", "Reto de letras superado", "success");
          nums=true;
          teclado.innerHTML=""
          titulo.innerHTML="Reto Ansalo (Nivel II: Números)"
        }
        else{
          let mensaje = ""
          if(!(teclado.innerHTML).includes('A')){
            mensaje=mensaje+" A "
          }
          if(!(teclado.innerHTML).includes('B')){
            mensaje=mensaje+" B "
          }
          if(!(teclado.innerHTML).includes('C')){
            mensaje=mensaje+" C "
          }
          if(!(teclado.innerHTML).includes('D')){
            mensaje=mensaje+" D "
          }
          if(!(teclado.innerHTML).includes('E')){
            mensaje=mensaje+" E "
          }
          if(!(teclado.innerHTML).includes('F')){
            mensaje=mensaje+" F "
          }
          if(!(teclado.innerHTML).includes('G')){
            mensaje=mensaje+" G "
          }
          if(!(teclado.innerHTML).includes('H')){
            mensaje=mensaje+" H "
          }
          if(!(teclado.innerHTML).includes('I')){
            mensaje=mensaje+" I "
          }
          if(!(teclado.innerHTML).includes('J')){
            mensaje=mensaje+" J "
          }
          if(mensaje.length!=0){
            mensaje= ", te faltaron las siguientes letras: "+mensaje;
          }
          swal("Oh no! :C", "Tus letras parecen estar en desorden" + mensaje, "error");
          teclado.innerHTML=""
        }
      }
    }
  }
})
 */