let order = [0, 0, 1];
let selectedDoor = ''; 
let montyOpensIndex = 0;

function randomizeDoors() {
    for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
    }
}

function setClickedDoor(doorId) {
    selectedDoor = doorId;
    if(selectedDoor == 'doorf1'){
        document.getElementById('doorf1').style.border = '7px dashed black';
        document.getElementById('doorf2').style.border = "none";
        document.getElementById('doorf3').style.border = "none";
        alert("You selected door 1! Monty will now open a goat door.");
    }
    else if(selectedDoor == 'doorf2'){
        document.getElementById('doorf2').style.border = '7px dashed black';
        document.getElementById('doorf1').style.border = "none";
        document.getElementById('doorf3').style.border = "none";
        alert("You selected door 2! Monty will now open a goat door.");
    }
    else if(selectedDoor == 'doorf3'){
        document.getElementById('doorf3').style.border = '7px dashed black';
        document.getElementById('doorf1').style.border = "none";
        document.getElementById('doorf2').style.border = "none";
        alert("You selected door 3! Monty will now open a goat door.");
    }
    setDoorBacks()
    openGoatDoor() 
}

function setDoorBacks() {
    //door 1
    if(order[0] === 0){
        //set .door-back to goat
        document.getElementById('doorb1').style.backgroundImage = 'url("https://st4.depositphotos.com/9447932/21451/v/450/depositphotos_214516306-stock-illustration-goat-vector-illustration-flat-style.jpg")';
        document.getElementById('doorb1').style.backgroundPosition = "-10px center";
    }
    else if(order[0] === 1){
        //set .door-back to car
        document.getElementById('doorb1').style.backgroundImage = 'url("https://media.istockphoto.com/id/166083637/vector/red-sports-car.jpg?s=612x612&w=0&k=20&c=WHMzZ8a228U2kGejPQ9bGYCwE_Xm4OmItbgCc1m250A=")';
        document.getElementById('doorb1').style.backgroundSize = "150% 100%";
        document.getElementById('doorb1').style.backgroundPosition = "-10px center";
    }

    //door 2
    if(order[1] === 0){
        //set .door-back to goat
        document.getElementById('doorb2').style.backgroundImage = 'url("https://st4.depositphotos.com/9447932/21451/v/450/depositphotos_214516306-stock-illustration-goat-vector-illustration-flat-style.jpg")';
        document.getElementById('doorb2').style.backgroundPosition = "-10px center";
    }   
    else if(order[1] === 1){
        //set .door-back to car
        document.getElementById('doorb2').style.backgroundImage = 'url("https://media.istockphoto.com/id/166083637/vector/red-sports-car.jpg?s=612x612&w=0&k=20&c=WHMzZ8a228U2kGejPQ9bGYCwE_Xm4OmItbgCc1m250A=")';
        document.getElementById('doorb2').style.backgroundSize = "150% 100%";
        document.getElementById('doorb2').style.backgroundPosition = "-10px center";
    }

    //door 3
    if(order[2] === 0){
        //set .door-back to goat
        document.getElementById('doorb3').style.backgroundImage = 'url("https://st4.depositphotos.com/9447932/21451/v/450/depositphotos_214516306-stock-illustration-goat-vector-illustration-flat-style.jpg")';
        document.getElementById('doorb3').style.backgroundPosition = "-10px center";
    }
    else if(order[2] === 1){
        //set .door-back to car
        document.getElementById('doorb3').style.backgroundImage = 'url("https://media.istockphoto.com/id/166083637/vector/red-sports-car.jpg?s=612x612&w=0&k=20&c=WHMzZ8a228U2kGejPQ9bGYCwE_Xm4OmItbgCc1m250A=")';
        document.getElementById('doorb3').style.backgroundSize = "150% 100%";
        document.getElementById('doorb3').style.backgroundPosition = "-10px center";
    }
    
}

