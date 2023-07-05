import { Box, Typography, Divider } from '@material-ui/core';
import { AiFillStar } from 'react-icons/ai';
import { Avatar } from '../components';
import { AboutMe } from '../components/AboutMe/AboutMe';

export const MyProfile = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Avatar />
      <Box>
        <Typography variant="h2">Victor Moraes</Typography>
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <AiFillStar />
          <Typography variant="h4">Front-end developer</Typography>
        </Box>
      </Box>
      <Divider style={{ margin: '30px 0' }} />
      <AboutMe />
      <Divider style={{ margin: '30px 0' }} />
    </div>
  );
};
