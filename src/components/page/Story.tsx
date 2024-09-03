// import React, { useState } from 'react';
// import './stylePages.css';

// function Story({ handleContinueReading }: { handleContinueReading: (story: string) => void }) {
    
//   const [story, setStory] = useState(''); // מצביע על הסיפור הנוכחי שנכתב
//   const [comments, setComments] = useState<string[]>([]); // מערך של תגובות

//   // פונקציה לטיפול בהוספת תגובה
//   const handleComment = (comment:string) => {
//     setComments([...comments, comment]);
//   };

//   return (
//     <div>
//       {/* הצגת הסיפור */}
//       <div className='story'>{story}</div>
      
//       {/* כפתור להוספת תגובה */}
//       <button onClick={() => handleComment('תגובה חדשה')}>תגובה</button>

//       {/* הצגת התגובות */}
//       <div className='comments'>
//         {comments.map((comment, index) => (
//           <div key={index} className='comment'>{comment}</div>
//         ))}
//       </div>
//       {/* כפתור להמשך קריאה */}
//       <button onClick={() => handleContinueReading(story)}>המשך קריאה</button>

//     </div>
//   );
// }

import React, { useState } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Button } from '@mui/material';

const HandleAddComment: React.FC = () => {
  const [comment, setComment] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    axios.post('comment', { comment })
      .then(response => {
        console.log('Comment submitted successfully:', response.data);
        setSubmitted(true);
      })
      .catch(error => {
        console.error('Error submitting comment:', error);
      });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      {!submitted ? (
        <Box>
          <Typography variant="h4" gutterBottom>
            הוסף תגובה:
          </Typography>
          <TextField
            multiline
            rows={5}
            variant="outlined"
            fullWidth
            value={comment}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            שלח תגובה
          </Button>
        </Box>
      ) : (
        <Box textAlign="center" maxWidth="700px" border={1} borderRadius={5} padding={2}>
          <Typography variant="h4" gutterBottom>
            תגובתך נשלחה בהצלחה
          </Typography>
          <Typography variant="body1">{comment}</Typography>
          <Button variant="contained" color="primary">
            אישור
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default HandleAddComment;




// export default Story;
