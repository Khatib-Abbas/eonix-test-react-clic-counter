import {compose , createStore,applyMiddleware,} from "redux";
import {rootReducer} from "./root-reduer";
import {logger} from "redux-logger";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./root-saga";
import {root} from "eslint-config-react-app";
// root-reducer

const sagaMiddleware = createSagaMiddleware()
const middleWares =[
    process.env.NODE_ENV !== 'production' && logger, sagaMiddleware
].filter(Boolean)

const composedEnhancers = compose (applyMiddleware(...middleWares))
export const store =
    createStore(
        rootReducer,
        undefined,
        composedEnhancers
    )
sagaMiddleware.run(rootSaga)



