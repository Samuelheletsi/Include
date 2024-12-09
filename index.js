const submit = document.querySelector('#submit');

// function to check if the user's name is already in the array
submit.addEventListener('click', ()=>{
    let input = document.querySelector('#name').value;

    let candidate = ["Dzifa", "Sucre","Eve","Adam","Heletsi","Kofi","Naomi"];

    let candidateInfo = candidate.includes(input);

    if(input !== ""){
        if(!candidateInfo){
            alert("No, your name not is here");
        }
        else{
            alert("Welcome, your name is here");
        }
        
    }
    else{
        alert("Enter your name");
    }
})