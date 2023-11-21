import cart1 from './Assets/coco.webp';
import cart2 from './Assets/descarga.jpeg';
import cart3 from './Assets/rogel.jpg';
import cart4 from './Assets/caprese.webp';
import cart5 from './Assets/sand1.jpeg';
import cart6 from './Assets/salmon.jpg';
import cart7 from './Assets/tacc1.png';
import cart8 from './Assets/tacc2.jpg';
import cart9 from './Assets/alf.webp';

const products =[
    {
        id: '1',
        name: 'torta de coco',
        price: 1000,
        category: 'dulces',
        img: cart1,
        stock: 10,
        description: 'Descripcion Torta de coco'
    },
    {
        id: '2',
        name: 'torta de chocolate',
        price: 1000,
        category: 'dulces',
        img: cart2,
        stock: 10,
        description: 'Descripcion Torta de chocolate' 
    },
    {
        id: '3',
        name: 'Rogel',
        price: 1000,
        category: 'dulces',
        img: cart3,
        stock: 10,
        description: 'Descripcion Rogel'
    },
    {
        id: '4',
        name: 'Sandwich Capresse',
        price: 1000,
        category: 'salados',
        img: cart4,
        stock: 10,
        description: 'Descripcion Sandwich capresse'
    },
    {
        id: '5',
        name: 'Sandwich Crudo y Mermelada',
        price: 1000,
        category: 'salados',
        img: cart5,
        stock: 10,
        description: 'Descripcion Sandwich jamon crudo  y m'
    },
    {
        id: '6',
        name: 'Sandwich salmon',
        price: 1000,
        category: 'salados',
        img: cart6,
        stock: 10,
        description: 'Descripcion sand salmon'
    },
    {
        id: '7',
        name: 'Sandwich Crudo TaccOff',
        price: 1000,
        category: 'taccoff',
        img: cart7,
        stock: 10,
        description: 'Descripcion taccoff'
    },
    {
        id: '8',
        name: 'Pizza taccoff',
        price: 1000,
        category: 'taccoff',
        img: cart8,
        stock: 10,
        description: 'Descripcion pizza'
    },
    {
        id: '9',
        name: 'Alfajores taccoff',
        price: 1000,
        category: 'taccoff',
        img: cart9,
        stock: 10,
        description: 'Descripcion alfajores'
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

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod =>prod.category === category))
        }, 300);
    });
};
