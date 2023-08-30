
let temperature = () =>
{
    let x = document.querySelector("#unit");
    let display = document.querySelector(".value");
    let y = document.querySelector(".takval").value;
   if(x.value=="Fahrenheit")
   {
    console.log(y, "C to F", x.value)
    let temp = parseFloat(y)
    let F = temp * (9 / 5) + 32
    display.innerHTML = F.toFixed(2) + " F"
   }
    else
   {
    console.log(y, "C to K", x.value)
    let temp = parseFloat(y)
     let K = temp + 273.15
    display.innerHTML = K + " K"
   }
}


