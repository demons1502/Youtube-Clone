import moment from 'moment';
import numeral from 'numeral';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    checkSubscriptionStatus,
    getChannelDetail,
} from '../../redux/actions/channel.action';
import './VideoMetaData.scss';

import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import ShowMoreText from 'react-show-more-text';
import { useSelector } from 'react-redux';

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
    const { channelId, channelTitle, description, publishedAt, title } =
        snippet;
    const { viewCount, likeCount, dislikeCount } = statistics;

    const dispatch = useDispatch();

    const subscriptionStatus = useSelector(
        (state) => state.channelDetail.subscriptionStatus
    );

    console.log(subscriptionStatus);

    useEffect(() => {
        dispatch(getChannelDetail(channelId));
        dispatch(checkSubscriptionStatus(channelId));
    }, [dispatch, channelId]);

    const { snippet: channelSnippet, statistics: channelStatistics } =
        useSelector((state) => state.channelDetail.channel);

    return (
        <div className='videoMetaData py-2'>
            <div className='videoMetaData__top'>
                <h5>{title}</h5>
                <div className='d-flex justify-content-between align-item-center py-1'>
                    <span>
                        {numeral(viewCount).format('0.a')} Views ·&nbsp;
                        {moment(publishedAt).fromNow()}
                    </span>
                    <div>
                        <span className='mr-1'>
                            <MdThumbUp size={26} />
                            &nbsp;
                            {numeral(likeCount).format('0.a')}
                        </span>
                        <span className='mr-1'>
                            <MdThumbDown size={26} />
                            &nbsp;
                            {numeral(dislikeCount).format('0.a')}
                        </span>
                    </div>
                </div>
            </div>
            <div className='videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3'>
                <div className='d-flex'>
                    <img
                        src={channelSnippet?.thumbnails?.default?.url}
                        alt=''
                        className='rounded-circle mr-3'
                    />
                    <div className='d-flex flex-column'>
                        <span className='text-light'>{channelTitle}</span>
                        <span>
                            {numeral(channelStatistics?.subscriberCount).format(
                                '0.a'
                            )}{' '}
                            Subscribers
                        </span>
                    </div>
                </div>
                <button
                    className={`btn border-0 p-2 m-2 ${
                        subscriptionStatus && 'btn-gray'
                    }`}
                >
                    {subscriptionStatus ? 'SUBSCRIBED' : 'SUBSCRIBE'}
                </button>
            </div>
            <div className='videoMetaData__description'>
                <ShowMoreText
                    lines={3}
                    more='SHOW MORE'
                    less='SHOW LESS'
                    anchorClass='showMoreText'
                    expanded={false}
                >
                    {description}
                </ShowMoreText>
            </div>
        </div>
    );
};

export default VideoMetaData;
