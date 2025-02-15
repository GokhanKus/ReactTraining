import { createSlice } from '@reduxjs/toolkit'

const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
}

const initialState = {
    products: getBasketFromStorage(),
    drawer: false,
    totalPrice: 0
}


const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id);
            //ornegin x urununden sepete 2 tane ekledik ondan sonra 3 tane daha ekledik o zaman total 5 yazdırmamız lazım onun logini isletildi
            if (findProduct) {
                //daha onceden eklenmistir
                const extractedProducts = state.products.filter((product) => product.id !== action.payload.id);
                findProduct.count += action.payload.count;
                state.products = [...extractedProducts, findProduct];
                writeFromBasketToStorage(state.products);

            }
            else {
                state.products = [...state.products, action.payload];
                writeFromBasketToStorage(state.products);
            }
        },
        removeFromTheBasket: (state, action) => {
            const filteredProducts = state.products.filter((product) => product.id !== action.payload);
            state.products = filteredProducts;

            writeFromBasketToStorage(state.products); // LocalStorage'ı güncelle
        },
        setDrawer: (state) => {
            state.drawer = !state.drawer;
        },
        calculateBasket: (state) => {
            state.totalPrice = 0;
            state.products && state.products.map((product) => {
                state.totalPrice += product.price * product.count;
            })
        }
    }
})

export const { addBasket, setDrawer, calculateBasket, removeFromTheBasket } = basketSlice.actions

export default basketSlice.reducer