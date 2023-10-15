const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()

   const height= parseInt(document.querySelector('#height').value);
   const weight= parseInt(document.querySelector('#weight').value);
   const result= document.querySelector('#result');
   var ucolor = document.getElementById('result').style
   var ncolor = document.getElementById('result').style
   var ocolor = document.getElementById('result').style

   if (height === '' || height <= 0 || isNaN(height)){
    result.innerHTML=`Please give valid height`;
   }else if (weight === '' || weight <= 0 || isNaN(weight)){
    result.innerHTML=`Please give valid weight `;
   }else {
       const bmi = (weight/((height*height)/10000)).toFixed(2)
       result.innerHTML = `<span>${bmi}</span>`

       
       if (bmi<18.86){
           result.innerHTML=`Your BMI : ${bmi}
           <br>
            <br>
           Your Category : Under Weight`
           ucolor.color='red'
        }else if(bmi>=18.6 && bmi <=24.9){
            result.innerHTML=`Your BMI : ${bmi}
            <br>
            <br>
            Your Category : Normal Weight`
            ncolor.color='green';

        }else{
            result.innerHTML=`your BMI : ${bmi}
            <br>
            <br>
            Your Category : OverWeight`
            ocolor.color='red'
        }
        
}
})