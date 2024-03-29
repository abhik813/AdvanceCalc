let value = localStorage.getItem('Total');
    if (value === null) {
        localStorage.setItem('Total', 0.0);
    }

allButtons = document.querySelectorAll(".btn");
allButtons.forEach(button => {
    button.addEventListener("click",()=>
    {
          document.querySelector(".input").innerHTML += button.innerHTML;
          document.querySelector(".saveTransaction").style.display = "none";
    })
});
clearbutton = document.querySelector(".dull").addEventListener("click", ()=>{
    document.querySelector(".input").innerHTML ="";
    document.querySelector(".saveTransaction").style.display = "none";
});


equalbutton = document.querySelector(".equal").addEventListener("click", ()=>{
    document.querySelector(".saveTransaction").style.display = "none";
    let expression = document.querySelector(".input").innerHTML.replaceAll(" ","");
    try{
        answer = eval(expression);


        document.querySelector(".input").innerHTML = answer;
    document.querySelector(".saveTransaction").style.display = "block";

    if (document.querySelector(".saveCredit").addEventListener("click", ()=>{
        let data = localStorage.getItem("Total");
        data = parseFloat(data);
        answer = parseFloat(answer);
        data = data += answer;
        console.log(data);
        localStorage.setItem("Total",data);
        document.querySelector(".totalAmount").innerHTML = "Total Amount: " + localStorage.getItem("Total");
    }));
    else if (document.querySelector(".saveDebit").addEventListener("click", ()=>{
        let data = localStorage.getItem("Total");
        data = parseFloat(data);
        answer = parseFloat(answer);
        data = data -= answer;
        console.log(data);
        localStorage.setItem("Total",data);
        document.querySelector(".totalAmount").innerHTML = "Total Amount: " + localStorage.getItem("Total");
    }));
    else if(document.querySelector(".resetAmount").addEventListener("click", ()=>{
        localStorage.setItem("Total",0);
        document.querySelector(".totalAmount").innerHTML = "Total Amount: " + localStorage.getItem("Total");
    }));
    document.querySelector(".totalAmount").innerHTML = "Total Amount: " + localStorage.getItem("Total");
    } 
    catch(e)
    {
        document.querySelector(".input").innerHTML = "Error";
    }
});





