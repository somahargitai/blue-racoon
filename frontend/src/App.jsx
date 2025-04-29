import { useEffect, useState } from 'react';
import { getHello } from './services/helloapi';
import { Container, Typography, Box } from '@mui/material';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHello = async () => {
      try {
        const data = await getHello();
        setMessage(data.message);
      } catch (err) {
        setError('Failed to fetch message');
        console.error(err);
      }
    };

    fetchHello();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Blue Racoon
        </Typography>
        {error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <Typography variant="body1">{message || 'Loading...'}</Typography>
        )}
      </Box>
    </Container>
  );
}

export default App; 