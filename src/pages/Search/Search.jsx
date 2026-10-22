import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

const Search = () => {
  const navigate = useNavigate();

  return (
    <div className="search-page">
      
      {/* --- TOP SEARCH BAR --- */}
      <div className="top-search-bar">
        <div className="container top-search-container">
          <div className="search-location">
            <span>📍</span> Jaipur, Rajasthan <span>▼</span>
          </div>
          <div className="search-input-wrapper">
            <span>🔍</span>
            <input type="text" defaultValue="AC Service" />
          </div>
          <button className="top-search-btn">🔍</button>
        </div>
      </div>

      <div className="container search-layout">
        
        {/* --- LEFT SIDEBAR (FILTERS) --- */}
        <div className="filters-sidebar">
          <div className="filter-header">
            <h3>Filters</h3>
            <button className="clear-btn">Clear All</button>
          </div>
          
          <div className="filter-group">
            <h4>Category</h4>
            <label><input type="checkbox" defaultChecked /> AC Service (42)</label>
            <label><input type="checkbox" /> AC Repair (28)</label>
            <label><input type="checkbox" /> AC Installation (16)</label>
            <label><input type="checkbox" /> AC Gas Refill (12)</label>
          </div>

          <div className="filter-group">
            <h4>Price Range</h4>
            <input type="range" min="0" max="2000" className="price-slider" />
            <div className="price-labels">
              <span>₹0</span>
              <span>₹2000</span>
            </div>
          </div>

          <div className="filter-group">
            <h4>Rating</h4>
            <label><input type="checkbox" /> ⭐⭐⭐⭐⭐ 4.5 & above</label>
            <label><input type="checkbox" /> ⭐⭐⭐⭐ 4.0 & above</label>
            <label><input type="checkbox" /> ⭐⭐⭐ 3.5 & above</label>
          </div>

          <div className="filter-group">
            <h4>Availability</h4>
            <label><input type="checkbox" defaultChecked /> Today</label>
            <label><input type="checkbox" /> Tomorrow</label>
            <label><input type="checkbox" /> This Week</label>
          </div>

          <div className="filter-group">
            <h4>Service Type</h4>
            <label><input type="checkbox" defaultChecked /> Split AC</label>
            <label><input type="checkbox" /> Window AC</label>
            <label><input type="checkbox" /> Central AC</label>
          </div>
        </div>

        {/* --- CENTER PROVIDERS LIST --- */}
        <div className="providers-section">
          
          <div className="providers-header">
            <h2>42 AC Service Professionals in Jaipur</h2>
            <div className="sort-dropdown">
              <span>Sort by:</span>
              <select><option>Recommended</option></select>
            </div>
          </div>

          <div className="providers-list">
            {/* Provider 1 */}
            <div className="provider-card">
              <img src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Rakesh" className="provider-img" />
              <div className="provider-info">
                <h3>Rakesh Kumar</h3>
                <div className="provider-rating"><span className="star">★ 4.8</span> (256 reviews)</div>
                <p className="provider-tags">✅ Verified <span>• 5+ Yrs Exp.</span></p>
                <p className="provider-distance">📍 2.1km away • ⏱ 15-30 min</p>
              </div>
              <div className="provider-action">
                <div className="price">₹299 <span>(Starting)</span></div>
                <button className="book-now-btn" onClick={() => navigate('/service')}>Book Now</button>
              </div>
            </div>

            {/* Provider 2 */}
            <div className="provider-card">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Shubham" className="provider-img" />
              <div className="provider-info">
                <h3>Shubham AC Solutions</h3>
                <div className="provider-rating"><span className="star">★ 4.7</span> (190 reviews)</div>
                <p className="provider-tags">✅ Verified <span>• 5+ Yrs Exp.</span></p>
                <p className="provider-distance">📍 3.5km away • ⏱ 30-50 min</p>
              </div>
              <div className="provider-action">
                <div className="price">₹349 <span>(Starting)</span></div>
                <button className="book-now-btn" onClick={() => navigate('/service')}>Book Now</button>
              </div>
            </div>

            {/* Provider 3 */}
            <div className="provider-card">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="CoolTech" className="provider-img" />
              <div className="provider-info">
                <h3>CoolTech Services</h3>
                <div className="provider-rating"><span className="star">★ 4.6</span> (120 reviews)</div>
                <p className="provider-tags">✅ Verified <span>• 8+ Yrs Exp.</span></p>
                <p className="provider-distance">📍 4.2km away • ⏱ 25-35 min</p>
              </div>
              <div className="provider-action">
                <div className="price">₹299 <span>(Starting)</span></div>
                <button className="book-now-btn" onClick={() => navigate('/service')}>Book Now</button>
              </div>
            </div>

            {/* Provider 4 */}
            <div className="provider-card">
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Amit" className="provider-img" />
              <div className="provider-info">
                <h3>Amit AC Expert</h3>
                <div className="provider-rating"><span className="star">★ 4.5</span> (166 reviews)</div>
                <p className="provider-tags">✅ Verified <span>• 4+ Yrs Exp.</span></p>
                <p className="provider-distance">📍 5.1km away • ⏱ 30-40 min</p>
              </div>
              <div className="provider-action">
                <div className="price">₹399 <span>(Starting)</span></div>
                <button className="book-now-btn" onClick={() => navigate('/service')}>Book Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE MAP --- */}
        <div className="map-area">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Map" className="map-bg" />
          
          {/* Map Pins */}
          <div className="map-pin" style={{top: '20%', left: '60%'}}>📍</div>
          <div className="map-pin" style={{top: '50%', left: '30%'}}>📍</div>
          <div className="map-pin" style={{top: '70%', left: '80%'}}>📍</div>

          {/* Floating Card on Map */}
          <div className="map-floating-card">
            <img src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Rakesh" />
            <div>
              <h4>Rakesh Kumar</h4>
              <p><span className="star">★ 4.8</span> (256 reviews)</p>
              <p className="dist">📍 2.1km away</p>
            </div>
          </div>

          {/* Zoom Controls */}
          <div className="map-controls">
            <button>+</button>
            <button>-</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Search;