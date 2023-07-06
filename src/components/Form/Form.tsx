import { Grid, TextField } from '@material-ui/core';
import styled from 'styled-components';

const WhiteTextField = styled(TextField)`
  .MuiFormLabel-root.Mui-focused {
    color: white;
  }
  .MuiInputBase-input.MuiInput-input {
    color: white;
  }
  .MuiInput-underline:after {
    border-bottom: 1px solid white;
  }
  .MuiInput-underline:before {
    border-bottom: 1px solid white;
  }
  input {
    color: white;
  }

  label {
    color: white;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  height: 80vh;

  ${WhiteTextField} {
    margin-top: 40px;
  }
`;

const WhiteForm = () => {
  return (
    <Wrapper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <WhiteTextField label="Type your Name" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <WhiteTextField label="Type your Email" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <WhiteTextField
            label="Type your messageMessage"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default WhiteForm;
