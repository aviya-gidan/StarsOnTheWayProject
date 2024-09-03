import React from 'react';
import './stylePages.css'


export default function About() {
    return (
      <div className="about-container"> 
        <div className="about-image"> 
          <img src="/images/ידיים מחוברות.jpg" alt="About us" />
        </div>
        <div className="about-content">
          <h1>אודות האתר</h1>
          <p>
            האתר הזה נבנה כדי לספק מידע ומקורות עבור קהילת המשתמשים שלנו.
            כאן תוכלו למצוא את כל מה שאתם צריכים לדעת על השירותים שאנו מציעים,
            הצוות שלנו, והחזון שלנו לעתיד.
          </p>
          <p>
            אנו גאים להיות חלק מהקהילה ומחויבים לספק תוכן איכותי ושירות לקוחות מעולה.
          </p>
        </div>
      </div>
    );
  }
