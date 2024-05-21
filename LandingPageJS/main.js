const products = [
  {
      name: 'PcCom Revolt',
      price: 1.149,
      stars: "⭐⭐⭐⭐",
      reviews: 9,
      seller: "Pccomponentes",
      image:"https://thumb.pccomponentes.com/w-150-150/articles/1067/10674386/1136-pccom-revolt-4050-intel-core-i5-13500h-16gb-500gb-ssd-rtx-4050-156-windows-11-home-comprar.jpg",
      price: 1149,
      
  },
  {
  name:"HP 15-fc0084ns ",
  price:399,
  stars:"⭐⭐⭐⭐",
  reviews:58,
  seller:"PcComponentes",
  image:"https://thumb.pccomponentes.com/w-150-150/articles/1073/10733260/1738-hp-15-fc0084ns-amd-ryzen-3-7320u-8gb-256gb-ssd-156.jpg",
  
  },
  {
      name:"ASUS VivoBook 15 ",
      price:899,
      stars:"⭐⭐⭐⭐⭐",
      reviews:2,
      seller:"PcComponentes",
      image:"https://thumb.pccomponentes.com/w-150-150/articles/1081/10811721/1389-asus-vivobook-15-f1504va-nj766w-intel-core-i7-1355u-16gb-1tb-ssd-156.jpg",
      
      },
      {
          name:"HP 155-EQ2189NS",
          price:499,
          stars:"⭐⭐⭐⭐⭐",
          reviews:5,
          seller:"PcComponentes",
          image:"https://thumb.pccomponentes.com/w-150-150/articles/1081/10815580/1603-hp-15s-eq2189ns-amd-ryzen-5-5500u-16gb-1tb-ssd-156.jpg",
         
          },
          {
              name:"Lenovo ThinkBook 15 ",
              price:529,
              stars:"⭐⭐⭐⭐⭐",
              reviews:10,
              seller:"PcComponentes",
              image:"https://thumb.pccomponentes.com/w-150-150/articles/1072/10723717/1524-lenovo-thinkbook-15-g4-aba-amd-ryzen-5-5625u-8gb-256gb-ssd-156.jpg",
              
              },
              {
                  name:"Lenovo IdeaPad Slim 3",
                  price:488,
                  stars:"⭐⭐⭐⭐",
                  reviews:25,
                  seller:"PcComponentes",
                  image:"https://thumb.pccomponentes.com/w-150-150/articles/1082/10824932/1657-lenovo-ideapad-slim-3-15ian8-intel-core-i3-n305-8gb-256-gb-ssd-156-efaed2d8-acff-425c-b265-45be566bdeb9.jpg",
                  
                  },
                  {
                      name:"MSI Creator M16 ",
                      price:2198.99,
                      stars:"⭐⭐⭐⭐⭐",
                      reviews:1,
                      seller:"PcComponentes",
                      image:"https://thumb.pccomponentes.com/w-150-150/articles/1082/10820056/1908-msi-creator-m16-hx-c14vfg-282es-intel-core-i9-14900hx-64gb-2tb-ssd-rtx-4060-16.jpg",
                      price:2198,
                     
                      },
                      {
                          name:"Raze Blade 18 ",
                          
                          price:4399,
                          stars:"⭐⭐⭐⭐⭐",
                          reviews:3,
                          seller:"PcComponentes",
                          image:"https://thumb.pccomponentes.com/w-150-150/articles/1064/10644272/127-razer-blade-18-qhd-240hz-intel-core-i9-13950hx-32gb-1tb-ssd-rtx-4080-18.jpg",
                          
                          },
                          {
                              name:"Alurin Flex Advance",
                              price:599.99,
                              stars:"⭐⭐⭐⭐",
                              reviews:75,
                              seller:"PcComponentes",
                              image:"https://thumb.pccomponentes.com/w-150-150/articles/1074/10740197/1232-alurin-flex-advance-intel-core-i5-1155g7-16gb-1tb-ssd-14-windows-11-home-comprar.jpg",
                              price:599,
                              
                            },
                            {
                              name:"Samsung Galaxy Book3 Ultra",
                              price:3698,
                                  stars:"⭐⭐⭐⭐⭐",
                                  reviews:1,
                                  seller:"PcComponentes",
                                  image:"https://thumb.pccomponentes.com/w-150-150/articles/1070/10708329/1667-samsung-galaxy-book3-ultra-intel-evo-core-i9-13900h-32gb-1tb-ssd-rtx-4070-16.jpg",
                                  price:3699
                                  },
                                  
  ];
const searchBar = document.getElementById('searchfilter')
const productsContainer = document.querySelector('.card-container')
const productsSection =  document.querySelector('.card')
const priceFilterButton = document.getElementById('btn')

//  FILTER //

let maxPrice = 1000;
 const productFilter = () => {
 const isFilteredProduct = products.filter(product => product.price > maxPrice);
 filteredProducts(isFilteredProduct);
}
 priceFilterButton.addEventListener('click', productFilter);
 filteredProducts(products);
// SEARCH FILTER //

const searchProducts = () => {
  const query = searchBar.value.toLowerCase();

}

// PRODUCT CARDS // 
  function filteredProducts(array ){

    productsSection.innerHTML = ''
  
   array.forEach((product) => {
const productContainer = document.createElement('div')
const productDiv  = document.createElement('div')
productContainer.className = 'card-container'
productDiv.className = 'product'

const productHTML = `
<img src="${product.image}" alt="${product.name}">  
<h3> ${product.name} </h3>
<p> Precio: ${product.price} </p>
<p> Rate: ${product.stars} </p>
<p> Reviews: ${product.reviews}</p>
<p> Seller: ${product.seller} </p>

`

productDiv.innerHTML = productHTML;
productsSection.append(productDiv)
  })
} 

filteredProducts(products);

