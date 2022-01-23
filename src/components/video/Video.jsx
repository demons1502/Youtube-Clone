import React, { useEffect, useState } from 'react';
import request from '../../api';

import moment from 'moment';
import numeral from 'numeral';

import './Video.scss';

import { AiFillEye } from 'react-icons/ai';

const Video = ({ video }) => {
    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: { medium },
        },
    } = video;

    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);

    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format('mm:ss');

    const _videoId = id?.videoId || id;

    console.log(_videoId);

    useEffect(() => {
        const get_video_detail = async () => {
            const {
                data: { items },
            } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: _videoId,
                },
            });
            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount);
        };
        get_video_detail();
    }, [_videoId]);

    useEffect(() => {
        const get_channel_icon = async () => {
            const {
                data: { items },
            } = await request('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId,
                },
            });
            setChannelIcon(items[0].snippet.thumbnails.default);
        };
        get_channel_icon();
    }, [channelId]);

    return (
        <div className='video'>
            <div className='video__top'>
                <img src={medium.url} alt='video-thumbnail' />
                <span>{_duration}</span>
            </div>
            <div className='video__channel'>
                <img src={channelIcon?.url} alt='channel' />
                <p>{title}</p>
            </div>
            <div className='video__details'>
                <p>{channelTitle}</p>
                <span>
                    <AiFillEye /> {numeral(views).format('0.a')} Views
                </span>
                <span>{moment(publishedAt).fromNow()}</span>
            </div>
        </div>
    );
};

export default Video;
