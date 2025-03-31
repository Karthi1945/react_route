

const URL_API = 'https://fakestoreapi.com/';

export  var fetchData = async (url)=>{
    try{
        const response = await fetch(`${URL_API}${url}`);
        const products = await response.json();
        console.log('data_fetched',products)
        return products
        
    }catch{
        return new Error('the Api url is invalid');
    }

}




