import { Button, Typography } from '@material-ui/core';
import { Wrapper } from './AboutMe.styles';

const descriptionStyles = {
  maxWidth: '600px',
  display: 'flex',
  marginTop: '16px',
  marginBottom: '8px',
};

export const AboutMe = () => {
  return (
    <Wrapper>
      <Typography variant="h3">About me</Typography>
      <Typography style={descriptionStyles} variant="h5">
        Resourceful Developer with 3+ years of experience in developing user
        interfaces, testing and helping teammates. Skilled at utilizing React,
        Typescript, GraphQL and a wide variety of tools and programs to provide
        effective applications. Functional programming enthusiast, able to
        create reusable and scalable components
      </Typography>
      <Button style={{ border: '1px solid #999999' }}>Download CV</Button>
    </Wrapper>
  );
};
