const submit = document.querySelector('#submit');

// function to check if the user's name is already in the array
submit.addEventListener('click', ()=>{
    let input = document.querySelector('#name').value;

    let candidate = ["Dzifa", "Sucre","Eve","Adam"];

    let candidateInfo = candidate.includes(input);

    if(input !== ""){
        if(!candidateInfo){
            alert("You are new here");
        }
        else{
            alert("Welcome");
        }
        
    }
    else{
        alert("Enter your name");
    }
})