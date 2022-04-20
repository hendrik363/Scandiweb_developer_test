import * as actionTypes from "./products.types";

const initialState = {
    products: [{
        id: 1,
        name: "Nike Air Huarache Le",
        gallery: [
          "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
          "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
          "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
          "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
          "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087"
        ],
        price: 145,
        description: "Great sneakers for everyday use!"
      },
      {
        id: 2,
        name: "PlayStation 5",
        gallery: [
          "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg"
        ],
        price: 844,
        description: "A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha"
      },
      {
        id: 3,
        name: "Xbox Series S 512GB",
        gallery: [
          "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg"
        ],
        price: 333,
        description: "Gaming console"
      },
      {
        id: 4,
        name: "iMac 2021",
        gallery: [
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000"
        ],
        price: 1688,
        description: "The new iMac!"
      },
      {
        id: 5,
        name: "iPhone 12 Pro",
        gallery: [
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000"
        ],
        price: 1000,
        description: "This is iPhone 12. Nothing else to say."
      },
      {
        id: 6,
        name: "AirPods Pro",
        gallery: [
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000"
        ],
        price: 300,
        description: "Good for listening music :D!"
      },
      {
        id: 7,
        name: "AirTag",
        gallery: [
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000"
        ],
        price: 120,
        description: "Lose your knack for losing things. irTag is an easy way to keep track of your stuff. Attach one to your keys, slip another one in your backpack. And just like that, they’re on your radar in the Find My app. AirTag has your back."
      },
      {
        id: 8,
        name: "Jacket",
        gallery: [
          "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
          "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
          "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
          "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
          "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
          "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
          "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png"
        ],
        price: 518,
        description: "Awesome winter jacket"
      },],
      product: null
};


export default function productReducer(state = initialState, action) {
    switch(action.type) {  
        case actionTypes.FETCH_PRODUCTS:
            return {
                ...state,
            }
        case actionTypes.FETCH_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state;
    }
};


