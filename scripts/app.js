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
              
        if(count < 5){       
                
            if(thereIsWinner == false){        
              
        
            
                    if(lastAddedElement === 0){
                       
                        //0,4,8
                        if(playerChoices[4] === 'X' || playerChoices[8] === 'X')
                        {  
                            if(playerChoices[4] === 'X' && playerChoices[8] === undefined && playerChoices[8] != 'X' && playerChoices[8] != 'O')
                            {
                               // if(playerChoices[8] === undefined && playerChoices[8] !== 'X' && playerChoices[8] !== 'O'){
                                    cells[8].classList.add('O')
                                    cells[8].classList.remove('blank')
                               // }
                                 console.log('0,4,8')
                                
                                    PlayerTurn = true
                                    whoeWins()
                                    cells.forEach(cell => {
                                        cell.addEventListener('click', go)
                                    })
    
                            }
                            else if(playerChoices[8] === 'X' && playerChoices[4] === undefined && playerChoices[4] !== 'X' && playerChoices[4] !== 'O' )
                            {
                               // if(playerChoices[4] === undefined && playerChoices[4] !== 'X' && playerChoices[4] !== 'O'){
                                    cells[4].classList.add('O')
                                    cells[4].classList.remove('blank')
                               // }
                               console.log('0,8,4')
                                PlayerTurn = true
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                           
    
                            }else{
                            }


                        }                      
                    

                        //0,1,2
                        else if(playerChoices[1] === 'X' || playerChoices[2] === 'X')
                        {  
                            if(playerChoices[1] === 'X' && playerChoices[2] === undefined && playerChoices[2] !== 'X' && playerChoices[2] !== 'O')
                            {
                               // if(playerChoices[2] === undefined && playerChoices[2] !== 'X' && playerChoices[2] !== 'O'){
                                    cells[2].classList.add('O')
                                    cells[2].classList.remove('blank')
                               // }
                                console.log('0,1,2')
                                PlayerTurn = true
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }
                            else if(playerChoices[2] === 'X' && playerChoices[1] === undefined && playerChoices[1] !== 'X' && playerChoices[1] !== 'O')
                            {
                               //if(playerChoices[1] === undefined && playerChoices[1] !== 'X' && playerChoices[1] !== 'O'){
                                    cells[1].classList.add('O')
                                    cells[1].classList.remove('blank')
                               // }
                                console.log('0,2,1')
                                PlayerTurn = true
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }else{computerTurn()}
                            
                        }
                    
        
                        //0,3,6
                        else if(playerChoices[3] === 'X' || playerChoices[6] === 'X')
                        {  
                            if(playerChoices[3] === 'X' && playerChoices[6] === undefined && playerChoices[6] !== 'X' && playerChoices[6] !== 'O' )
                            {
                               // if(playerChoices[6] === undefined && playerChoices[6] !== 'X' && playerChoices[6] !== 'O'){
                                    cells[6].classList.add('O')
                                    cells[6].classList.remove('blank')
                              //  }
                                console.log('0,3,6')
                                PlayerTurn = true
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }
                           else if(playerChoices[6] === 'X' && playerChoices[3] === undefined && playerChoices[3] !== 'X' && playerChoices[3] !== 'O' )
                            {
                               // if(playerChoices[3] === undefined && playerChoices[3] !== 'X' && playerChoices[3] !== 'O'){
                                    cells[3].classList.add('O')
                                    cells[3].classList.remove('blank')
                               // }
                                console.log('0,6,3')
                                PlayerTurn = true
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }else{computerTurn()}
                            
                            
                        }else{
                            space = [1,2,4,8,3,6]
                            let oPostion = space[Math.floor(Math.random()*space.length)];

                            if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                                playerChoices[oPostion] = 'O'
                                cells[oPostion].classList.add('O')
                                cells[oPostion].classList.remove('blank')

                                let index = space.indexOf(oPostion)
                                space.splice(index, 1)         
                                console.log('random 0')

                                PlayerTurn = true
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })
                            }else{computerTurn()}}
                                
                    
                        

                    }

                        

                    if(lastAddedElement === 1){


                        //1,0,3
                        if(playerChoices[0] === 'X' || playerChoices[3] === 'X')
                        {  
                            if(playerChoices[0] === 'X' && playerChoices[3] === undefined && playerChoices[3] !== 'X' && playerChoices[3] !== 'O' )
                            {
                               // if(playerChoices[3] === undefined && playerChoices[3] !== 'X' && playerChoices[3] !== 'O'){
                                    cells[3].classList.add('O')
                                    cells[3].classList.remove('blank')
                               // }
                                PlayerTurn = true
                                console.log('1,0,3')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })
    
                            }
                            else if(playerChoices[3] === 'X' && playerChoices[0] === undefined && playerChoices[0] !== 'X' && playerChoices[0] !== 'O' )
                            {
                               // if(playerChoices[0] === undefined && playerChoices[0] !== 'X' && playerChoices[0] !== 'O'){
                                    cells[0].classList.add('O')
                                    cells[0].classList.remove('blank')
                               // }
                                console.log('1,3,0')
                                PlayerTurn = true
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })
    
                            } else{computerTurn()}
                            
                        }
                        
        
                        //1,4,7
                        else if(playerChoices[4] === 'X' || playerChoices[7] === 'X')
                        {  
                            if(playerChoices[4] === 'X' && playerChoices[7] === undefined && playerChoices[7] !== 'X' && playerChoices[7] !== 'O' )
                            {
                               // if(playerChoices[7] === undefined && playerChoices[7] !== 'X' && playerChoices[7] !== 'O'){
                                    cells[7].classList.add('O')
                                    cells[7].classList.remove('blank')
                               // }
                               console.log('1,4,7')
                                PlayerTurn = true
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })
    
                            }
                            else if(playerChoices[7] === 'X' && playerChoices[4] === undefined && playerChoices[4] !== 'X' && playerChoices[4] !== 'O' )
                            {
                               // if(playerChoices[4] === undefined && playerChoices[4] !== 'X' && playerChoices[4] !== 'O'){
                                    cells[4].classList.add('O')
                                    cells[4].classList.remove('blank')
                               // }
                                PlayerTurn = true
                                console.log('1,7,4')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })
    
                            }else{computerTurn()}
                            
                        }else{
                        space = [0,3,4,7]
                        let oPostion = space[Math.floor(Math.random()*space.length)];
    
                        if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                            playerChoices[oPostion] = 'O'
                            cells[oPostion].classList.add('O')
                            cells[oPostion].classList.remove('blank')
    
                            let index = space.indexOf(oPostion)
                            space.splice(index, 1)         
                            console.log('random 1')
    
                            PlayerTurn = true
                            whoeWins()
                            cells.forEach(cell => {
                                cell.addEventListener('click', go)
                            })
                            }else{computerTurn()}}
        

                    }

                    if(lastAddedElement === 2){

                        
                        //2,0,1
                        if(playerChoices[0] === 'X' || playerChoices[1] === 'X')
                        {  
                            if(playerChoices[0] === 'X' && playerChoices[1] === undefined && playerChoices[1] !== 'X' && playerChoices[1] !== 'O' )
                            {
                               // if(playerChoices[1] === undefined && playerChoices[1] !== 'X' && playerChoices[1] !== 'O'){
                                    cells[1].classList.add('O')
                                    cells[1].classList.remove('blank')
                               // }
                                PlayerTurn = true
                                console.log('2,0,1')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }
                            else if(playerChoices[1] === 'X' && playerChoices[0] === undefined && playerChoices[0] !== 'X' && playerChoices[0] !== 'O')
                            {
                               // if(playerChoices[0] === undefined && playerChoices[0] !== 'X' && playerChoices[0] !== 'O'){
                                    cells[0].classList.add('O')
                                    cells[0].classList.remove('blank')
                               // }
                               console.log('2,1,0')
                                PlayerTurn = true
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }else{computerTurn()}
                            
                        }
                    
        
                        //2,5,8
                        else if(playerChoices[5] === 'X' || playerChoices[8] === 'X')
                        {  
                            if(playerChoices[5] === 'X' && playerChoices[8] === undefined && playerChoices[8] !== 'X' && playerChoices[8] !== 'O')
                            {
                               // if(playerChoices[8] === undefined && playerChoices[8] !== 'X' && playerChoices[8] !== 'O'){
                                    cells[8].classList.add('O')
                                    cells[8].classList.remove('blank')
                               // }
                                PlayerTurn = true
                                console.log('2,5,8')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }
                            else if(playerChoices[8] === 'X' && playerChoices[5] === undefined && playerChoices[5] !== 'X' && playerChoices[5] !== 'O')
                            {
                               // if(playerChoices[5] === undefined && playerChoices[5] !== 'X' && playerChoices[5] !== 'O'){
                                    cells[5].classList.add('O')
                                    cells[5].classList.remove('blank')
                               // }
                                PlayerTurn = true
                                console.log('2,8,5')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }else{computerTurn()}
                            
                        }
                        
        
                        //2,4,6
                        else if(playerChoices[4] === 'X' || playerChoices[6] === 'X')
                        {  
                            
                            if(playerChoices[6] === 'X' && playerChoices[4] === undefined && playerChoices[4] !== 'X' && playerChoices[4] !== 'O')
                            {
                               // if(playerChoices[4] === undefined && playerChoices[4] !== 'X' && playerChoices[4] !== 'O'){
                                    cells[4].classList.add('O')
                                    cells[4].classList.remove('blank')
                               // }
                                PlayerTurn = true
                                console.log('2,6,4')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }
                            
                            else if(playerChoices[4] === 'X' && playerChoices[6] === undefined && playerChoices[6] !== 'X' && playerChoices[6] !== 'O' )
                            {
                               // if(playerChoices[6] === undefined && playerChoices[6] !== 'X' && playerChoices[6] !== 'O'){
                                    cells[6].classList.add('O')
                                    cells[6].classList.remove('blank')
                               // }
                                PlayerTurn = true
                                console.log('2,4,6')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }else{computerTurn()}
                            
                        }else{
                        space = [0,1,5,8,4,6]
                        let oPostion = space[Math.floor(Math.random()*space.length)];

                    if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                            playerChoices[oPostion] = 'O'
                            cells[oPostion].classList.add('O')
                            cells[oPostion].classList.remove('blank')

                            let index = space.indexOf(oPostion)
                            space.splice(index, 1)         
                            //console.log(space)
                            console.log('randome 2')
                            PlayerTurn = true
                            whoeWins()
                            cells.forEach(cell => {
                                cell.addEventListener('click', go)
                            })
                        }else{computerTurn()}}
                        

                        

                    
                    }
                    
                    if(lastAddedElement === 3){


                        //3,0,6
                        if(playerChoices[0] === 'X' || playerChoices[6] === 'X')
                        {  
                            if(playerChoices[0] === 'X' && playerChoices[6] === undefined && playerChoices[6] !== 'X' && playerChoices[6] !== 'O' )
                            {
                                //if(playerChoices[6] === undefined && playerChoices[6] !== 'X' && playerChoices[6] !== 'O'){
                                    cells[6].classList.add('O')
                                    cells[6].classList.remove('blank')
                               //}
                                PlayerTurn = true
                                console.log('3,0,6')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }
                            else if(playerChoices[6] === 'X' && playerChoices[0] === undefined && playerChoices[0] !== 'X' && playerChoices[0] !== 'O' )
                            {
                                //if(playerChoices[0] === undefined && playerChoices[0] !== 'X' && playerChoices[0] !== 'O'){
                                    cells[0].classList.add('O')
                                    cells[0].classList.remove('blank')
                               // }
                                PlayerTurn = true
                                console.log('3,6,0')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }else{computerTurn()}
                            
                        }
                        
        
                        //3,4,5
                        else if(playerChoices[5] === 'X' || playerChoices[4] === 'X')
                        {  
                            if(playerChoices[5] === 'X' && playerChoices[4] === undefined && playerChoices[4] !== 'X' && playerChoices[4] !== 'O' )
                            {
                               // if(playerChoices[4] === undefined && playerChoices[4] !== 'X' && playerChoices[4] !== 'O'){
                                    cells[4].classList.add('O')
                                    cells[4].classList.remove('blank')
                               // }
                                PlayerTurn = true
                                console.log('3,5,4')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }
                            else if(playerChoices[4] === 'X' && playerChoices[5] === undefined && playerChoices[5] !== 'X' && playerChoices[5] !== 'O')
                            {
                               // if(playerChoices[5] === undefined && playerChoices[5] !== 'X' && playerChoices[5] !== 'O'){
                                    cells[5].classList.add('O')
                                    cells[5].classList.remove('blank')
                               // }
                                PlayerTurn = true
                                console.log('3,4,5')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }else{computerTurn()}
                            
                        }else{
                    
                    

                        space = [0,6,4,5]
                        let oPostion = space[Math.floor(Math.random()*space.length)];

                    if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                            playerChoices[oPostion] = 'O'
                            cells[oPostion].classList.add('O')
                            cells[oPostion].classList.remove('blank')

                            let index = space.indexOf(oPostion)
                            space.splice(index, 1)         
                            //console.log(space)
                            console.log('randome 3')

                            PlayerTurn = true
                            whoeWins()
                            cells.forEach(cell => {
                                cell.addEventListener('click', go)
                            })
                        }else{computerTurn()}}


                    }
                    
                    if(lastAddedElement === 4){


                        //4,2,6
                        if(playerChoices[2] === 'X' || playerChoices[6] === 'X')
                        {  
                            if(playerChoices[2] === 'X' && playerChoices[6] === undefined && playerChoices[6] !== 'X' && playerChoices[6] !== 'O')
                            {
                               // if(playerChoices[6] === undefined && playerChoices[6] !== 'X' && playerChoices[6] !== 'O'){
                                    cells[6].classList.add('O')
                                    cells[6].classList.remove('blank')
                               //}
                                PlayerTurn = true
                                console.log('4,2,6')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }
                            else if(playerChoices[6] === 'X' && playerChoices[2] === undefined && playerChoices[2] !== 'X' && playerChoices[2] !== 'O')
                            {
                                //if(playerChoices[2] === undefined && playerChoices[2] !== 'X' && playerChoices[2] !== 'O'){
                                    cells[2].classList.add('O')
                                    cells[2].classList.remove('blank')
                               // }
                                PlayerTurn = true
                                console.log('4,6,2')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }else{computerTurn()}
                            
                        }
                        //4,0,8
                        else if(playerChoices[0] === 'X' || playerChoices[8] === 'X')
                        {  
                            if(playerChoices[0] === 'X' && playerChoices[8] === undefined && playerChoices[8] !== 'X' && playerChoices[8] !== 'O' )
                            {
                               //if(playerChoices[8] === undefined && playerChoices[8] !== 'X' && playerChoices[8] !== 'O'){
                                    cells[8].classList.add('O')
                                    cells[8].classList.remove('blank')
                               // }
                                PlayerTurn = true
                                console.log('4,0,8')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })
    
                            }
                            else if(playerChoices[8] === 'X' && playerChoices[0] === undefined && playerChoices[0] !== 'X' && playerChoices[0] !== 'O')
                            {
                               // if(playerChoices[0] === undefined && playerChoices[0] !== 'X' && playerChoices[0] !== 'O'){
                                    cells[0].classList.add('O')
                                    cells[0].classList.remove('blank')
                               // }
                                PlayerTurn = true
                                console.log('4,8,0')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })
    
                            }else{computerTurn()}
                            
                        }
                    
        
                        //4,3,5
                        else if(playerChoices[5] === 'X' || playerChoices[3] === 'X')
                        {  
                            if(playerChoices[5] === 'X' && playerChoices[3] === undefined && playerChoices[3] !== 'X' && playerChoices[3] !== 'O' )
                            {
                               // if(playerChoices[3] === undefined && playerChoices[3] !== 'X' && playerChoices[3] !== 'O'){
                                    cells[3].classList.add('O')
                                    cells[3].classList.remove('blank')
                               // }
                                PlayerTurn = true
                                console.log('4,5,3')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }
                            else if(playerChoices[3] === 'X' && playerChoices[5] === undefined && playerChoices[5] !== 'X' && playerChoices[5] !== 'O')
                            {
                               // if(playerChoices[5] === undefined && playerChoices[5] !== 'X' && playerChoices[5] !== 'O'){
                                    cells[5].classList.add('O')
                                    cells[5].classList.remove('blank')
                               // }
                                PlayerTurn = true
                                console.log('4,3,5')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }else{computerTurn()}
                            
                        }
                    
        
                        //4,1,7
                       else if(playerChoices[1] === 'X' || playerChoices[7] === 'X')
                        {  
                            if(playerChoices[1] === 'X' && playerChoices[7] === undefined && playerChoices[7] !== 'X' && playerChoices[7] !== 'O')
                            {
                               // if(playerChoices[7] === undefined && playerChoices[7] !== 'X' && playerChoices[7] !== 'O'){
                                    cells[7].classList.add('O')
                                    cells[7].classList.remove('blank')
                               // }
                                PlayerTurn = true
                                whoeWins()
                                console.log('4,1,7')
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }
                            else if(playerChoices[7] === 'X' && playerChoices[1] === undefined && playerChoices[1] !== 'X' && playerChoices[1] !== 'O')
                            {
                               // if(playerChoices[1] === undefined && playerChoices[1] !== 'X' && playerChoices[1] !== 'O'){
                                    cells[1].classList.add('O')
                                    cells[1].classList.remove('blank')
                               // }
                                PlayerTurn = true
                                console.log('4,7,1')
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })

                            }else{computerTurn()}
                            
                        }else{
                    
                            space = [2,6,3,5,1,7,0,8]
                            let oPostion = space[Math.floor(Math.random()*space.length)];

                        if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                                playerChoices[oPostion] = 'O'
                                cells[oPostion].classList.add('O')
                                cells[oPostion].classList.remove('blank')

                                let index = space.indexOf(oPostion)
                                space.splice(index, 1)         
                                //console.log(space)
                                console.log('random 4')

                                PlayerTurn = true
                                whoeWins()
                                cells.forEach(cell => {
                                    cell.addEventListener('click', go)
                                })
                            }else{computerTurn()}}


                
                    }  
                    //nono              
                    if(lastAddedElement === 5){

                        //5,2,8
                        if(playerChoices[2] === 'X' || playerChoices[8] === 'X')
                        {  
                            if(playerChoices[2] === 'X' && playerChoices[8] === undefined && playerChoices[8] !== 'X' && playerChoices[8] !== 'O')
                            {
                               // if(playerChoices[8] === undefined && playerChoices[8] !== 'X' && playerChoices[8] !== 'O'){
                                    cells[8].classList.add('O')
                                    cells[8].classList.remove('blank')
                               // }
                               console.log('5,2,8')
    
                            }
                            else if(playerChoices[8] === 'X' && playerChoices[2] === undefined && playerChoices[2] !== 'X' && playerChoices[2] !== 'O')
                            {
                               // if(playerChoices[2] === undefined && playerChoices[2] !== 'X' && playerChoices[2] !== 'O'){
                                    cells[2].classList.add('O')
                                    cells[2].classList.remove('blank')
                               // }
                               console.log('5,8,2')
    
                            }else{computerTurn()}
                            
                        }
                        
        
                        //5,4,3
                        else if(playerChoices[4] === 'X' || playerChoices[3] === 'X')
                        {  
                            if(playerChoices[4] === 'X' && playerChoices[3] === undefined && playerChoices[3] !== 'X' && playerChoices[3] !== 'O')
                            {
                               // if(playerChoices[3] === undefined && playerChoices[3] !== 'X' && playerChoices[3] !== 'O'){
                                    cells[3].classList.add('O')
                                    cells[3].classList.remove('blank')
                               // }
                               console.log('5,4,3')

                            }
                            else if(playerChoices[3] === 'X' && playerChoices[4] === undefined && playerChoices[4] !== 'X' && playerChoices[4] !== 'O' )
                            {
                               // if(playerChoices[4] === undefined && playerChoices[4] !== 'X' && playerChoices[4] !== 'O'){
                                    cells[4].classList.add('O')
                                    cells[4].classList.remove('blank')
                               //}
                               console.log('5,3,4')

                            }else{computerTurn()}

                            
                        PlayerTurn = true
                        whoeWins()
                        cells.forEach(cell => {
                            cell.addEventListener('click', go)
                        })

                       
                        }
                       else{
                        space = [2,8,4,3]
                        let oPostion = space[Math.floor(Math.random()*space.length)];

                    if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                            playerChoices[oPostion] = 'O'
                            cells[oPostion].classList.add('O')
                            cells[oPostion].classList.remove('blank')

                            let index = space.indexOf(oPostion)
                            space.splice(index, 1)         
                            //console.log(space)
                            console.log('random 5')

                            PlayerTurn = true
                            whoeWins()
                            cells.forEach(cell => {
                                cell.addEventListener('click', go)
                            })
                        }else{computerTurn()}}

                        PlayerTurn = true
                        whoeWins()
                        cells.forEach(cell => {
                            cell.addEventListener('click', go)
                        })
                    
        
                    }
                    if(lastAddedElement === 6){

                        //6,2,4
                        if(playerChoices[4] === 'X' || playerChoices[2] === 'X')
                        {  
                            
                            if(playerChoices[2] === 'X' && playerChoices[4] === undefined && playerChoices[4] !== 'X' && playerChoices[4] !== 'O' )
                            {
                                //if(playerChoices[4] === undefined && playerChoices[4] !== 'X' && playerChoices[4] !== 'O'){
                                    cells[4].classList.add('O')
                                    cells[4].classList.remove('blank')
                               // }
                               console.log('6,2,4')
    
                            }
                            else if(playerChoices[4] === 'X' && playerChoices[2] === undefined && playerChoices[2] !== 'X' && playerChoices[2] !== 'O' )
                            {
                                //if(playerChoices[6] === undefined && playerChoices[6] !== 'X' && playerChoices[6] !== 'O'){
                                    cells[2].classList.add('O')
                                    cells[2].classList.remove('blank')
                               // }
                               console.log('6,4,2')
    
                            }else{computerTurn()}
                            
                        }
                        
                        //6,3,0
                        else if(playerChoices[0] === 'X' || playerChoices[3] === 'X')
                        {  
                            if(playerChoices[0] === 'X' && playerChoices[3] === undefined && playerChoices[3] !== 'X' && playerChoices[3] !== 'O' )
                            {
                              // if(playerChoices[3] === undefined && playerChoices[3] !== 'X' && playerChoices[3] !== 'O'){
                                    cells[3].classList.add('O')
                                    cells[3].classList.remove('blank')
                               // }
                               console.log('6,0,3')
    
                            }
                            else if(playerChoices[3] === 'X' && playerChoices[0] === undefined && playerChoices[0] !== 'X' && playerChoices[0] !== 'O')
                            {
                              //  if(playerChoices[0] === undefined && playerChoices[0] !== 'X' && playerChoices[0] !== 'O'){
                                    cells[0].classList.add('O')
                                    cells[0].classList.remove('blank')
                               // }
                               console.log('6,3,0')
    
                            }
                            
                        }
                        
        
                        //6,7,8
                        else if(playerChoices[7] === 'X' || playerChoices[8] === 'X')
                        {  
                            if(playerChoices[7] === 'X' && playerChoices[8] === undefined && playerChoices[8] !== 'X' && playerChoices[8] !== 'O' )
                            {
                               //if(playerChoices[8] === undefined && playerChoices[8] !== 'X' && playerChoices[8] !== 'O'){
                                    cells[8].classList.add('O')
                                    cells[8].classList.remove('blank')
                               // }
                               console.log('6,7,8')
    
                            }
                            else if(playerChoices[8] === 'X' && playerChoices[7] === undefined && playerChoices[7] !== 'X' && playerChoices[7] !== 'O' )
                            {
                               // if(playerChoices[7] === undefined && playerChoices[7] !== 'X' && playerChoices[7] !== 'O'){
                                    cells[7].classList.add('O')
                               /    cells[7].classList.remove('blank')
                               // }
                               console.log('6,8,7')
    
                            }
                            
                        }else{
                      
                                space = [2,4,3,0,7,8]
                                let oPostion = space[Math.floor(Math.random()*space.length)];

                            if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                                    playerChoices[oPostion] = 'O'
                                    cells[oPostion].classList.add('O')
                                    cells[oPostion].classList.remove('blank')

                                    let index = space.indexOf(oPostion)
                                    space.splice(index, 1)  
                                    
                                    console.log('randome 6')                                    

                                    PlayerTurn = true
                                    whoeWins()
                                    cells.forEach(cell => {
                                        cell.addEventListener('click', go)
                                    })
                                }else{computerTurn()}}

                        
                            
                        PlayerTurn = true
                        whoeWins()
                        cells.forEach(cell => {
                            cell.addEventListener('click', go)
                        })


                    
                    }
                    if(lastAddedElement === 7){


                        //7,4,1
                        if(playerChoices[1] === 'X' || playerChoices[4] === 'X')
                        {  
                            if(playerChoices[1] === 'X' && playerChoices[4] === undefined && playerChoices[4] !== 'X' && playerChoices[4] !== 'O' )
                            {
                               // if(playerChoices[4] === undefined && playerChoices[4] !== 'X' && playerChoices[4] !== 'O'){
                                    cells[4].classList.add('O')
                                    cells[4].classList.remove('blank')
                               // }
                               console.log('7,1,4')

                            }
                            else if(playerChoices[4] === 'X' && playerChoices[1] === undefined && playerChoices[1] !== 'X' && playerChoices[1] !== 'O')
                            {
                                //if(playerChoices[1] === undefined && playerChoices[1] !== 'X' && playerChoices[1] !== 'O'){
                                    cells[1].classList.add('O')
                                    cells[1].classList.remove('blank')
                              //  }
                              console.log('7,4,1')

                            }else{computerTurn()}
                            
                        }
                        
    
                        //7,6,8                        
                        else if(playerChoices[6] === 'X' || playerChoices[8] === 'X')
                        {  
                            if(playerChoices[6] === 'X' && playerChoices[8] === undefined && playerChoices[8] !== 'X' && playerChoices[8] !== 'O')
                            {
                               // if(playerChoices[8] === undefined && playerChoices[8] !== 'X' && playerChoices[8] !== 'O'){
                                    cells[8].classList.add('O')
                                    cells[8].classList.remove('blank')
                                //}
                                console.log('7,6,8')
    
                            }
                            else if(playerChoices[8] === 'X' && playerChoices[6] === undefined && playerChoices[6] !== 'X' && playerChoices[6] !== 'O' )
                            {
                               // if(playerChoices[6] === undefined && playerChoices[6] !== 'X' && playerChoices[6] !== 'O'){
                                    cells[6].classList.add('O')
                                    cells[6].classList.remove('blank')
                               // }
                               console.log('7,8,6')
    
                            }else{computerTurn()}
                            
                        }else{
                        
                     

                                space = [6,8,1,4]
                                let oPostion = space[Math.floor(Math.random()*space.length)];
                            
                                if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                                    playerChoices[oPostion] = 'O'
                                    cells[oPostion].classList.add('O')
                                    cells[oPostion].classList.remove('blank')

                                    let index = space.indexOf(oPostion)
                                    space.splice(index, 1)
                                    console.log('randome 7')         
                                

                                    PlayerTurn = true
                                    whoeWins()
                                    cells.forEach(cell => {
                                        cell.addEventListener('click', go)
                                    })

                                
                            
                                }else{
                                computerTurn()
                                }}

                        PlayerTurn = true
                        whoeWins()
                        cells.forEach(cell => {
                            cell.addEventListener('click', go)
                        })
                    
                    }
                    if(lastAddedElement === 8){

                        //8,4,0
                        
                        if(playerChoices[4] === 'X' || playerChoices[0] === 'X'){  

                            if(playerChoices[0] === 'X' && playerChoices[4] === undefined && playerChoices[4] !== 'X' && playerChoices[4] !== 'O')
                            {
                                //if(playerChoices[4] === undefined && playerChoices[4] !== 'X' && playerChoices[4] !== 'O'){
                                    cells[4].classList.add('O')
                                    cells[4].classList.remove('blank')
                               // }
                               console.log('8,0,4')
    
                            }
                            else if(playerChoices[4] === 'X' && playerChoices[0] === undefined && playerChoices[0] !== 'X' && playerChoices[0] !== 'O' )
                            {
                                //if(playerChoices[0] === undefined && playerChoices[0] !== 'X' && playerChoices[0] !== 'O'){
                                    cells[0].classList.add('O')
                                    cells[0].classList.remove('blank')
                               // }
                               console.log('8,4,0')
    
                            }
                           
                            
                        }
                        
        
                        //8,5,2
                        else if(playerChoices[2] === 'X' || playerChoices[5] === 'X')
                        {  
                            if(playerChoices[2] === 'X' && playerChoices[5] === undefined && playerChoices[5] !== 'X' && playerChoices[5] !== 'O')
                            {
                                //if(playerChoices[5] === undefined && playerChoices[5] !== 'X' && playerChoices[5] !== 'O'){
                                    cells[5].classList.add('O')
                                    cells[5].classList.remove('blank')
                               // }
                               console.log('8,2,5')

                            }
                            else if(playerChoices[5] === 'X' && playerChoices[2] === undefined && playerChoices[2] !== 'X' && playerChoices[2] !== 'O' )
                            {
                               // if(playerChoices[2] === undefined && playerChoices[2] !== 'X' && playerChoices[2] !== 'O'){
                                    cells[2].classList.add('O')
                                    cells[2].classList.remove('blank')
                               // }
                               console.log('8,5,2')

                            }else{computerTurn()}
                            
                        }
                        
        
                        //8,6,7
                        else if(playerChoices[6] === 'X' || playerChoices[7] === 'X')
                        {  
                            if(playerChoices[6] === 'X' && playerChoices[7] === undefined && playerChoices[7] !== 'X' && playerChoices[7] !== 'O' )
                            {
                               // if(playerChoices[7] === undefined && playerChoices[7] !== 'X' && playerChoices[7] !== 'O'){
                                    cells[7].classList.add('O')
                                    cells[7].classList.remove('blank')
                               // }
                               console.log('8,6,7')

                            }
                            else if(playerChoices[7] === 'X' && playerChoices[6] === undefined && playerChoices[6] !== 'X' && playerChoices[6] !== 'O')
                            {
                               // if(playerChoices[6] === undefined && playerChoices[6] !== 'X' && playerChoices[6] !== 'O'){
                                    cells[6].classList.add('O')
                                    cells[6].classList.remove('blank')
                               // }
                               console.log('8,7,6')

                            }else{computerTurn()}
                            
                        }else{
                    
                    space = [4,0,5,2,6,7]
                    let oPostion = space[Math.floor(Math.random()*space.length)];
                
                    if(playerChoices[oPostion]=== undefined && playerChoices[oPostion] !== 'X' && playerChoices[oPostion] !== 'O'){
                            playerChoices[oPostion] = 'O'
                            cells[oPostion].classList.add('O')
                            cells[oPostion].classList.remove('blank')

                            let index = space.indexOf(oPostion)
                            space.splice(index, 1)  
                            console.log('randome 8')       
                        

                            PlayerTurn = true
                            whoeWins()
                            cells.forEach(cell => {
                                cell.addEventListener('click', go)
                            })

                        
                    
                        }else{
                        computerTurn()
                        }}

                    
        
                            
                    PlayerTurn = true
                    whoeWins()
                    cells.forEach(cell => {
                        cell.addEventListener('click', go)
                    })



                    
                    }
            }

        }else{
            PlayerTurn = true
            whoeWins()}
            
      
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
            if((playerChoices[0]==='X'  && playerChoices[1]==='X' && playerChoices[2]==='X') 
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

        cells.forEach(cell => {
            cell.addEventListener('click', go)
        })

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