import { createStore, applyMiddleware } from "redux";
import rootReducer from "./RootReducer";
import { persistStore, persistReducer } from "redux-persist";
import thunk from 'redux-thunk';
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:'persist-storage',
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store)

export default store;
export {persistor};