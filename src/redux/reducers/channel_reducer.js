import {
    CHANNEL_DETAIL_FAIL,
    CHANNEL_DETAIL_REQUEST,
    CHANNEL_DETAIL_SUCCESS,
    SET_SUBSCRIPTION_STATUS,
} from '../actionType';

export const channelDetailReducer = (
    state = {
        loading: true,
        channel: {},
        subscriptionStatus: false,
    },
    action
) => {
    const { payload, type } = action;

    switch (type) {
        case CHANNEL_DETAIL_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CHANNEL_DETAIL_SUCCESS:
            return {
                ...state,
                channel: payload,
                loading: false,
            };
        case CHANNEL_DETAIL_FAIL:
            return {
                ...state,
                channel: null,
                loading: false,
                error: payload,
            };
        case SET_SUBSCRIPTION_STATUS:
            return {
                ...state,
                subscriptionStatus: payload,
            };

        default:
            return state;
    }
};