function openGoatDoor() {
    if(selectedDoor == 'doorf1'){
        if(order[0] == 1){
            //open door 2 or 3
            if (Math.floor(Math.random() * 2) == 0) {
                document.getElementById('doorf2').style.transform = "rotateY(-140deg)";
                montyOpensIndex = 1;
            } else {
                document.getElementById('doorf3').style.transform = "rotateY(-140deg)";
                montyOpensIndex = 2;
            }
        }
        else if(order[0] == 0){
            if(order[1]==1){
                //open door 3
                document.getElementById('doorf3').style.transform = "rotateY(-140deg)";
                montyOpensIndex = 2;
            }
            else if(order[1]==0){
                //open door 2
                document.getElementById('doorf2').style.transform = "rotateY(-140deg)";
                montyOpensIndex = 1;
            }
        }
    }
    else if(selectedDoor == 'doorf2'){
        if(order[1] == 1){
            //open door 1 or 3
            if (Math.floor(Math.random() * 2) == 0) {
                document.getElementById('doorf1').style.transform = "rotateY(-140deg)";
            } else {
                document.getElementById('doorf3').style.transform = "rotateY(-140deg)";
                montyOpensIndex = 2;
            }
        }
        else if(order[1] == 0){
            if(order[0]==1){
                //open door 3
                document.getElementById('doorf3').style.transform = "rotateY(-140deg)";
                montyOpensIndex = 2;
            }
            else if(order[0]==0){
                //open door 1
                document.getElementById('doorf1').style.transform = "rotateY(-140deg)";
            }
        }
    }
    else if(selectedDoor  == 'doorf3'){
        if(order[2] == 1){
            //open door 1 or 2
            if (Math.floor(Math.random() * 2) == 0) {
                document.getElementById('doorf1').style.transform = "rotateY(-140deg)";
            } else {
                document.getElementById('doorf2').style.transform = "rotateY(-140deg)";
                montyOpensIndex = 1;
            }
        }
        else if(order[2] == 0){
            if(order[0]==1){
                //open door 2
                document.getElementById('doorf2').style.transform = "rotateY(-140deg)";
                montyOpensIndex = 1;
            }
            else if(order[0]==0){
                //open door 1
                document.getElementById('doorf1').style.transform = "rotateY(-140deg)";
            }
        }
    }
    askUserToRechoose()
}

function askUserToRechoose(){
    var userSwitched; 

    setTimeout(function() {
        userSwitched = window.confirm('Would you like to switch to the remaining closed door? Press cancel to stay with your original choice.');

        if(userSwitched){
            if(selectedDoor == 'doorf1'){
                if(montyOpensIndex == 1){
                    selectedDoor = "doorf3";
                    document.getElementById('doorf3').style.border = '7px dashed black';
                }
                else if (montyOpensIndex == 2){
                    selectedDoor = "doorf2";
                    document.getElementById('doorf2').style.border = '7px dashed black';   
                }
                document.getElementById('doorf1').style.border = "none";
            }
            else if(selectedDoor == 'doorf2'){
                if(montyOpensIndex == 0){
                    selectedDoor = "doorf3";
                    document.getElementById('doorf3').style.border = '7px dashed black';
                }
                else if (montyOpensIndex == 2){
                    selectedDoor = "doorf1";
                    document.getElementById('doorf1').style.border = '7px dashed black';
                }
                document.getElementById('doorf2').style.border = "none";
            }
            else if(selectedDoor == 'doorf3'){
                if(montyOpensIndex == 0){
                    selectedDoor = "doorf2";
                    document.getElementById('doorf2').style.border = '7px dashed black';
                }
                else if (montyOpensIndex == 1){
                    selectedDoor = "doorf1";
                    document.getElementById('doorf1').style.border = '7px dashed black';
                }
                document.getElementById('doorf3').style.border = "none";
            }
        }
        openCarDoor()
    }, 1800);
}

function openCarDoor() {
    setTimeout(function() {
        alert("Monty will now reveal all the doors.")

        //open all doors
        if(montyOpensIndex == 0){
            document.getElementById('doorf2').style.transform = "rotateY(-140deg)";
            document.getElementById('doorf3').style.transform = "rotateY(-140deg)";
        }
        else if (montyOpensIndex == 1){
            document.getElementById('doorf1').style.transform = "rotateY(-140deg)";
            document.getElementById('doorf3').style.transform = "rotateY(-140deg)";
        }
        else if (montyOpensIndex == 2){
            document.getElementById('doorf1').style.transform = "rotateY(-140deg)";
            document.getElementById('doorf2').style.transform = "rotateY(-140deg)";
        }

        //tell user if they won 
        if(order[0] == 1 && selectedDoor == 'doorf1'){
            document.getElementById('won').style.color = "black";
        }
        else if (order[1] == 1 && selectedDoor == 'doorf2'){
            document.getElementById('won').style.color = "black";
        }
        else if (order[2] == 1 && selectedDoor == 'doorf3'){
            document.getElementById('won').style.color = "black";
        }
        else{
            document.getElementById('lost').style.color = "black";
        }
    }, 1500);
}

