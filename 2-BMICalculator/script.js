
const form = document.querySelector("form")
form.addEventListener("submit",function(e){
  e.preventDefault()

const height = parseInt(document.getElementById("height").value)
const weight = parseInt(document.getElementById("weight").value)
const results = document.getElementById("results")

if(height === ""|| height<0 || isNaN(height) ){
  results.innerHTML = `Please give a valid height ${height}`
  
}
else if(weight === ""||weight<0||isNaN(weight)){
  results.innerHTML =`Please give a valid weight ${weight}`
}
else{
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  results.innerHTML =`<span>${bmi}</span>`
  if(bmi < 18.6){
    results.innerHTML += "You are under weight"
  }
  else if(bmi > 18.6 && bmi < 24.9){
  results.innerHTML += "You are in normal range"
  }
  else(bmi > 24.9)
    {results.innerHTML += "You are over weight"}
  
}

})
