import React from 'react'
import './Recommended.css'
import thumbnail11 from '../../assets/thumbnail11.jpg'
import thumbnail12 from '../../assets/thumbnail12.jpg'
import thumbnail13 from '../../assets/thumbnail13.jpg'
import thumbnail14 from '../../assets/thumbnail14.jpg'
import thumbnail15 from '../../assets/thumbnail15.jpg'
import thumbnail16 from '../../assets/thumbnail16.jpg'
import thumbnail17 from '../../assets/thumbnail17.jpg'
import thumbnail18 from '../../assets/thumbnail18.jpg'

const Recommended = () => {
    return (
        <div className='recommended'>
            <div className="side-video-list">
                <img src={thumbnail11} alt="" />
                <div className="vid-info">
                    <h4>Karan Aujla's Concert Night</h4>
                    <p>Karan Aujla</p>
                    <p>10M Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail12} alt="" />
                <div className="vid-info">
                    <h4>Best Channel that helps you to be a web developer </h4>
                    <p>GreatStack</p>
                    <p>199K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail14} alt="" />
                <div className="vid-info">
                    <h4>Best channel to learn stock market </h4>
                    <p>Crypto</p>
                    <p>1.5M Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail13} alt="" />
                <div className="vid-info">
                    <h4>"Best channel to learn meditation" </h4>
                    <p>Spirituality</p>
                    <p>221K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail15} alt="" />
                <div className="vid-info">
                    <h4>Happy Women's Day</h4>
                    <p>Women:Our Pride</p>
                    <p>900K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail16} alt="" />
                <div className="vid-info">
                    <h4>Meditation and Yoga</h4>
                    <p>Calmness</p>
                    <p>299K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail17} alt="" />
                <div className="vid-info">
                    <h4>A day out with Lionel Messi</h4>
                    <p>Vogue TV</p>
                    <p>1M Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail18} alt="" />
                <div className="vid-info">
                    <h4>Design a Thumbnail</h4>
                    <p>Web Design</p>
                    <p>199K Views</p>
                    
                </div>
            </div>
            <div className="side-video-list">
            <img src={thumbnail12} alt="" />
            <div className="vid-info">
                <h4>Best Channel that helps you to be a web developer </h4>
                <p>GreatStack</p>
                <p>199K Views</p>
            </div>
        </div>

        </div>
    )
}

export default Recommended
