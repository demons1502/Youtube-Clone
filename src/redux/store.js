import { createStore, applyMiddleware, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './reducers/auth_reducer';
import { homeVideosReducer } from './reducers/videos_reducer';
import { selectedVideoReducer } from './reducers/videos_reducer';
import { channelDetailReducer } from './reducers/channel_reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetail: channelDetailReducer,
});
const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
