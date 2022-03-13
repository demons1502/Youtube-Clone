import {
    COMMENT_LIST_REQUEST,
    COMMENT_LIST_FAIL,
    COMMENT_LIST_SUCCESS,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAIL,
} from '../actionType';
import request from '../../api';

export const getCommentsOfVideoById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: COMMENT_LIST_REQUEST,
        });

        const { data } = await request('/commentThreads', {
            params: {
                part: 'snippet',
                videoId: id,
            },
        });

        console.log(data);

        dispatch({
            type: COMMENT_LIST_SUCCESS,
            payload: data.items,
        });
    } catch (e) {
        dispatch({
            type: COMMENT_LIST_FAIL,
            payload: e.message,
        });
    }
};

export const addComment = (id, text) => async (dispatch, getState) => {
    try {
        const obj = {
            snippet: {
                videoId: id,
                topLevelComment: {
                    snippet: {
                        textOriginal: text,
                    },
                },
            },
        };

        await request.post('/commentThreads', obj, {
            params: {
                part: 'snippet',
            },
            headers: {
                Authorization: `Bearer ${getState().auth.accessToken}`,
            },
        });

        dispatch({
            type: CREATE_COMMENT_SUCCESS,
        });

        setTimeout(() => {
            dispatch(getCommentsOfVideoById(id));
        }, 3000);
    } catch (e) {
        dispatch({
            type: CREATE_COMMENT_FAIL,
            payload: e.response.data.message,
        });
    }
};
