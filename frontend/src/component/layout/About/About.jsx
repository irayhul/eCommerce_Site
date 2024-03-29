import React from 'react'
import "./About.css"
const About = () => {
  return (
<div className="we-are-block">
  <div id="about-us-section">
    <div className="about-us-image">
      <img src="https://labelconcepts.com.au/transforming-surfaces/wp-content/uploads/2020/02/Herbalife-HQ-Hero-1-uai-1000x562-1.jpg" width={808} height={458} alt="Lobby Image" />
    </div>
    <div className="about-us-info">
      <h2>We are Digital Upgrade</h2>
      <p>Digital Upgrade, located in Evansville, IN, makes it easy for businesses to create and manage their digital presence and logistics, meaning we can make your business more efficient and profitable! We believe in our community and want to help our local business economy grow and expand. We believe in our clients, and want to assist in their digital success. The D-UP team grades ourselves on outcomes, not on sales.</p>
      <a href="#" title="About Us Button">ABOUT US</a>
    </div>
  </div>
  <div id="history-section">
    <div className="history-image">
      <img src="https://thearchitectsdiary.com/wp-content/uploads/2020/01/Nutrition-Center-TA-The-Architects-Diary-4.jpg" width={951} height={471} alt="Building Pic" />
    </div>
    <div className="history-info">
      <h2>Preserving Local History</h2>
      <p>In 2018, technology companies, Desktop Doctors &amp; Digital Upgrade found a new place to call home, at 816 N. 9th Ave. Since the takeover of the 118-year-old building (formally Stippler Tool &amp; Supply and Crown Chair Company), there have been many renovations completed to preserve this local piece of Evansville, IN history.</p>
      <a href="#" title="History Button">HISTORY</a>
    </div>
  </div>
</div>


  )
}

export default About