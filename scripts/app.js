function init(){

    const grid = document.querySelector('.grid')    
    const winnerSpan = document.querySelector('#winner')
    const resetBtn = document.querySelector('#reset')
    const sound = document.querySelector('#sound')

    const width = 3
    const gridCellCount = width * width
   
    let cells = []
    let playerChoices = []
    let PlayerTurn = true
    let lastAddedElement 
    let space = []
    let count = 0 
    let xScore = 0
    let oScore = 0
    let thereIsWinner = false






    function creatGrid(){
        // this function to creat the grid, it will creat each cell by loop then will push into an array then .appendChild() to display them 
        for(let i = 1; i <= gridCellCount ; i++){
            const cell = document.createElement('div')
            cell.setAttribute('id',`e${i}`)
            cells.push(cell)
            grid.appendChild(cell)
        

        }
    }
 
    // this function will determine the borders for group of cells, so it will be eazy in term of styling in a group instad of style one by one
    function DetermineBorders(){
        for(let i = 1; i <= gridCellCount ; i++){
           
            let elem = cells[i-1]
            let id = elem.id
            if(id=='e1' || id=='e2' || id=='e4' || id=='e5'){
                elem.setAttribute('class','bottom-right blank')
            } else if(id=='e3' || id=='e6'){
                elem.setAttribute('class','bottom blank')
            } else if(id=='e7' || id=='e8'){
                elem.setAttribute('class','right blank')
            } else{
                elem.setAttribute('class','blank')
            }

         } 
    }
    
   

    function go(event){ 
   
        
              if( PlayerTurn === true && thereIsWinner == false){
                           
                let id= event.target.id
             
                if( event.target.classList.contains('blank')){
                    event.target.classList.add('X')
                    event.target.classList.remove('blank')
                    sound.src = 'sounds/x.wav'
                    sound.play()      


                    let id_number = parseInt(id.split('')[1])
                    
                    //I will try to push the div in an araay to help the computer choice , so the computer will check the array and if its blank then decide

                    playerChoices[id_number-1] = 'X' //pushing here 
                    lastAddedElement = id_number-1                 

                    PlayerTurn = false
                    count ++  

                 whoeWins()
                  
                    
                    computerTurn()
            
                }
            }
                   


    }


    
    function computerTurn(){
          //  if(count <= 4){ 
                
                //console.log('here')
                if(thereIsWinner == false){
        
    
        
                if(lastAddedElement === 0){
                
                    // if(playerChoices[1]==='X'){ }

                    

                    space = [1,2,4,8,3,6]
                    let oPostion = space[Math.floor(Math.random()*space.length)];
                    //console.log(oPostion)
                    //console.log(playerChoices[oPostion]) // will be undefined
                    if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                        playerChoices[oPostion] = 'O'
                        cells[oPostion].classList.add('O')
                        cells[oPostion].classList.remove('blank')

                        let index = space.indexOf(oPostion)
                        space.splice(index, 1)         
                        //console.log(space)

                        PlayerTurn = true
                        // continueToX = true
                        // continueToO = false
                        // whoeWins()
                        whoeWins()
                        cells.forEach(cell => {
                            cell.addEventListener('click', go)
                        })

                    
                
                    }else{
                    computerTurn()
                    }
                    

                }else if(lastAddedElement === 1){

                    space = [0,2,4,7]
                    let oPostion = space[Math.floor(Math.random()*space.length)];
                    //console.log(oPostion)
                    //console.log(playerChoices[oPostion]) // will be undefined
                    if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                        playerChoices[oPostion] = 'O'
                        cells[oPostion].classList.add('O')
                        cells[oPostion].classList.remove('blank')

                        let index = space.indexOf(oPostion)
                        space.splice(index, 1)         
                        //console.log(space)

                        PlayerTurn = true
                        whoeWins()
                        cells.forEach(cell => {
                            cell.addEventListener('click', go)
                        })

                    
                
                    }else{
                    computerTurn()
                    }

                }else if(lastAddedElement === 2){
                    space = [0,1,4,6,5,8]
                    let oPostion = space[Math.floor(Math.random()*space.length)];
                    //console.log(oPostion)
                    //console.log(playerChoices[oPostion]) // will be undefined
                    if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                        playerChoices[oPostion] = 'O'
                        cells[oPostion].classList.add('O')
                        cells[oPostion].classList.remove('blank')

                        let index = space.indexOf(oPostion)
                        space.splice(index, 1)         
                        //console.log(space)

                        PlayerTurn = true
                        whoeWins()
                        cells.forEach(cell => {
                            cell.addEventListener('click', go)
                        })

                    
                
                    }else{
                    computerTurn()
                    }
                }else if(lastAddedElement === 3){
                    space = [4,5,0,6]
                    let oPostion = space[Math.floor(Math.random()*space.length)];
                    //console.log(oPostion)
                    //console.log(playerChoices[oPostion]) // will be undefined
                    if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                        playerChoices[oPostion] = 'O'
                        cells[oPostion].classList.add('O')
                        cells[oPostion].classList.remove('blank')

                        let index = space.indexOf(oPostion)
                        space.splice(index, 1)         
                        //console.log(space)

                        PlayerTurn = true
                        whoeWins()
                        cells.forEach(cell => {
                            cell.addEventListener('click', go)
                        })

                    
                
                    }else{
                    computerTurn()
                    }
                }else if(lastAddedElement === 4){
                    space = [3,5,2,6,0,8,1,7]
                    let oPostion = space[Math.floor(Math.random()*space.length)];
                    //console.log(oPostion)
                    //console.log(playerChoices[oPostion]) // will be undefined
                    if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                        playerChoices[oPostion] = 'O'
                        cells[oPostion].classList.add('O')
                        cells[oPostion].classList.remove('blank')

                        let index = space.indexOf(oPostion)
                        space.splice(index, 1)         
                        //console.log(space)

                        PlayerTurn = true
                        whoeWins()
                        cells.forEach(cell => {
                            cell.addEventListener('click', go)
                        })

                    
                
                    }else{
                    computerTurn()
                    }
                }else if(lastAddedElement === 5){
                    space = [3,4,2,8]
                    let oPostion = space[Math.floor(Math.random()*space.length)];
                    //console.log(oPostion)
                    //console.log(playerChoices[oPostion]) // will be undefined
                    if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                        playerChoices[oPostion] = 'O'
                        cells[oPostion].classList.add('O')
                        cells[oPostion].classList.remove('blank')

                        let index = space.indexOf(oPostion)
                        space.splice(index, 1)         
                        //console.log(space)

                        PlayerTurn = true
                        whoeWins()
                        cells.forEach(cell => {
                            cell.addEventListener('click', go)
                        })

                    
                
                    }else{
                    computerTurn()
                    }
                }else if(lastAddedElement === 6){
                    space = [7,8,0,3,2,4]
                    let oPostion = space[Math.floor(Math.random()*space.length)];
                    //console.log(oPostion)
                    //console.log(playerChoices[oPostion]) // will be undefined
                    if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                        playerChoices[oPostion] = 'O'
                        cells[oPostion].classList.add('O')
                        cells[oPostion].classList.remove('blank')

                        let index = space.indexOf(oPostion)
                        space.splice(index, 1)         
                        //console.log(space)

                        PlayerTurn = true
                        whoeWins()
                        cells.forEach(cell => {
                            cell.addEventListener('click', go)
                        })

                    
                
                    }else{
                        computerTurn()
                    }
                }else if(lastAddedElement === 7){
                    space = [6,8,1,4]
                    let oPostion = space[Math.floor(Math.random()*space.length)];
                    //console.log(oPostion)
                    //console.log(playerChoices[oPostion]) // will be undefined
                    if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                        playerChoices[oPostion] = 'O'
                        cells[oPostion].classList.add('O')
                        cells[oPostion].classList.remove('blank')

                        let index = space.indexOf(oPostion)
                        space.splice(index, 1)         
                        //console.log(space)

                        PlayerTurn = true
                        whoeWins()
                        cells.forEach(cell => {
                            cell.addEventListener('click', go)
                        })

                    
                
                    }else{
                     computerTurn()
                    }
                }else if(lastAddedElement === 8){
                    space = [6,7,2,5,0,4]
                    let oPostion = space[Math.floor(Math.random()*space.length)];
                    //console.log(oPostion)
                    //console.log(playerChoices[oPostion]) // will be undefined
                    if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                        playerChoices[oPostion] = 'O'
                        cells[oPostion].classList.add('O')
                        cells[oPostion].classList.remove('blank')

                        let index = space.indexOf(oPostion)
                        space.splice(index, 1)         
                        //console.log(space)

                        PlayerTurn = true
                        whoeWins()
                        cells.forEach(cell => {
                            cell.addEventListener('click', go)
                        })

                    
                
                    }else{
                        computerTurn()
                    }
                }
            }
      
    }

    


    function whoeWins(){
  

        if(    (playerChoices[0]==='X'  && playerChoices[1]==='X' && playerChoices[2]==='X') 
            || (playerChoices[3]==='X'  && playerChoices[4]==='X' && playerChoices[5]==='X') 
            || (playerChoices[6]==='X'  && playerChoices[7]==='X' && playerChoices[8]==='X') 
            || (playerChoices[0]==='X'  && playerChoices[3]==='X' && playerChoices[6]==='X') 
            || (playerChoices[1]==='X'  && playerChoices[4]==='X' && playerChoices[7]==='X') 
            || (playerChoices[2]==='X'  && playerChoices[5]==='X' && playerChoices[8]==='X') 
            || (playerChoices[0]==='X'  && playerChoices[4]==='X' && playerChoices[8]==='X') 
            || (playerChoices[2]==='X'  && playerChoices[4]==='X' && playerChoices[6]==='X') 
          ){                 
            
             xScore = xScore+1 
             winnerSpan.textContent = ' Player X wins ' 
             sound.src = 'sounds/xwins.wav'
             sound.play()  
             PlayerTurn = false
             thereIsWinner = true
             cells.forEach(cell => {
                console.log('removing event listener')
                cell.removeEventListener('click', go)
            })             


        } 
        
      
        if(  
               (playerChoices[0]==='O'  && playerChoices[1]==='O' && playerChoices[2]==='O') 
            || (playerChoices[3]==='O'  && playerChoices[4]==='O' && playerChoices[5]==='O') 
            || (playerChoices[6]==='O'  && playerChoices[7]==='O' && playerChoices[8]==='O')
            || (playerChoices[0]==='O'  && playerChoices[3]==='O' && playerChoices[6]==='O') 
            || (playerChoices[1]==='O'  && playerChoices[4]==='O' && playerChoices[7]==='O') 
            || (playerChoices[2]==='O'  && playerChoices[5]==='O' && playerChoices[8]==='O')  
            || (playerChoices[0]==='O'  && playerChoices[4]==='O' && playerChoices[8]==='O') 
            || (playerChoices[2]==='O'  && playerChoices[4]==='O' && playerChoices[6]==='O') 
         ){        
            
             oScore = oScore+1    
             winnerSpan.textContent = ' Computer Wins '
             sound.src = 'sounds/computerWins.wav'
             sound.play() 
            
             thereIsWinner = true
             PlayerTurn = false

             cells.forEach(cell => {
                console.log('rre')
                cell.removeEventListener('click', go)
               
            })    
          } 
          let sum = 0
          for( let i = 0 ; i < cells.length ; i++)
            {
               if(cells[i].classList.contains('X') || cells[i].classList.contains('O'))
                sum += 1 

            }  
            if(    (playerChoices[0]==='X'  && playerChoices[1]==='X' && playerChoices[2]==='X') 
            || (playerChoices[3]==='X'  && playerChoices[4]==='X' && playerChoices[5]==='X') 
            || (playerChoices[6]==='X'  && playerChoices[7]==='X' && playerChoices[8]==='X') 
            || (playerChoices[0]==='X'  && playerChoices[3]==='X' && playerChoices[6]==='X') 
            || (playerChoices[1]==='X'  && playerChoices[4]==='X' && playerChoices[7]==='X') 
            || (playerChoices[2]==='X'  && playerChoices[5]==='X' && playerChoices[8]==='X') 
            || (playerChoices[0]==='X'  && playerChoices[4]==='X' && playerChoices[8]==='X') 
            || (playerChoices[2]==='X'  && playerChoices[4]==='X' && playerChoices[6]==='X') 
             ){
                 xScore += 1
              
              }
           
            if(sum == 9 && xScore == 0) 
            {
                winnerSpan.textContent = ' Draw '
                sound.src = 'sounds/computerWins.wav'
                sound.play() 
            }     

    }

    function reset(){

        for(let i = 0 ; i < cells.length ; i++){
         

            if(cells[i].classList.contains('X') || cells[i].classList.contains('O'))
            {
                cells[i].classList.remove('X')
                cells[i].classList.remove('O')
                cells[i].classList.add('blank')
                
            }

        }
          winnerSpan.textContent = ''        
          playerChoices = []
          xScore = 0
          oScore = 0 
          count = 0      
          PlayerTurn = true    
          lastAddedElement 
          sound.pause()
          sound.currentTime = 0
          
        

    }
    resetBtn.addEventListener('click', reset)


    creatGrid()
    DetermineBorders()
   
    cells.forEach(cell => {
        cell.addEventListener('click', go)
    })


}
window.addEventListener('DOMContentLoaded',init)