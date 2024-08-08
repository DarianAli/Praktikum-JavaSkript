window.onload = () => {
    let button = document.querySelector("#btn");

    button.addEventListener("click", calculateBMI);
};

function calculateBMI(){
    let height = Number(document.querySelector("#height").value);
    let weight = Number(document.querySelector("#weight").value);

    let result = document.querySelector("#result");


    if(height == "" || isNaN(height))
        result.innerHTML = "Provide a valid HEIGHT!!!";

    else if(weight == "" || isNaN(weight))
        result.innerHTML = "Provide a valid WEIGHT!!!";


    else{
        let bmi = (weight / ((height*height)/ 10000)).toFixed(2);
        if (bmi < 18.6) 
            result.innerHTML = `under weight! : <span>${bmi}</span>`;
        
        else if (bmi >=18.6 && bmi < 24.9)
            result.innerHTML = `Normal : <span>${bmi}</span>`;

        else{
            result.innerHTML = `over weight! : <span>${bmi}</span>`
        }
    }
}