function render(data){
    document.querySelector('#auth').innerHTML = data.author
   document.querySelector('#quo').innerHTML = data.en
   document.querySelector('img').style.display = 'none'
}

function quotes(){
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
    .then((response) => response.json())
    .then((data) => render(data))
    .catch(err => alert(err));
}
    document.querySelector('.next').addEventListener('click',quotes)