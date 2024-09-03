import React, { useState } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Button } from '@mui/material';

const HandleAddStory: React.FC = () => {
  const [story, setStory] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setStory(event.target.value);
  };

  const handleSubmit = () => {
    axios.post('story', { story })
      .then(response => {
        console.log('Story submitted successfully:', response.data);
        setSubmitted(true);
      })
      .catch(error => {
        console.error('Error submitting story:', error);
      });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      {!submitted ? (
        <Box>
          <Typography variant="h4" gutterBottom>
            שתף אותנו בסיפור שלך:
          </Typography>
          <TextField
            multiline
            rows={10}
            variant="outlined"
            fullWidth
            value={story}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            שלח סיפור
          </Button>
        </Box>
      ) : (
        <Box textAlign="center" maxWidth="700px" border={1} borderRadius={5} padding={2}>
          <Typography variant="h4" gutterBottom>
            הסיפור שלך
          </Typography>
          <Typography variant="body1">{story}</Typography>
          <Button variant="contained" color="primary">
            אישור
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default HandleAddStory;




// import React, { useState } from 'react';
// import { Link, Route } from 'react-router-dom';
// import FullStory from './Story';

// interface ShareProps {}

// interface FullStoryProps {
//   story: string;
//   onComment: () => void;
// }

// function Share(props: ShareProps) {
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [stories, setStories] = useState<string[]>([]);
//   const [newStory, setNewStory] = useState('');

//   const handleButtonClick = () => {
//     setIsChatOpen(true);
//   };

//   const handleStorySubmit = () => {
//     if (newStory.trim() !== '') {
//       setStories([...stories, newStory]);
//       setNewStory('');
//     }
//   };

//   const handleStoryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setNewStory(event.target.value);
//   };

//   const handleComment = () => {
//     // מימוש להוספת תגובה
//   };

//   return (
//     <div className="container">
//       <h1 className='title'>בואו לשתף אותנו </h1>
//       {stories.map((story, index) => (
//         <div key={index} className="story">
//           <p>{story.substr(0, 25)}</p>
//           {story.length > 25 && <Link to={`/story/${encodeURIComponent(story)}`}>קרא עוד</Link>}
//         </div>
//       ))}
//       {!isChatOpen && <button onClick={handleButtonClick}>לחץ לשיתוף סיפור</button>}
//       {isChatOpen && (
//         <div className="chat-window">
//           <textarea
//             className="message-input"
//             value={newStory}
//             onChange={handleStoryChange}
//             placeholder="כתוב את הסיפור שלך כאן..."
//           />
//           <div className="button-container">
//             <button className="send-button" onClick={handleStorySubmit}>שלח</button>
//           </div>
//         </div>
//       )}
//       {/* <Switch>
//         <Route path="/story/:story" render={({ match }: { match: any }) => (
//           <FullStory story={decodeURIComponent(match.params.story)} onComment={handleComment} />
//         )} />
//       </Switch> */}
//     </div>
//   );
// }

// export default Share;
