// const url=("https://fakestoreapi.com/products/1");
const url = ("https://fakestoreapi.com/products?limit=12");
const fectdata = async()=>{
    let txt="";
    const respones = await fetch(url);
    const data = await respones.json();
    try{
        const respones = await fetch(url);
        const data = await respones.json();
        for(let item of data){
            txt +=`
            <div class="card">
                <img src="${item.image}" alt="" class="card-img-top">
                <div class="card-body">
                    <h1>${item.title}</h1>
                    <h3>${item.price}</h3>
                    <h3>${item.category}</h3>
                    <h3>${item.rating["rate"]}</h3>
                </div>
            </div>
            `;
            document.getElementsByClassName("container")[0].innerHTML=txt;
        }
    }catch(err){
        console.log(err);
    }
}
fectdata();