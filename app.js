function janken(selection){
    var computer = Math.floor(Math.random() * 3);

    console.log(computer);

    if(selection == computer){
        console.log("tie");
        
    }

    else if(selection == 0){
        if(computer == 1){
            console.log("lose");
        }        

        else{
            console.log("win");
        }
    }

    else if(selection == 1){
        if(computer == 2){
            console.log("lose");
        }        

        else{
            console.log("win");
        }
    }

    else{
        if(computer == 0){
            console.log("lose");
        }

        else{
            console.log("win");
        }
    }

    
}


