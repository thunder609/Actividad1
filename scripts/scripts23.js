
import  {perso as per} from './data/datos.js'
const listTasks = document.querySelector('.list-tasks p');
const message = document.querySelector('.list-tasks');
let template=document.getElementById('template-card') 
let par = document.getElementById('parrafo'); 
let coc = document.querySelector('.contenedor');     
let img =document.getElementById('img')
let atras =document.querySelector('.atras')
let next =document.querySelector('.adelante')
let boton=document.querySelector('.botond')
let data=[]
let contItem =0;
window.addEventListener("DOMContentLoaded", ()=>{
verMunecos(contItem)
});

//ver muñecos

function verMunecos(person)
{
    let item = per[person]
    img.src = item.img
     boton.textContent=item.name
 //   console.log(boton.id)
}
next.addEventListener('click', ()=>{
        
       
        contItem++;
        if(contItem>per.length -1)
        {
                 
        contItem=0;   
        next.disabled=true 
        //next.getElementsByClassName(".adelante").style="color:red"
     
        next.style="color:red"  
       atras.style="color:green"  
     
        }
        console.log("Hello"+contItem)
        verMunecos(contItem)
              
                         
        actualizarcontador(contItem) 
       
    
})
atras.addEventListener('click',()=>{
    contItem--;
  
    if(contItem<0){    
     
       next.style="color:green"  
        //next.disabled=false   
        contItem=per.length -1;
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
   
   
  
   
    coc.style.display='none'; 
    let ac=actualizarcontador(contItem)
             const p = per.find( (e)=> e.id ==ac );
 
              localStorage.setItem('per', JSON.stringify(p));
               const li = document.createElement('contenedor');
              li.innerHTML = `${p.id} <p task-id="${p.id}"><img src="${p.name}"></img></p>`;
   
               listTasks.appendChild(li);
               beark;
            
             
       });
               

     
function actualizarcontador(contador){
    console.log("cabr"+contador)
       return contador
}

function showContent() {
    element = document.getElementById("content");
    check = document.getElementById("check");
    if (check.checked) {
        element.style.display='block';
    }
    else {
        element.style.display='none';
    }
}
