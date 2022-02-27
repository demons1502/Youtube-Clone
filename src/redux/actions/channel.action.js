import request from '../../api';
import {
    CHANNEL_DETAIL_FAIL,
    CHANNEL_DETAIL_REQUEST,
    CHANNEL_DETAIL_SUCCESS,
    SET_SUBSCRIPTION_STATUS,
} from '../actionType';

export const getChannelDetail = (id) => async (dispatch) => {
    try {
        dispatch({
            type: CHANNEL_DETAIL_REQUEST,
        });

        const { data } = await request('/channels', {
            params: {
                part: 'snippet,statistics,contentDetails',
                id,
            },
        });

        console.log(data);

        dispatch({
            type: CHANNEL_DETAIL_SUCCESS,
            payload: data.items[0],
        });
    } catch (e) {
        dispatch({
            type: CHANNEL_DETAIL_FAIL,
            payload: e.message,
        });
    }
};

export const checkSubscriptionStatus = (id) => async (dispatch, getState) => {
    try {
        const { data } = await request('/subscriptions', {
            params: {
                part: 'snippet',
                forChannelId: id,
                mine: true,
            },
            headers: {
                Authorization: `Bearer ${getState().auth.accessToken}`,
            },
        });

        dispatch({
            type: SET_SUBSCRIPTION_STATUS,
            payload: data.items.length !== 0,
        });

        console.log(data);
    } catch (e) {
        console.log(e.response?.data);
    }
};
