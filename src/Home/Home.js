import React, { useEffect, useState } from 'react';
import { CssBaseline, Container } from '@mui/material';
import './Home.css';
import axios from 'axios';

function Home() {
  const [imageUrl, setImageUrl] = useState('');

  	useEffect(() => {
    	axios.get('https://dog.ceo/api/breeds/image/random')
      		.then(response => {
        		setImageUrl(response.data.message);
      		})
      		.catch(error => {
        		console.error('Error fetching image:', error);
      		});
  	}, []);

	return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className="home">
          <img alt="Logo" src={imageUrl} width="500" height="500"/>
        </div>
      </Container>
    </React.Fragment>
	);
}

export default Home;
