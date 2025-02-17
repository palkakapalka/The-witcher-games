function Hours() {
    var input = document.forms["FirstForm"]["hours"].value;
    if (input == null || input == "") {
        alert("Please enter something");
        return false;
    }
    if (isNaN(input)){
        alert("Please enter a number");
        return false;
    }
}

function havePlayed(){
    if (document.getElementById("game").value == "none"){     
            document.getElementById("message").style.display = 'none';   
            document.getElementById("q2").style.display = 'none';  
            document.getElementById("message2").style.display = 'none';  
    }
    if (document.getElementById("game").value == "no"){
        document.getElementById("message").innerHTML = "😮 you need to try !";  
        document.getElementById("message").style.display = 'block';
        document.getElementById("q2").style.display = 'none'; 
        document.getElementById("message2").style.display = 'none';  
    } 
    if (document.getElementById("game").value == "yes"){
        document.getElementById("q2").style.display = 'block'; 
        document.getElementById("message").style.display = 'none';   
    }
}
        
function ChooseGame(){
    if (document.getElementById("choose").value == "The Witcher"){
        document.getElementById("message2").style.display = 'block';  
        document.getElementById("message2").innerHTML = "🥸 you like old games";   
    }
    if (document.getElementById("choose").value == "The Witcher 2"){
        document.getElementById("message2").style.display = 'block'; 
        document.getElementById("message2").innerHTML = "🤔 hmmm"; 
    }
    if (document.getElementById("choose").value == "The Witcher 3"){
    document.getElementById("message2").style.display = 'block';
    document.getElementById("message2").innerHTML = "😎 this is my favorite game";
    }
}
