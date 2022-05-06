import * as actionTypes from "./products.types";

const initialState = {
    products: [{
        id: 1,
        name: "Nike Air Huarache Le",
        image: { url: "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087" },
        price_range: { maximum_price: { final_price: { value:145}}},
        description: {html: "<p>Great sneakers for everyday use!</p>"}
      },
      {
        id: 2,
        name: "PlayStation 5",
        image: { url: "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg" },
        price_range: { maximum_price: { final_price: { value:844}}},
        description: {html: "<p>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</p>"}
      },
      {
        id: 3,
        name: "Xbox Series S 512GB",
        image: { url: "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg" },
        price_range: { maximum_price: { final_price: { value:333}}},
        description: {html: "<p>Gaming console</p>"}
      },
      {
        id: 4,
        name: "iMac 2021",
        image: { url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000" },
        price_range: { maximum_price: { final_price: { value:1688}}},
        description: {html: "<p>The new iMac!</p>"}
      },
      {
        id: 5,
        name: "iPhone 12 Pro",
        image: { url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000" },
        price_range: { maximum_price: { final_price: { value:1000}}},
        description: {html: "<p>This is iPhone 12. Nothing else to say.</p>"}
      },
      {
        id: 6,
        name: "AirPods Pro",
        image: { url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000" },
        price_range: { maximum_price: { final_price: { value:300}}},
        description: {html: "<p>Good for listening music :D!</p>"}
      },
      {
        id: 7,
        name: "AirTag",
        image: { url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000" },
        price_range: { maximum_price: { final_price: { value:120}}},
        description: {html: "<p>Lose your knack for losing things. irTag is an easy way to keep track of your stuff. Attach one to your keys, slip another one in your backpack. And just like that, they’re on your radar in the Find My app. AirTag has your back.</p>"}
      }],
};


export default function productReducer(state = initialState, action) {
    switch(action.type) {  
        case actionTypes.FETCH_PRODUCTS:
            return {
                ...state,
            }
        default:
            return state;
    }
};


