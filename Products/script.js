const btn = document.getElementById('btn');
const tempURL ='https://dummyjson.com/products/search?q=phone'
const inp=document.getElementById('inp')

btn.addEventListener('click',()=>{
    const URL=tempURL + inp.value;
    fetch(URL)
    .then((res)=>{
        return res.json()
       })
       .then((data)=>{
         // console.log(data.products)
         for(let product of data.products){
            console.log(product);
            const productElem=document.createElement('div');
            const h2= document.createElement('h2');
            h2.innerText=product.title;

            const img=document.createElement('img');
            img.setAttribute('src',product.images[0]);
            img.style.width="200px"


            const para=document.createElement('p');
            para.innerText=product.price


            productElem.append(h2);
            productElem.append(img);
            productElem.append(price)
            container.append(productElem);

         }

         })
})

