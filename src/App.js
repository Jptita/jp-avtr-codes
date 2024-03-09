import React from 'react';
import Form from './Components/Form';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'blue', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container>
        <header className="App-header" style={{ backgroundColor: 'blueviolet', padding: '20px', borderRadius: '100px', textAlign: 'center', color: 'white' }}>
          <Typography variant="h4" gutterBottom>JP'S AVTR CODES</Typography>
          <Form />
        </header>
      </Container>
    </div>
  );
}

export default App;
