import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const RootContainer = styled('div')({
  backgroundColor: 'blue',
  color: 'white',
  textAlign: 'center',
  paddingTop: '16px', // Adjust as needed
});

const MainPage: React.FC = () => {
  const DescriptionTypography = styled(Typography)({
    margin: '16px', // Adjust as needed
  });

  return (
    <RootContainer>
      <DescriptionTypography variant="h6">
        <p>האתר שלנו נוצר בשביל לתת מענה לילדים שעברו קשיים בחברה</p>
        <p>!!אנחנו כאן בדיוק בשבילם</p>
        <p>!אנחנו מחכים לכם כאן</p>
        <p>עם הסיפורים שלכם, השיתופים שלכם</p>
        <p>וכמובן שבכל הסדנאות והחוגים שלנו</p>
      </DescriptionTypography>
      <Link to="/StoriesPage">
        <Button variant="contained" color="primary">
          !בואו לשתף אותנו בסיפור שלכם
        </Button>
      </Link>
      <br /><br />
      <Link to="/SignUp">
        <Button variant="contained" color="primary">
          להרשמה
        </Button>
      </Link>
    </RootContainer>
  );
}

export default MainPage;
