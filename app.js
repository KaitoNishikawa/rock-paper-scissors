let btns = document.querySelectorAll('button');
var result = document.getElementById('result');
var computerSelection = ['Rock', 'Paper', 'Scissors'];
var counter = 0;
var computer;

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', () => {
        janken(i);
    });
}



function janken(selection){
    computer = Math.floor(Math.random() * 3);

    console.log("computer " + computer);
    console.log("player " + selection);

    result.innerHTML = 'You did: ' + computerSelection[selection] + "<br />" + 'Computer did: ' + computerSelection[computer];    

    if(selection == computer){
        console.log("tie");
        result.innerHTML = result.innerHTML + '<br />Tie';        
    }

    else if(selection == 0){
        if(computer == 1){
            console.log("lose");
            result.innerHTML = result.innerHTML + '<br />You Lose';
        }        

        else{
            console.log("win");
            result.innerHTML = result.innerHTML + '<br />You Win';
        }
    }

    else if(selection == 1){
        if(computer == 2){
            console.log("lose");
            result.innerHTML = result.innerHTML + '<br />You Lose';
        }        

        else{
            console.log("win");
            result.innerHTML = result.innerHTML + '<br />You Win';
        }
    }

    else{
        if(computer == 0){
            console.log("lose");
            result.innerHTML = result.innerHTML + '<br />You Lose';
        }

        else{
            console.log("win");
            result.innerHTML = result.innerHTML + '<br />You Win';
        }
    }

    
}


