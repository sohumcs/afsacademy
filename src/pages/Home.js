import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import EventSlideshow from "../components/EventSlideshow";
import "../styles/Home.css";
import coachPhoto from "../media/coach_photo.jpg";



const events = [
  { title: "Basketball Workshop", date: "2025-01-15", link: "https://forms.gle/example" },
  { title: "Advanced Training Camp", date: "2025-02-01", link: "https://forms.gle/example" },
];

// Map styles and configuration
const center = {
  lat: 26.8467,
  lng: 80.9462, // Approximate center of Lucknow
};

const locations = [
  {
    title: "Eldeco Elegance",
    position: { lat: 26.863723, lng: 81.013634 },
    address: "Eldeco Elegance, Basketball Court, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
  },
  // Other locations...
  {
    title: "Sky Line Plaza",
    position: { lat: 26.7919, lng: 81.0248 },
    address: "Sky Line Plaza, 1, near Lulu Mall, Golf City, Lucknow, Uttar Pradesh 226030",
  },
  {
    title: "Scholars' Home",
    position: { lat: 26.8653, lng: 81.0003 },
    address: "Scholars' Home, Vipul Khand 3, Vipul Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
  },
  {
    title: "Loyola International School",
    position: { lat: 26.8813, lng: 80.9497 },
    address: "Metro Station, Loyola International School, Badshahnagar, Lucknow, Uttar Pradesh 226006",
  },
  {
    title: "Experion Capital",
    position: { lat: 26.8641, lng: 81.0136 },
    address: "Experion Capital, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
  },
  {
    title: "Shri Ram Memorial School",
    position: { lat: 26.8664, lng: 81.0542 },
    address: "Shri Ram Memorial Public School, Faizabad Rd, near Indira Canal, Lucknow, Uttar Pradesh 236028",
  },
  {
    title: "Parsvnath Planet",
    position: { lat: 26.8681, lng: 81.0153 },
    address: "Parsvnath Planet, Regency Rd, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
  },
];

const Home = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [fade, setFade] = useState(false);
  

  return (
    <div className="home-container">
      {/* Event Slideshow */}
      <EventSlideshow />

      {/* Inspirational Quote Section */}
      <section className="quote-section">
        <div className="quote-text">
          <h2>"Push yourself, because no one else is going to do it for you."</h2>
          <p>
            At AFS Academy, we believe in building champions. Join us for top-notch coaching,
            state-of-the-art facilities, and a community dedicated to excellence. Together, we can
            achieve greatness.
          </p>
        </div>
        <img src={coachPhoto} alt="Coach" className="coach-photo" />
      </section>

      

      
      {/* Location Section */}
      <section className="location-section">
        <h3>Find Us Here</h3>
        <div className="location-row">
          {/* Address List */}
          <div className="address-container">
            <h4>AFS Academy Addresses</h4>
            <ul>
              {locations.map((location, index) => (
                <li key={index}>
                  <strong>{location.title}:</strong> <br />
                  {location.address}
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div className="map-container">
            <LoadScript googleMapsApiKey="AIzaSyDnUf6DMuoe4g3vtuI4K5oI-VamzBK8HOA">
              <GoogleMap
                mapContainerStyle={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
                center={center}
                zoom={12}
              >
                {locations.map((location, index) => (
                  <Marker key={index} position={location.position} title={location.title} />
                ))}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </section>
      {/* Collaborations Section */}
      <section className="collaborations-section">
        <h3>Our Collaborations</h3>
        <div className="collaborations">
          <div className="collab-item">
            <p>Collaboration 1</p>
          </div>
          <div className="collab-item">
            <p>Collaboration 2</p>
          </div>
          <div className="collab-item">
            <p>Collaboration 3</p>
          </div>
        </div>
      </section>

      {/* Personalized Training Section */}
      <section className="training-section">
        <h3>Personalized Training by Ashwani Kumar Gupta</h3>
        <div className="training-content">
          <div className="training-text">
            <p>
              Join Ashwani Kumar Gupta for personalized fitness sessions tailored to your goals.
              Whether you're looking to lose weight, build muscle, or stay fit, we've got you
              covered! Sessions are available both online and offline, including gym training,
              weight loss programs, and more.
            </p>
            <button
              className="book-session-button"
              onClick={() => window.open("https://forms.gle/example", "_blank")}
            >
              Book a Session Now
            </button>
        
          
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Phone: +91 1234567890</p>
          <p>Email: info@afsacademy.com</p>
          <p>Address: Eldeco Elegance, Basketball Court, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh, 226010</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
