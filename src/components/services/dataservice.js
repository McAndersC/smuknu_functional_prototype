const dataservice = {};

dataservice.reviews = [];
dataservice.products = [];

export const getAllReviews = async () => {

    if(dataservice.reviews.length !== 0) return dataservice.reviews
    return fetch(`https://smuknu.webmcdm.dk/reviews`).then(res => res.json()).then( (data) => {

        dataservice.reviews = data;
        return data;

    });
            
};

export const getAllProducts = async () => {
    
    if(dataservice.products.length !== 0) return dataservice.products
    return fetch(`https://smuknu.webmcdm.dk/products`).then(res => res.json()).then( (data) => {

    dataservice.products = data;
    return data;

});
        
}