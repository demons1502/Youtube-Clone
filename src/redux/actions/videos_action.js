import {
    HOME_VIDEOS_REQUEST,
    HOME_VIDEOS_SUCCESS,
    HOME_VIDEOS_FAIL,
} from '../actionType';

import request from '../../api';

export const getPopularVideos = () => async (dispatch) => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST,
        });
        const { data } = await request('/videos', {
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                regionCode: 'VN',
                maxResults: 20,
                pageToken: '',
            },
        });

        console.log(data);

        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
            },
        });
    } catch (e) {
        console.log(e.message);
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload: e.message,
        });
    }
};
