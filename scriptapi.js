function newsApi (search){
    let url = `https://newsapi.org/v2/top-headlines?q=${search}&country=id&apiKey=1b3f0ae9c4014d1cb5ea8f2613929f7e`
               
    return fetch(url)
        .then((response) => {
            // console.log(response.json()) 
            return response.json()
        })
        .then((data) => {
            console.log(data)
            card = ''
            if(data.articles.length === 0){
                card+=`<p>Maaf Berita yang Anda Cari Tidak Ada`
            }else{
                 data.articles.map(item => {
                    card+=`
                    <br>
                    <div class="card">
                        <img src=${item.urlToImage}>
                        <br>
                        <p>${item.author}</p>
                        <h3>${item.title}</h3>
                        <h4>${item.description}</h4>
                        
                    </div>
                `
            })
            }
           
            document.getElementById('myapp').innerHTML = card
            return data
        })
}


newsApi('')
const input = document.querySelector('input');
input.addEventListener('input', searchValue);

function searchValue (e) {
    // if(e.key === "enter"){
        
    // }
    newsApi(e.target.value)
   
}
