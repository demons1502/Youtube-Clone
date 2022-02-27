import {
    HOME_VIDEOS_REQUEST,
    HOME_VIDEOS_SUCCESS,
    HOME_VIDEOS_FAIL,
    SELECTED_VIDEO_REQUEST,
    SELECTED_VIDEO_SUCCESS,
    SELECTED_VIDEO_FAIL,
} from '../actionType';

import request from '../../api';

export const getPopularVideos = () => async (dispatch, getState) => {
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
                pageToken: getState().homeVideos.nextPageToken,
            },
        });

        console.log(data);

        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: 'ALL',
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

export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST,
        });
        const { data } = await request('/search', {
            params: {
                part: 'snippet',
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken,
                q: keyword,
                type: 'video',
            },
        });

        console.log(data);

        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: keyword,
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

export const getVideoById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: SELECTED_VIDEO_REQUEST,
        });

        const { data } = await request('/videos', {
            params: {
                part: 'snippet,statistics',
                id: id,
            },
        });

        console.log(data);

        dispatch({
            type: SELECTED_VIDEO_SUCCESS,
            payload: data.items[0],
        });
    } catch (e) {
        dispatch({
            type: SELECTED_VIDEO_FAIL,
            payload: e.message,
        });
    }
};
