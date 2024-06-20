let loginpage=(e)=>{
    e.preventDefault()
    let user=e.target[0]
    let pswd=e.target[1]


    if(user.value=="Anjali" && pswd.value=='321'){
        window.location='./Home.html'
    }
    else{
       let er='border:2px solid red'
       user.style.cssText=er;
       pswd.style.cssText=er;
    }

}