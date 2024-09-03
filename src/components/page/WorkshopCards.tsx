import React, { useState } from 'react';
import './stylePages.css'; 
import { addChildToWorkshop } from '../../services/workshop.service';


interface WorkshopCardProps {
  workshopId: number
  title: string;
  text: string;
  location: string;
}

function WorkshopCard({workshopId, title, text, location }: WorkshopCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [childName, setChildName] = useState('');
  const [email, setEmail] = useState('');
  const [registrations, setRegistrations] = useState<{ childName: string; email: string }[]>([]);

  const handleRegister = async() => {
    if (!childName || !email) {
      alert('אנא מלא את כל השדות לפני ההרשמה.');
      return;
    }
    try {
      await addChildToWorkshop(workshopId, childName,email)
      setRegistrations([...registrations, {childName,email}]);
      setChildName('');
      setEmail('');
      setShowModal(false);
      alert('נרשמת בהלצחה!! מחכים לך!!')
    } catch (error) {
      console.error('שגיאה בהוספת ילד לסדנה:', error);
      alert('אירעה שגיאה בעת ההרשמה לסדנה, אנא נסה שוב מאוחר יותר.');
    }
    }
  
    return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="register-btn" onClick={() => setShowModal(true)}>הרשמה</button>
      </div>
      <div className="card-footer">
        <small className="text-muted">{location}</small>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>הרשמה לפעילות</h2>
            <form>
              <div className="form-group">
                <label htmlFor="childName">שם הילד:</label>
                <input
                  type="text"
                  id="childName"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">אימייל:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="button" onClick={handleRegister}>הירשם</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkshopCard;

