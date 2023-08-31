


const generate = () => {
    fetch('https://api.quotable.io/random').then((res)=>{
        res.json().then((quote)=>{
            setContentToUI(quote.content,quote.author);
        })
    })
}
    generate();


const setContentToUI = (quote,author) =>{
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = '-' + '&nbsp;&nbsp;&nbsp;' + author;
}