import React, { useState, useEffect } from 'react';
import './VideoHorizontal.scss';

import request from '../../api';

import { AiFillEye } from 'react-icons/ai';

import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const VideoHorizontal = ({ video, searchScreen }) => {
    const navigate = useNavigate();
    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            description,
            title,
            publishedAt,
            thumbnails: { medium },
            resourceId,
        },
    } = video;

    const isVideo = id.kind === 'youtube#video';
    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);

    useEffect(() => {
        let unmounted = false;
        const get_video_details = async () => {
            const {
                data: { items },
            } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: id.videoId,
                },
            });
            if (!unmounted) {
                setDuration(items[0].contentDetails.duration);
                setViews(items[0].statistics.viewCount);
            }
        };
        isVideo && get_video_details();
        return () => {
            unmounted = true;
        };
    }, [id, isVideo]);

    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format('mm:ss');

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
        navigate(`/watch/${id.videoId}`);
    };

    const thumbnail = !isVideo && 'videoHorizontal__thumbnail-channel';

    return (
        <Row className='videoHorizontal m-1 py-2' onClick={handleClick}>
            <Col
                xs={6}
                md={searchScreen ? 4 : 6}
                className='videoHorizontal__left'
            >
                <LazyLoadImage
                    src={medium.url}
                    effect='blur'
                    className={`videoHorizontal__thumbnail ${thumbnail} `}
                    wrapperClassName='videoHorizontal__thumbnail-wrapper'
                />
                {isVideo && (
                    <span className='videoHorizontal__duration'>
                        {_duration}
                    </span>
                )}
            </Col>
            <Col
                xs={6}
                md={searchScreen ? 8 : 6}
                className='videoHorizontal__right p-0'
            >
                <p className='videoHorizontal__title mb-1'>{title}</p>
                {isVideo && (
                    <div className='videoHorizontal__details'>
                        <AiFillEye /> {numeral(views).format('0.a')} Views
                        ·&nbsp;
                        {moment(publishedAt).fromNow()}
                    </div>
                )}
                <div className='videoHorizontal__channel d-flex align-items-center my-1'>
                    {isVideo && (
                        <LazyLoadImage
                            src={channelIcon?.url}
                            effect='blur'
                            // className='videoHorizontal__thumbnail'
                            // wrapperClassName='videoHorizontal__thumbnail-wrapper'
                        />
                    )}
                    <p className='mb-0'>{channelTitle}</p>
                </div>
            </Col>
        </Row>
    );
};

export default VideoHorizontal;
