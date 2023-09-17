import { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';

///
/// Utility Components
///

function CalculatorButton({ title, onClick }: CalculatorButtonPropsT): ReactElement<CalculatorButtonPropsT> {

  return (
    <Grid item xs>          
      <Button onClick={onClick} variant="contained">{title}</Button>
    </Grid>
  )
}

function DisplayInputButton({ input, setDisplayNumber }: DisplayInputButtonPropsT): ReactElement<DisplayInputButtonPropsT> {

  return (
    <Grid item xs>
      <Button
        variant="contained"
        onClick={() => setDisplayNumber((displayNumber) => displayNumber + input)}
        sx={{ backgroundColor: 'grey' }}
      >
        {input}
      </Button>
    </Grid>
  );
}

///
/// Types
///

type CalculatorButtonPropsT = {
  title: string | number;
  onClick: () => void;
};

type DisplayInputButtonPropsT = {
  input: string | number;
  setDisplayNumber: Dispatch<SetStateAction<string>>;
}

///
/// Main Component
///
function Calculator(): ReactElement {

  const [displayNumber, setDisplayNumber] = useState<string>('');
  console.log({displayNumber});

  return (
    <Box sx={(theme) => ({
      padding: 2,
      border: '2px black',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
      width: '75%',
      margin: 'auto',
    })}>
      <TextField variant="filled" value={displayNumber} multiline disabled />
      <Grid container>
        <DisplayInputButton input={7} setDisplayNumber={setDisplayNumber} />
        <DisplayInputButton input={8} setDisplayNumber={setDisplayNumber} />
        <DisplayInputButton input={9} setDisplayNumber={setDisplayNumber} />
      </Grid>
      <Grid container>
        <DisplayInputButton input={4} setDisplayNumber={setDisplayNumber} />
        <DisplayInputButton input={5} setDisplayNumber={setDisplayNumber} />
        <DisplayInputButton input={6} setDisplayNumber={setDisplayNumber} />
      </Grid>
      <Grid container>
        <DisplayInputButton input={1} setDisplayNumber={setDisplayNumber} />
        <DisplayInputButton input={2} setDisplayNumber={setDisplayNumber} />
        <DisplayInputButton input={3} setDisplayNumber={setDisplayNumber} />
      </Grid>
      <Grid container>
        <DisplayInputButton input={0} setDisplayNumber={setDisplayNumber} />
        <DisplayInputButton input="." setDisplayNumber={setDisplayNumber} />
        <Grid item xs>
          <Button variant="contained" onClick={() => setDisplayNumber('')}>=</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Calculator;