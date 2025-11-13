function bla(){
    console.log("Olá mundo!")
}

b=document.querySelector(":nth-child(4)");
b.innerHTML="BLA"
b.addEventListener("click", bla);