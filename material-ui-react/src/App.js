import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
    control={<Checkbox
      checked={checked}
      icon={<DeleteIcon/>}
      checkedIcon={<SaveIcon/>}
      onChange={(e)=>setChecked(e.target.checked)}
      inputProps={{
        'aria-label': 'secondary checkbox'
      }}
      />}
        label="Testing Checkbox"
      />
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField
        variant="filled"
        color="secondary"
        type="email"
        label="The Time"
        placeholder="test@test.com"
        />
        <CheckboxExample/>
        <ButtonGroup variant="contained" color="primary">
        <Button
          startIcon={<SaveIcon/>}
          size="large">
            Save
          </Button>
          <Button
          startIcon={<DeleteIcon/>}
          size="large"
          variant="contained">
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
