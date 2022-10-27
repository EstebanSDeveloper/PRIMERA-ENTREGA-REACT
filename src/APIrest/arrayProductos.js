const productos = [
    {
    "name": "Pokemon Cereal",
    "image" : 'https://cdn.shopify.com/s/files/1/0579/1524/4753/products/pokemoncereal_2000x2000.jpg?v=1629386021',
    "price": 2.2,
    "category": "sugar",
    "id": 20,
    },
    {
    "name": "Fruity Pebbles",
    "image": "https://cdn.shopify.com/s/files/1/0579/1524/4753/products/fruitypebbles_2000x2000.jpg?v=1629386488",
    "price": 2.50,
    "category": "low-sugar",
    "id": 21,
    },
    {
    "name": "Chocapic Duo",
    "image": "https://cdn.shopify.com/s/files/1/0579/1524/4753/products/chocapicduo_2000x2000.jpg?v=1627663679",
    "price": 2.50,
    "category": "sugar",
    "id": 22,
    },
    {
    "name": "Froot Loops Colour Mix Up",
    "image": "https://cdn.shopify.com/s/files/1/0579/1524/4753/products/frootloopscolourmixup_2000x2000.jpg?v=1660319305",
    "price": 2.50,
    "category": "low-sugar",
    "id": 23,
    }
    ]

    export const getProductByID = (id) => {
        return productos[id]
    }

    
    export default productos

