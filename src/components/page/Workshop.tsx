import React, { useEffect, useState } from 'react';
import axios from '../../axios/axios';
import WorkshopCard from './WorkshopCards';
import { Workshop } from '../../conect/type';




function WorkshopComponent() {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const response = await axios.get('Workshop'); 
        setWorkshops(response.data);
      } catch (error) {
        console.error('Error fetching workshops:', error);
      }
    };

    fetchWorkshops();
  }, []);
console.log(workshops)
  return (
    <div className="card-deck">
      {workshops.map((workshop, index) => (
        <WorkshopCard
          key={index}
          workshopId={workshop.id}
          title={workshop.name}
          text={workshop.description}
          location={workshop.address}
        />
      ))}
    </div>
  );
  
}

export default WorkshopComponent;














// import React, { useState } from 'react';
// import './stylePages.css';

// function  Activity
//   () {
//   return (
//     <div>
//       <ActivityCards />
//     </div>
//   );
// }


// export default Activity;

// function ActivityCards() {
//   const [showModal, setShowModal] = useState(false);
//   const [childName, setChildName] = useState('');
//   const [email, setEmail] = useState('');
//   const [registrations, setRegistrations] = useState<{ childName: string; email: string }[]>([]);

//   const handleRegister = () => {
//     setRegistrations([...registrations, { childName, email }]);
//     setChildName('');
//     setEmail('');
//     setShowModal(false);
//   };

//   return (
//     <div className="card-deck">
//       {/* Card content as previously defined */}
//       <div className="card">
//         <img className="card-img-top" src="/images/כדורגל.jpg" alt="Card image cap" />
//         <div className="card-body">
//           <h5 className="card-title">כדורגל</h5>
//           <p className="card-text">
//             כדורגל זה הרבה יותר מכיף! יש לנו אימון כל שבוע עם מאמן מדהים שמלמד אותנו איך לשחק ביחד, איך לבעוט גולים
//             , ואיך להיות חברים טובים אחד לשני. אתה גם יכול להראות את היכולות שלך במשחקים מול קבוצות אחרות.
//             זה המקום שבו כיף ושיתוף פעולה נפגשים
//           </p>
//           <button className="register-btn" onClick={() => setShowModal(true)}>הרשמה</button>
//         </div>
//         <div className="card-footer">
//           <small className="text-muted">רחובות בנימין 8</small>
//         </div>
//       </div>
//       {/* Additional cards */}
//       {/* Modal structure */}
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={() => setShowModal(false)}>&times;</span>
//             <h2>הרשמה לפעילות</h2>
//             <form>
//               <div className="form-group">
//                 <label htmlFor="childName">שם הילד:</label>
//                 <input
//                   type="text"
//                   id="childName"
//                   value={childName}
//                   onChange={(e) => setChildName(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">אימייל:</label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <button type="button" onClick={handleRegister}>הירשם</button>
//             </form>
//           </div>
//         </div>  
//       )}
//     </div>
    
//   );
// }
