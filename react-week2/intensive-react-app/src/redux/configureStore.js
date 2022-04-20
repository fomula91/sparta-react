import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";
import Post from "./modules/post";
export const history = createBrowserHistory();
// ruducer, add history
const rootReducer = combineReducers({
  user: User,
  post: Post,
  router: connectRouter(history),
});

//middle wares
//const middlewares = [thunk];
const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

// redux devTools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// middlewares binding
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

//store
let store = (initialStore) => createStore(rootReducer, enhancer);
export default store;
