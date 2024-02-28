const input=document.getElementById('num_field');
const option=document.getElementById('temp_sel');
const result=document.getElementById('result');
const btn=document.getElementById('btn');
const deg="\u00B0"
const celsius=(val)=>{
    let ans=5/9*(val-32);
    result.innerHTML=`${input.value}${deg}F = ${ans.toFixed(2)}${deg}C`;
}
const fahrenheit=(val)=>{
    let ans=(9/5*val) + 32;
    result.innerHTML=`${input.value}${deg}C = ${ans.toFixed(2)}${deg}F`;
}
btn.addEventListener('click',()=>{
    let input_value=input.value;
    console.log(option.value);
    if(option.value==`${deg}celsius`)
    {
        celsius(input_value);
    }
    else{
        fahrenheit(input_value);
    }
})
