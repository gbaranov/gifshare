import React from 'react';
import './GifItem.css';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    VKShareButton,
    ViberShareButton,
    EmailShareButton,
} from 'react-share';
import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    LinkedinIcon,
    VKIcon,
    ViberIcon,
    EmailIcon,
} from 'react-share';

const GifItem = (image) => {
    return (
        <div className="row">
            <div className="card gif-card col-centered" >
                <img className="card-img-top" src={image.gif.images.downsized.url} alt={image.gif.title}></img>
                <div className="row social-block col-centered">
                        <TwitterShareButton url={image.gif.images.downsized.url}>
                            <TwitterIcon size={45} round={true} />
                        </TwitterShareButton>
                        <FacebookShareButton url={image.gif.images.downsized.url}>
                            <FacebookIcon size={45} round={true} />
                        </FacebookShareButton>
                        <WhatsappShareButton url={image.gif.images.downsized.url}>
                            <WhatsappIcon size={45} round={true} />
                        </WhatsappShareButton>
                        <LinkedinShareButton url={image.gif.images.downsized.url}>
                            <LinkedinIcon size={45} round={true} />
                        </LinkedinShareButton>
                        <ViberShareButton url={image.gif.images.downsized.url}>
                            <ViberIcon size={45} round={true} />
                        </ViberShareButton>
                        <VKShareButton url={image.gif.images.downsized.url}>
                            <VKIcon size={45} round={true} />
                        </VKShareButton>
                        <TelegramShareButton url={image.gif.images.downsized.url}>
                            <TelegramIcon size={45} round={true} />
                        </TelegramShareButton>
                        <EmailShareButton url={image.gif.images.downsized.url}>
                            <EmailIcon size={45} round={true} />
                        </EmailShareButton>
                </div>
            </div>
        </div>
    );
};

export default GifItem;
