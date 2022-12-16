var plus =document.querySelectorAll(".plus")
console.log(plus)
var count = document.querySelector("p")

for(var i=0;i<plus.length;i++){
    console.log(list[i])
}

plus.addEventListener("click" ,()=>{
    let num = parseInt(count.textContent)
    num = num+1

    count.textContent = num


})
var moins =document.querySelector(".moins")

moins.addEventListener("click",()=>{
    let num = parseInt(count.textContent)
  
    if (num>0){
        num= num-1
        count.textContent = num

    }
   

})