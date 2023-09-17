import { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import { evaluate } from 'mathjs';

///
/// Utility Components
///

function ButtonRow({ children }: { children: ReactElement[] }): ReactElement {

  return (
    <Grid container item spacing={1} justifyContent="center">{children}</Grid>
  );
}

function ActionButton({ title, onClick }: CalculatorButtonPropsT): ReactElement<CalculatorButtonPropsT> {

  return (
    <Grid item>          
      <Button onClick={onClick} variant="contained" sx={(theme) => ({ backgroundColor: theme.palette.success.main })}>{title}</Button>
    </Grid>
  )
}

function InputButton({ input, symbol, setDisplayNumber }: InputButtonPropsT): ReactElement<InputButtonPropsT> {

  return (
    <Grid item>
      <Button
        variant="contained"
        onClick={() => setDisplayNumber((displayNumber) => displayNumber + input)}
        sx={(theme) => ({
          backgroundColor: typeof input === 'number'
            ? theme.palette.primary.main
            : theme.palette.secondary.main
        })}
      >
        { symbol ? symbol : input }
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

type InputButtonPropsT = {
  input: string | number;
  symbol?: string | number;
  setDisplayNumber: Dispatch<SetStateAction<string>>;
}

///
/// Main Component
///
function Calculator(): ReactElement {

  const [displayNumber, setDisplayNumber] = useState<string>('');
  const [ansVal, setAnsVal] = useState<string | null>(null);

  const submitExpression = () => {
    const result = evaluate(displayNumber);
    setDisplayNumber(result);
    setAnsVal(result);
  }

  const clearAndStoreAns = () => {
    setAnsVal(displayNumber);
    setDisplayNumber('');
  };

  return (
    <Box>
      <Grid container spacing={1} justifyContent="center">
        <TextField variant="filled" value={displayNumber} multiline disabled />
        <ButtonRow>
          <InputButton input="(" setDisplayNumber={setDisplayNumber} />
          <InputButton input=")" setDisplayNumber={setDisplayNumber} />
          <InputButton input="%" setDisplayNumber={setDisplayNumber} />
          <ActionButton title="C" onClick={clearAndStoreAns} />
        </ButtonRow>
        <ButtonRow>
          <InputButton input={7} setDisplayNumber={setDisplayNumber} />
          <InputButton input={8} setDisplayNumber={setDisplayNumber} />
          <InputButton input={9} setDisplayNumber={setDisplayNumber} />
          <InputButton input="/" setDisplayNumber={setDisplayNumber} />
        </ButtonRow>
        <ButtonRow>
          <InputButton input={4} setDisplayNumber={setDisplayNumber} />
          <InputButton input={5} setDisplayNumber={setDisplayNumber} />
          <InputButton input={6} setDisplayNumber={setDisplayNumber} />
          <InputButton input="*" symbol="x" setDisplayNumber={setDisplayNumber} />
        </ButtonRow>
        <ButtonRow>
          <InputButton input={1} setDisplayNumber={setDisplayNumber} />
          <InputButton input={2} setDisplayNumber={setDisplayNumber} />
          <InputButton input={3} setDisplayNumber={setDisplayNumber} />
          <InputButton input="-" setDisplayNumber={setDisplayNumber} />
        </ButtonRow>
        <ButtonRow>
          <InputButton input={0} setDisplayNumber={setDisplayNumber} />
          <InputButton input="." setDisplayNumber={setDisplayNumber} />
          <ActionButton title="=" onClick={submitExpression} />
          <InputButton input="+" setDisplayNumber={setDisplayNumber} />
        </ButtonRow>
      </Grid>
    </Box>
  );
}

export default Calculator;