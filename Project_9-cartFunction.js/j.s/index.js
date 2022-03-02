let count=1;
let a=document.querySelectorAll('.btn')
let obj=[
    {
        id:1,
        name: 'samsung',
        quantity:count,
        price:50000
    },
    {
        id:2,
        name: 'iphone',
        quantity:count,
        price:80000
    }
]
// let x=``
let c=0;
for(let x of a){
    x.addEventListener('click',function(){
        let b=this.id;
        // console.log(b)
        for(let y of obj){
            if(b==y.id){
                let u=y.price*y.quantity;
                // console.log('hi')
               let k=`<div class="cart-item">
               <p>${y.name}</p>
               <div class="order" value="${c}">
               <div class="add">
                   +
               </div>
               <div class="default">${y.quantity}</div>
               <div class="sub">
                   -
               </div>
           </div>
           <div class="total">${u}</div></div>`
           let r=document.querySelectorAll('.cart-item')
           document.querySelector('.cart').insertAdjacentHTML('beforeend',k)
           console.log(k);
           document.querySelector('.add').addEventListener('click',function(){
               count++;
               document.querySelector('.default').innerHTML=count;
               document.querySelector('.total').innerHTML=u*count;
           })
           document.querySelector('.sub').addEventListener('click',function(){
               if(count==1){
                   this.parentElement.parentElement.remove()
               }else{
                   count--;
                   document.querySelector('.default').innerHTML=count;
                   document.querySelector('.total').innerHTML=u*count;
               }
           })

            }
            
        }
        c++;
    })
}


