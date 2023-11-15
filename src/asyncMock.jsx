const products =[
    {
        id: '1',
        name: 'torta de coco',
        price: 1000,
        category: 'dulce',
        img: 'https://www.recetasnestle.com.uy/recetas/tarta-de-coco-y-dulce-de-leche',
        stock: 10,
        description: 'Descripcion Torta de coco'
    },
    {
        id: '1',
        name: 'torta de chocolate',
        price: 1000,
        category: 'dulce',
        img: 'https://cocinerosargentinos.com/pasteleria/torta-de-chocolate-2',
        stock: 10,
        description: 'Descripcion Torta de chocolate' 
    },
    {
        id: '1',
        name: 'Rogel',
        price: 1000,
        category: 'dulce',
        img: 'https://www.tantesaraonline.com/productos/rogel1/',
        stock: 10,
        description: 'Descripcion Rogel '
}
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 300);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod =>prod.id === productId))
        }, 300);
    });
};
