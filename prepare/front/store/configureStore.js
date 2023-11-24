import { createWrapper } from "next-redux-wrapper";
import reducer from "../reducers";
import rootSaga from "../sagas";
import { createStore } from "redux";
import { compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

const loggerMiddleware =
    ({ dispatch, getState }) =>
    (next) =>
    (action) => {
        if (typeof action === "function") {
            return action(dispatch, getState);
        }
        return next(action);
    };
const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware];
    const enhancer =
        process.env.NODE_ENV === "production"
            ? compose(applyMiddleware(...middlewares)) //배포용
            : composeWithDevTools(applyMiddleware(...middlewares)); //개발용
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    console.log("Store created:", store); // 확인용 로그

    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === "development",
});
export default wrapper;
