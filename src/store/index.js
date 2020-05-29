import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";
import AsyncStorage from "@react-native-community/async-storage";

import { reducers } from "./ducks";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, applyMiddleware(createLogger()));
const persistor = persistStore(store);

export { store, persistor };
