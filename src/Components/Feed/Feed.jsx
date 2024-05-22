import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import thumbnail11 from '../../assets/thumbnail11.jpg'
import thumbnail12 from '../../assets/thumbnail12.jpg'
import thumbnail13 from '../../assets/thumbnail13.jpg'
import thumbnail14 from '../../assets/thumbnail14.jpg'
import thumbnail15 from '../../assets/thumbnail15.jpg'
import thumbnail16 from '../../assets/thumbnail16.jpg'
import thumbnail17 from '../../assets/thumbnail17.jpg'
import thumbnail18 from '../../assets/thumbnail18.jpg'

import {Link} from 'react-router-dom'


const Feed = () => {
    return (
        <div className='Feed'>
            <Link to={`video/20/4521`} className='card'> 
                <img src={thumbnail1} alt='' />
                <h2>"Best channel to learn coding that help you to be a web developer"</h2>
                <h3>Greatstack</h3>
                <p>125k views &bull; 2 days ago </p>
            </Link>
            <div className='card'>
                <img src={thumbnail12} alt='' />
                <h2>"Cultural Marvels Across Continents</h2>
                <h3>Globetrotter Tales</h3>
                <p>100k views &bull; a month ago </p>
            </div>
            <div className='card'>
                <img src={thumbnail3} alt='' />
                <h2>"Polar Expeditions: Frozen Frontiers Worldwide"</h2>
                <h3> Polar Explorer</h3>
                <p>150k views &bull; 12 days ago </p>
            </div>
            <div className='card'>
                <img src={thumbnail4} alt='' />
                <h2>"Mountain Majesty: Peaks Across the Globe</h2>
                <h3>Summit Seekers</h3>
                <p>50k views &bull; 25 days ago </p>
            </div>
            <div className='card'>
                <img src={thumbnail5} alt='' />
                <h2>"World Festivals: Celebrating Global Cultures"</h2>
                <h3>Festivity Channel</h3>
                <p>200k views &bull; an year ago </p>
            </div>
            <div className='card'>
                <img src={thumbnail6} alt='' />
                <h2>"Coastal Escapes: Seaside Bliss Worldwide"</h2>
                <h3>Coastal Wanderer</h3>
                <p>152k views &bull; 28 days ago </p>
            </div>
            <div className='card'>
                <img src={thumbnail7} alt='' />
                <h2>"Hidden Gems: Unveiling Global Treasures "</h2>
                <h3>Discovery Odyssey</h3>
                <p>225k views &bull; 1 month ago </p>
            </div>
            <div className='card'>
                <img src={thumbnail8} alt='' />
                <h2>"Island Hopping: Tropical Paradises Worldwide"</h2>
                <h3>Island Explorer</h3>
                <p>195k views &bull; 2 days ago </p>
            </div>
            <div className='card'>
                <img src={thumbnail11} alt='' />
                <h2>"Be a web developer"</h2>
                <h3>Full stack</h3>
                <p>109k views &bull; 25 days ago </p>
            </div>
            <div className='card'>
                <img src={thumbnail2} alt='' />
                <h2>"River Rambles: Waterways Across the Globe"</h2>
                <h3>River Wanderer</h3>
                <p>155k views &bull; 3 days ago </p>
            </div>
            <div className='card'>
                <img src={thumbnail13} alt='' />
                <h2>"Best channel to learn meditation"</h2>
                <h3>Spirituality</h3>
                <p>150k views &bull; 20 days ago </p>
            </div>
           
            <div className='card'>
                <img src={thumbnail12} alt='' />
                <h2>Best channel to learn stock market</h2>
                <h3>Crypto</h3>
                <p>1.5M views &bull; 2 days ago </p>
            </div>
            <div className='card'>
                <img src={thumbnail16} alt='' />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull; 2 days ago </p>
            </div>
            <div className='card'>
                <img src={thumbnail17} alt='' />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull; 2 days ago </p>
            </div>
            <div className='card'>
                <img src={thumbnail8} alt='' />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull; 2 days ago </p>
            </div>
            <div className='card'>
                <img src={thumbnail15} alt='' />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Greatstack</h3>
                <p>15k views &bull; 2 days ago </p>
            </div>
            <div className='card'>
                <img src={thumbnail2} alt='' />
                <h2>Marathon in Australia</h2>
                <h3>Worldwide</h3>
                <p>105k views &bull; 2 days ago </p>
            </div>
            <div className='card'>
                <img src={thumbnail3} alt='' />
                <h2>Shopping Vlog </h2>
                <h3>Kee Zee</h3>
                <p>150k views &bull; an year ago </p>
            </div>
            <div className='card'>
                <img src={thumbnail18} alt='' />
                <h2>Best channel to learn thumbnail</h2>
                <h3>Design Web</h3>
                <p>305k views &bull; 12 days ago </p>
            </div>
        </div>
    )
}

export default Feed