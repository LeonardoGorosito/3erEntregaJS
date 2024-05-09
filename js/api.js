const listProducts = document.querySelector('#api');
fetch("./js/products.json")
    .then(res => res.json())
    .then(data =>{
        data.forEach(product => {
            const div = document.createElement("div");
            div.innerText = product.lorem;
            listProducts.append(div);
            //me volvio loco y puse un parrafo nomas xd perdon
        })

    })