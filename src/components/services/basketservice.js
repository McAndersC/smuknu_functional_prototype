// Her ligger vores funktioner til at håndtere kurven i localstorage
const getBasket = async () => {

    let basket = localStorage.getItem("basket");
    console.log('GetBasket', basket);
    return JSON.parse(basket);

};

// Gemmer kurven i localstorage
const saveBasket = async (basket) => {

    localStorage.setItem("basket", JSON.stringify(basket));

};

// Fjerner et produkt fra kurven
const removeFromBasket = async (id) => {

    const basket = await getBasket();

    if(basket !== null) {
        
        // Finder produktet i kurven
        let productIndex = basket.findIndex((item) => item.id === id);

        if(productIndex !== -1) {

            // Sletter produktet fra kurven
            let deletedProduct = basket.splice(productIndex, 1);

            // Gemmer kurven i localstorage
            saveBasket(basket);

            return basket;

        } else {

            return "No product found"

        } 
        
    };

};

// Tilføjer et produkt til kurven
const addToBasket = async (id) => {

    const basket = await getBasket();

    // Kurv er tom ikke oprettet overhovedet.
    if(basket === null) {

        let newBasket = [
            {
                id: id, 
                quantity: 1
            }
        ]

        // Gemmer kurven i localstorage
        saveBasket(newBasket);

        // Returnerer kurven
        return JSON.stringify(newBasket);

    // Kurv er ikke tom
    } else {

        // Vi finder produktet i kurven
        let product = basket.find((item) => item.id === id);

        // Hvis produktet findes i kurven
        if(product) {
            // Vi opdaterer antallet (quantity) af produktet
            product.quantity = product.quantity + 1;
        // Hvis produktet ikke findes i kurven
        } else {
            // Vi tilføjer (push´er) produktet til kurven (array`et)
            basket.push({id: id, quantity: 1})

        }
    
        // Gemmer kurven i localstorage
        saveBasket(basket);

        // Returnerer kurven
        return JSON.stringify(basket);
    }
      
};
  
// Vi eksporterer funktionerne.
export {
    removeFromBasket, 
    addToBasket,
    getBasket
} 

