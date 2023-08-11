const productos = [
    {
        "id": 1,
        "name": "Camiseta Manchester City Titular 23/24",
        "price": 45,
        "category": "premier",
        "img": "https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw088ef24b/images/large/701225660001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit",
        "stock": 15
    },
    {
        "id": 2,
        "name": "Camiseta Manchester United Titular 22/23",
        "price": 42,
        "category": "premier",
        "img": "https://www.innovasport.com/medias/jersey-adidas-manchester-united-local-2223-is-H13881-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDE1ODd8aW1hZ2UvanBlZ3xpbWFnZXMvaGVhL2hjZi8xMTAzMzU2OTc1NTE2Ni5qcGd8YWVmMzkzYWI1MzdjOTUzZTMzZWUwMmE1ZjEwNDQ0NTE3NjYyYjEzMjRmM2I0YzNmOGExNWQ1ZjkxNDYyOTA0NQ",
        "stock": 12
    },
    {
        "id": 3,
        "name": "Camiseta Arsenal Football Club Titular 23/24",
        "price": 38,
        "category": "premier",
        "img": "https://i1.adis.ws/i/ArsenalDirect/mje8028_f?$810x810$&.jpg",
        "stock": 18
    },
    {
        "id": 4,
        "name": "Camiseta Associazione Calcio Milan Titular 23/24",
        "price": 39,
        "category": "seriea",
        "img": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/770383/01/fnd/THA/fmt/png/AC-Milan-23/24-Home-Jersey",
        "stock": 14
    },
    {
        "id": 5,
        "name": "Camiseta Inter de Milan Titular 22/23",
        "price": 41,
        "category": "seriea",
        "img": "https://store.inter.it/on/demandware.static/-/Sites-inter-master-catalog/default/dw2fccf503/images/large/22N001M0502_01.jpg",
        "stock": 11
    },
    {
        "id": 6,
        "name": "Camiseta Associazione Sportiva Roma Titular 22/23",
        "price": 37,
        "category": "seriea",
        "img": "https://store.asroma.com/media/catalog/product/m/a/maglia_home_elite_spqr_uomo_2022_23.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1000&width=1250&canvas=1250:1000",
        "stock": 20
    },
    {
        "id": 7,
        "name": "Camiseta Bayern de Múnich Titular 23/2",
        "price": 47,
        "category": "bundesliga",
        "img": "https://img.fcbayern.com/image/upload/f_auto,q_auto,w_384/eCommerce/produkte/31701",
        "stock": 17
    },
    {
        "id": 8,
        "name": "Camiseta Borussia Dortmund Titular 23/2",
        "price": 43,
        "category": "bundesliga",
        "img": "https://www.bvbonlineshop.com/media/image/2b/ca/be/76390-645dfca2b3df3_200x200.jpg",
        "stock": 13
    },
    {
        "id": 9,
        "name": "Camiseta Real Madrid Titular Manga Larga 23/24",
        "price": 46,
        "category": "laliga",
        "img": "https://us.shop.realmadrid.com/cdn/shop/products/RMCFMZ0128_08_c4faf998-43da-4ba2-97c1-4a09d86dfe8c_500x480.jpg?v=1686746719",
        "stock": 10
    },
    {
        "id": 10,
        "name": "Camiseta Fútbol Club Barcelona Titular 23/24",
        "price": 50,
        "category": "laliga",
        "img": "data:image/jpeg;base64,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",
        "stock": 10
    }
];
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const date = new Date().toLocaleDateString;
            resolve(productos, date);
        }, 2000);
    });
}

export function getProductData(idURL) {
    return new Promise((resolve, reject) => {
        const productRequested = productos.find(
            (item) => item.id === Number(idURL)
        );
        setTimeout(() => {
            resolve(productRequested);
        }, 2000);
    });
}

export function getCategoryData(categoryURL) {
    return new Promise((resolve, reject) => {
        const categoryRequested = productos.filter((item) => {
            return item.category.toLowerCase() === categoryURL.toLowerCase();
        });
    setTimeout(() => {
        resolve(categoryRequested);
    }, 2000);
    });
}

export default getData