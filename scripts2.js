
import  {perso as per} from './data/datos.js'
//const listTasks = document.querySelector('.list-tasks p');
//const message = document.querySelector('.list-tasks');
let img2=document.getElementById('img2') 
let par = document.getElementById('parrafo'); 
let coc = document.querySelector('.contenedor'); 
let coc2 = document.querySelector('.contenedor2');      
const img =document.getElementById('img')
let atras =document.querySelector('.atras')
let salir =document.querySelector('.salir')
let next =document.querySelector('.adelante')
let boton=document.querySelector('.botond')
let data=[]
let contItem =0;
window.addEventListener("DOMContentLoaded", ()=>{
verMunecos(contItem)
});

//ver muñecos paso por paramentro el contItem

function verMunecos(person)
{  //desectruct solo el id , de hay  extraigo la demas data
    let item = per[person]
    img.src = item.img
     boton.textContent=item.name
    // par.textContent=item.descrip
     //console.log("vergacion"+par.textContent)
     
 //   console.log(boton.id)
}

next.addEventListener('click', ()=>{
        

        
   // let    n=per.length-1
   contItem++;
       if(contItem>per.length -1)
        {
        
              console.log("hola1"+contItem)
              console.log("holavector"+per.length)      
        contItem=0;   
        next.disabled=true 
        
        //img.style.background="white"
        next.style="color:red" 
        atras.style="color:green"  
     
        }
        //contItem=perso.length;
        verMunecos(contItem)
        atras.disabled=false         
        
        actualizarcontador(contItem) 
       
    
})
atras.addEventListener('click',()=>{

    contItem--;
     
    if(contItem<0){    
     
       next.style="color:green"  
        //next.disabled=false   
        contItem=per.length-1 ;
    }
       verMunecos(contItem)
                 if(contItem==0){
                    atras.style="color:red"  
                    atras.disabled=true  
                    next.disabled=false
                 }

                 actualizarcontador(contItem) 
})


boton.addEventListener('click', () => {
   
   
  
   let data=[]
    coc.style.display='none'; 
    salir.style.display='none'
    let ac=actualizarcontador(contItem)
            let p = per.find( (e)=> e.id ==ac );                        
                        
                  data=p
              localStorage.setItem('per', JSON.stringify(data));
               const li = document.createElement('contenedor');
             img2.innerHTML = ` <p id="parrafo"></p><img src="${p.img}"></img>${p.descrip}</p>`;
            par.innerHTML=`<p>${p.descrip}</p>`
            console.log("chequeando"+p.descrip)
             // listTasks.appendChild(li);
            
             
       });
       salir.addEventListener('click', ()=>{
         coc.style.display='true'; 
         coc2.style.display='none'; 
         
        
            
         
      })
               

     
function actualizarcontador(contador){
    console.log("iterando"+contador)
       return contador
}
function Guardartodolstore(per){
let myarray=JSOM.parse(localStorege.getItem("pepe"))
myarray.push(per)
let  perarrayjsom =JSOM.stringify(myarray)
localStorage.setItem('pepe',perarray)

}

// function showContent() {
//     element = document.getElementById("content");
//     check = document.getElementById("check");
//     if (check.checked) {
//         element.style.display='block';
//     }
//     else {
//         element.style.display='none';
//     }
// }
