import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import request from '../../api';

import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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

    const navigate = useNavigate();

    useEffect(() => {
        let unmounted = false;
        const get_video_detail = async () => {
            const {
                data: { items },
            } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: _videoId,
                },
            });
            if (!unmounted) {
                setDuration(items[0].contentDetails.duration);
                setViews(items[0].statistics.viewCount);
            }
        };
        get_video_detail();
        return () => {
            unmounted = true;
        };
    }, [_videoId]);

    useEffect(() => {
        let unmounted = false;
        const get_channel_icon = async () => {
            const {
                data: { items },
            } = await request('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId,
                },
            });
            if (!unmounted) {
                setChannelIcon(items[0].snippet.thumbnails.default);
            }
        };
        get_channel_icon();
        return () => {
            unmounted = true;
        };
    }, [channelId]);

    const handleClick = () => {
        navigate(`/watch/${_videoId}`);
    };

    return (
        <div className='video' onClick={handleClick}>
            <div className='video__top'>
                {/* <img src={medium.url} alt='video-thumbnail' /> */}
                <LazyLoadImage
                    src={medium.url}
                    effect='blur'
                    alt='video-thumbnail'
                />
                <span className='video__top__duration'>{_duration}</span>
            </div>
            <div className='video__channel'>
                {/* <img src={channelIcon?.url} alt='channel' /> */}
                <LazyLoadImage
                    src={channelIcon?.url}
                    effect='blur'
                    alt='channel'
                />
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
