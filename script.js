function atmMachine(){
    var NAME = prompt("Enter your name") ; 
    var passTry = 3;
    var BANKNAME = parseInt(prompt("Dear "+ NAME+ " What is your bank name?\n 1. GTB\n2.Access\n3.Stanbic-IBTC\n4.Fidelity\n5.Sterling\n6.Skye\n7.Firstbank\n8.Others"));
    var YES_NO = 2;
    var passwordEntered = parseInt(prompt("Dear "+NAME+ ", Enter your 4 digits PIN"));
    var correct_pass = (/^[0-9]{4}$/); 
    var min_bal = 1000;

    function checkPassword(password){ //to check if the password is correct or not    
        if(correct_pass.test(passwordEntered)){
            optionMenu();
        }else{
            passTry = 3;
            while(!(correct_pass.test(passwordEntered))){
               alert("You don't a valid PIN, input the correct one now");
                alert("You have only " + passTry + " chances to try");
                passTry = passTry - 1; 

                if (passTry === 0){
                    alert("Maximum tries exceeded, please contact your bank to retrieve your ATM card"); 
                    exit();
                    break;
                } 
                passwordEntered = parseInt(prompt("Dear "+NAME+ ", Enter your 4 digits PIN"));
            }optionMenu();
        }
    }checkPassword(passwordEntered);

    // menu selection
    function optionMenu(){
        var SELECT_account = parseInt(prompt("Which type of account do you have?\n 1. Savings\n  2. Current\n   3. Credit"));
       if(SELECT_account < 4){
            var atm_functions = parseInt(prompt("Hello, customer, what can we do for you today ? \n 1. Inquiry \n 2. withdrawal \n 3. Deposit\n4. Exit"));
            if(atm_functions==1){
               inquiry();
            }else if(atm_functions==2){
                withdrawal();
            }else if(atm_functions==3){
                deposit();
            }else if(atm_functions==4){
                exit();
            }
            else{
                alert("Please make a valid selection");
            }
        }

    }

    // to calculate the balance for before, during and after withdrawal and deposit
    function calculateAmt(inquiry, withdrawal, deposit){
        var availableBal = 35000; 
        var a= inquiry(availableBal);
        var b= deposit(availableBal);
        var c= withdrawal(availableBal);
        if(a){

            availableBal =  inquiry(availableBal);
        }
        else if(b){
            availableBal =  availableBal - withdrawal;
            if(withdrawal > availableBal){
                alert("You have insufficient funds");  
            }
        }
        else{
            availableBal =  availableBal + deposit;
        }
        return availableBal;
    }
    function inquiry(availableBal){
        availableBal = calculateAmt(availableBal);
        alert("Your avaialable balance is "+ availableBal);
        toContinue();
    }
    function deposit(availableBal){
        var deposit= parseInt(prompt("How much do you want to deposit?"));

        if (isNaN(deposit) || deposit === " ") {
            alert('Error: please enter a number!');
           deposit();
        }
        deposit = calculateAmt(availableBal);
        alert("You have successfully deposited "+deposit+ " ...You now have "+availableBal);
        toContinue(availableBal);
    }
    function withdrawal(availableBal){
      var withdrawal= parseInt(prompt("How much do you want to withdraw ? \t The minimum amount you can withdraw is 1000"));

      if (isNaN(withdrawal) || withdrawal === " ") {
        alert('Error: please enter a number!');
        withdrawal(availableBal);
        }
        withdrawal = calculateAmt(availableBal);
      alert("transaction is successful");
      alert("Your remaining balance is "+ availableBal);
      toContinue();
    }
    function toContinue(){
        var YES_NO =  parseInt(prompt("Do you want to perform another transaction?\n 1.Yes \n 2. No"));
        if(YES_NO === 2){
           exit();
        }
        else{
            return optionMenu(); 
        }
    }
    function exit(){
        alert("Thank you for patronising our ATM machine");
        return false;
    }
}atmMachine();