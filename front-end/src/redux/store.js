import { combineReducers, createStore } from "redux";
import formElementReducer, { jsonReducer } from "./reducers/formElementReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['json']
}

const rootReducer = combineReducers({
    formElements: formElementReducer,
    json: jsonReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
