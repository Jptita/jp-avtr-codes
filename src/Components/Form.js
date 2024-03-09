import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Form.css';
import mercedesLogo from './mercedes-logo.png'; // Import the Mercedes logo image

function Form() {
  const [inputValue, setInputValue] = useState('');
  const [avtrStatus, setAvtrStatus] = useState('AVTR OFF');
  const [animationStatus, setAnimationStatus] = useState('stopped');
  const [logoPosition, setLogoPosition] = useState(-200); // Initialize logoPosition to 0

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value === 'JP Tita' || value === 'Denis Tita' || value === 'Candace Wakefield') {
      setAvtrStatus('AVTR ON');
    } else {
      setAvtrStatus('AVTR OFF');
    }
  };

  const handleStart = () => {
    if (avtrStatus === 'AVTR ON') {
      setAnimationStatus('running');
    }
  };

  const handleStop = () => {
    setAnimationStatus('stopped');
    setAvtrStatus('AVTR OFF');
    setLogoPosition((prevPosition) => {
      // Save the current position when the logo stops
      return prevPosition;
    });
    setInputValue(''); // Clear the input value
  };

  return (
    <div className="form-container">
      <div className="logo-container">
        <img
          src={mercedesLogo} // Use the imported logo variable
          alt="Mercedes Logo"
          className={`logo ${animationStatus === 'running' ? 'animate active' : ''}`}
          style={{ transform: `translateX(${logoPosition}px)` }}
        />
      </div>
      <TextField
        label="Enter a name"
        variant="outlined"
        className="input-field"
        value={inputValue}
        onChange={handleChange}
      />
      <Typography
        variant="body1"
        className={avtrStatus === 'AVTR ON' ? 'status-yellow' : 'status-red'}
      >
        {avtrStatus}
      </Typography>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={handleStart}>
          Start
        </Button>
        <Button variant="contained" color="secondary" onClick={handleStop}>
          Stop
        </Button>
      </div>
    </div>
  );
}

export default Form;
