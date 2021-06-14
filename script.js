//dragstart quando começa a arrastar
// drag enquanto está sendo arrastado
//dragend quando parar de arrastar

const cards= document.querySelectorAll('.card') // chamando todos os cards que achar na página
const dropzones = document.querySelectorAll('.dropzone')
cards.forEach(card => {// para cada um deles acontecem eventos
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
    card.addEventListener('ondrop',ondrop)

});

    function dragstart(){
        //this = card

       dropzones.forEach(dropzone => dropzone.classList.add('highligth')) //trocar a cor ao clicar
       this.classList.add('is-dragging')//arrastando estilo
    }
    function drag(){

     //  console.log('arrastando')
    }
    function dragend(){
        //this=card
        dropzones.forEach(dropzone => dropzone.classList.remove('highligth')) //remover a cor
        this.classList.remove('is-dragging')//removendo estilo
    }

    /* local onde vou soltar os cartoes */

    dropzones.forEach(dropzone => {// para cada um deles acontecem eventos
        dropzone.addEventListener('dragenter', dragenter)
        dropzone.addEventListener('dragover', dragover)
        dropzone.addEventListener('dragleave', dragleave)
        dropzone.addEventListener('ondrop',ondrop)

    
    });

    function dragenter(){

       
    }

    function dragover(){
        //this dropzone

        this.classList.add('over')// quando estiver em cima aplica efeito

        const cardBeingDragged = document.querySelector('.is-dragging')//pega o card  que está senedo arrrastado
        this.appendChild(cardBeingDragged)//aloca o card que estava sendo arrastado
    }
    

    function dragleave(){
        //this = dropzone
        this.classList.remove('over')// retirar o cursos retira o efeito
        
        
        

    }
    function dragenter(){

        console.log('dragenter')
    }

    function ondrop(){

        console.log('dropou')
    }

    