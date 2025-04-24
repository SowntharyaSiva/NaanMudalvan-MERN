let count = [];

for(let i = 0; i< 20; i++){
   count[i] = 0;
}

function increment(index){
     console.log(count)
     let card = document.getElementById(`count${index}`)
     count[index]++;
     card.innerHTML = count[index]    
}

function decrement(index) {
   let card = document.getElementById(`count${index}`);
   if (count[index] > 0) count[index]--; 
   card.innerHTML = count[index];
}

let cart = []



fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((js) => {
               console.log(js[0])

               let pro = document.getElementById("product");


               js.map((data, index) => {
                       
                       pro.innerHTML += `
                              <div class="card" id ="${index}" style="width: 18rem;">
                                 <img src="${data.image}" class="card-img-top" alt="...">
                                 <div class="card-body">
                                    <h5 class="card-title">${data.title}</h5>
                                    <p class="card-text">${data.description}</p>
                                    <div>
                                          <a onclick="increment(${index})" class="btn btn-primary">+</a>
                                          <span id="count${index}">${count[index]}</span>
                                          <a onclick="decrement(${index})" class="btn btn-primary">-</a>
                                       
                                    </div>
                                    <br>
                                    <a onclick="addCart(${index}))" class="btn btn-primary">Add to cart</a>
                                 </div>
                              </div>
                            `
               })

               // js.map((data) =>{
               //    pro.innerHTML += `
               //          <h1> Title : ${data.title}</h1>
               //          <img src="${data.image}" alt="pic" height="200px">
               //          <h3> Rs.${data.price} </h3>
               //          <h3> Category : ${data.category} </h3>
               //          <h4> Description : ${data.description} </h4>
               //          <h4> Rating : ${data.rating.rate} </h4>
                        
               //          `
               // })

               // for(let i = 0; i < 20; i++){
               //  console.log(js[i].title)
               //  pro.innerHTML += `
               //          <h1> Title : ${js[i].title}</h1>
               //          <img src="${js[i].image}" alt="pic" height="200px">
               //          <h3> Rs.${js[i].price} </h3>
               //          <h3> Category : ${js[i].category} </h3>
               //          <h4> Description : ${js[i].description} </h4>
               //          <h4> Rating : ${js[i].rating.rate} </h4>`
               // }
               
            })





