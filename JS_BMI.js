window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating bmi
    button.addEventListener("click", calculateBMI);
};

function calculateBMI(){
    /*Getting input from into heigh variable. Input is stirng so typecasting is nesseary*/

    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);

    let result = document.querySelector("#result");

    // checking the user are they inputing a proper value or not

    if(height == "" || isNaN(height))
        result.innerHTML = "Provide a valid HEIGHT!!!";

    else if(weight == "" || isNaN(weight))
        result.innerHTML = "Provide a valid WEIGHT!!!";

    // if both input is valid, calculate BMI

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