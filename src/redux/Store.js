import { combineReducers, createStore } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./CartReducer";

const RootReducer = combineReducers({
  Cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const Store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(Store);
