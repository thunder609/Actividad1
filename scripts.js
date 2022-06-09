var imagenes =['Nuevo/arquero.png','Nuevo/bruja.png','Nuevo/caballero.png','Nuevo/dragon.png']

 conta=0;

function carrusel(contenedor){
    contenedor.addEventListener('click', e => {           
                 let atras =contenedor.querySelector('.atras'),
                     adelante =contenedor.querySelector('.adelante'),
                     img=contenedor.querySelector('img'),
                     boton=contenedor.querySelector('.botond'),
                     eti=e.target
               console.log(eti)
                if (eti==atras){
                     if(conta>0){
                     img.src=imagenes[conta-1]
                     conta--
                       console.log(texto[conta])
                  
                }
                else{
                    img.src=imagenes[imagenes.length -1]
                    conta=imagenes.length;
                    if (conta==imagenes.length)
                    atras.disable=true
                
                }
            }
                else if(eti == adelante){
                    if (conta<imagenes.length - 1){
                      img.src=imagenes[conta + 1]
                        conta++
                     
                   }
                   else{
                       img.src=imagenes[0]
                       conta=0
                   
                   }
                }
                
               
            
                          
              

    });
}
    document.addEventListener("DOMContentLoaded",()=>{
        let contenedor = document.querySelector('.contenedor')   
        carrusel(contenedor);
    })



