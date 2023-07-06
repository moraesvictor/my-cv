import { ButtonGroup, Typography, TextField } from '@material-ui/core';
import { AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { styled } from 'styled-components';
import WhiteForm from '../components/Form/Form';

export const Section = styled.div`
  display: flex;
  width: 50vw;
  justify-content: center;
  height: 60vh;
  flex-direction: column;
`;

export const IconWrapper = styled.div`
  min-height: 90px;
  min-width: 90px;

  svg {
    height: 40px;
    width: 40px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  padding: 45px;
  width: 100%;
  height: 100vh;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const WhiteTextField = styled(TextField)`
  background-color: #ffff;
  border-color: 1px solid #ffff;
  border-radius: 30px;
  padding: 8px;
`;

export const ContactMe = () => {
  return (
    <Wrapper>
      <Section>
        <Typography variant="h3">Contact Me</Typography>
        <Typography variant="h5">
          Don't hesitate to get in touch. I'll make sure to respond as soon as
          possible. Looking forward to hearing from you!
        </Typography>
        <ButtonGroup>
          <IconWrapper>
            <AiOutlineWhatsApp />
          </IconWrapper>
          <IconWrapper>
            <AiOutlineLinkedin />
          </IconWrapper>
        </ButtonGroup>
      </Section>
      <WhiteForm />
    </Wrapper>
  );
};
