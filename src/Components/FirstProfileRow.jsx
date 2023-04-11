import React from 'react'
import Profile1 from '../Images/77.jpg';
import Profile2 from '../Images/15.jpg'
import Profile3 from '../Images/18.jpg'
import Profile4 from '../Images/77 (1).jpg'
import Profile5 from '../Images/10.jpg'
import Profile6 from '../Images/3 (1).jpg'
import Profile7 from '../Images/75.jpg'
import Profile8 from '../Images/45.jpg'
import Profile9 from '../Images/57.jpg'
import Profile10 from '../Images/24.jpg';

const FirstProfileRow = () => {
  return (
    <div className="container">
        <div className='first-row'>
            <div className="left-profile">
                <img className='profile1' src={Profile1} alt="profile picture" />
                <ul className='list'>
                    <li id='first-child'>60d0fe4f5311236168a109f5</li>
                    <li><b> ms Charlotte Legrand</b></li>
                
                </ul>
            </div>
                    
            <div className="right-profile">
            <img className='profile1' src={Profile2} alt="profile picture" />
                <ul className='list'>
                    <li id='first-child'>60d0fe4f5311236168a109f6</li>
                    <li><b> ms Madison Ambrose</b></li>
                
                </ul>
            </div>
        </div>

        {/* Second row */}
        <div className='first-row'>
            <div className="left-profile">
                <img className='profile1' src={Profile3} alt="profile picture" />
                <ul className='list'>
                    <li id='first-child'>60d0fe4f5311236168a109fa</li>
                    <li><b> ms. Ann Mason</b></li>
                
                </ul>
            </div>
                    
            <div className="right-profile">
            <img className='profile1' src={Profile4} alt="profile picture" />
                <ul className='list'>
                    <li id='first-child'>60d0fe4f5311236168a109fb</li>
                    <li><b> mr Sohan Pierree</b></li>
                
                </ul>
            </div>

        </div>

        {/* Third row */}
        <div className='first-row'>
            <div className="left-profile">
                <img className='profile1' src={Profile5} alt="profile picture" />
                <ul className='list'>
                    <li id='first-child'>60d0fe4f5311236168a109fc</li>
                    <li><b> mr Gonzaga Ribeiro</b></li>
                
                </ul>
            </div>
                    
            <div className="right-profile">
            <img className='profile1' src={Profile6} alt="profile picture" />
                <ul className='list'>
                    <li id='first-child'>60d0fe4f5311236168a109ff</li>
                    <li><b>mrs Josefina Calvo</b></li>
                
                </ul>
            </div>

        </div>

        {/* Fourth row */}
        <div className='first-row'>
            <div className="left-profile">
                <img className='profile1' src={Profile7} alt="profile picture" />
                <ul className='list'>
                    <li id='first-child'>60d0fe4f5311236168a10a00</li>
                    <li><b> mrs Els Ijsseldijk</b></li>
                
                </ul>
            </div>
                    
            <div className="right-profile">
            <img className='profile1' src={Profile8} alt="profile picture" />
                <ul className='list'>
                    <li id='first-child'>60d0fe4f5311236168a10a01</li>
                    <li><b> mr Jesus</b></li>
                
                </ul>
            </div>
        </div>

        {/* Fifth Row */}
        <div className='first-row'>
            <div className="left-profile">
                <img className='profile1' src={Profile9} alt="profile picture" />
                <ul className='list'>
                    <li id='first-child'>60d0fe4f5311236168a10a03</li>
                    <li><b> mr Andri Leclerc</b></li>
                
                </ul>
            </div>
                    
            <div className="right-profile">
            <img className='profile1' src={Profile10} alt="profile picture" />
                <ul className='list'>
                    <li id='first-child'>60d0fe4f5311236168a10a04</li>
                    <li><b> mr Konsta Manninen</b></li>
                
                </ul>
            </div>

        </div>
   </div>
  )
}

export default FirstProfileRow