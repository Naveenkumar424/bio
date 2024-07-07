function notify(){
    let p = document.querySelector("#anu");
    p.innerHTML = "Anusha -A bright gem which lost it's shine in the process of polishing";
    timeOut = setTimeout(()=>{
        console.log("Function execution completed")
        let p = document.querySelector("#anu");
        p.innerHTML = "Anusha"
    },10000);
}

