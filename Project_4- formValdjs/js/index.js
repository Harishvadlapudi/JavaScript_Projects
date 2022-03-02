
let p;
document.querySelector('.name').addEventListener('keyup',function(obj){
    
    let format=/^[a-zA-Z ]{2,30}$/;
    let text=document.querySelector('.name').value;
    if(text.match(format)){
    p=obj;
    let s=''
    s+=this.value;
    if(s.length>4){
        document.querySelector('.name').style.borderColor='green'
    }else{
        document.querySelector('.name').style.borderColor='red'
    }
    }else{
        document.querySelector('.name').style.borderColor='red'
    }
})

document.querySelector('.email').addEventListener('keyup',function(){
    let format =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,33})+$/;
    let test=document.querySelector('.email').value;
    // console.log(test)
    if(test.match(format)){
        document.querySelector('.email').style.borderColor='green'
    }else{
        document.querySelector('.email').style.borderColor='red'
    }
})

document.querySelector('.password').addEventListener('keyup',function(){
    let passformat=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let test=document.querySelector('.password').value;
    if(test.match(passformat)){
        console.log('hi')
        document.querySelector('.password').style.borderColor='green';
    }else{
        document.querySelector('.password').style.borderColor='red';
    }
})
document.querySelector('.number').addEventListener('keyup',function(){
    let num=/[0-9]/;
    let y=document.querySelector('.number').value;
    if(y.match(num)){
        console.log('hi')
        let s='';
        s+=this.value;
        if(s.length>9&&s.length<11){
            document.querySelector('.number').style.borderColor='green'
        }else{
            document.querySelector('.number').style.borderColor='red'
        }
    }else{
        document.querySelector('.number').style.borderColor='red'
    }
})
