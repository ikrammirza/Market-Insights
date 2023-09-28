import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Grid, Stack, Container, Typography, Link } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

export default function About() {
  return (
    <>
      <Helmet>
        <title> About</title>
      </Helmet>

      <Container>
        <Typography variant="h4" gutterBottom>
          About Stock Analytics
        </Typography>


        <br />
        <br />
        <div>
          This is the Front End project developed by Mirza Ikram. It is developed using the following stacks --:
          <ol>
            <li>React JS</li>
            <li>Framework - Material UI</li>
            <li>API - Alpha Vantage, CoinGecko, etc.</li>
            <li>Chart.JS</li>
          </ol>
        </div>
        <div>
          Following are the features of this project --:
          <ol>
            <li>Know the real time data of Stocks, Coins, etc.</li>
            <li>Read Top Finance News</li>
            <li>Search and Check about the companies Financial Data</li>
          </ol>
        </div>
        <Typography variant="h4" gutterBottom>
          About Developer
        </Typography>
        <div>
          Hello! I am Mirza Ikram, a Full Stack Developer who develops websites using MERN Stack . Following
          are link to my profiles --:
          <p>
            <Link
              color="#fff"
              sx={{ ':hover': { color: 'lightBlue' }, pr: 2 }}
              href="https://www.linkedin.com/in/mirzaikram129/"
              target="_blank"
            >
              <LinkedIn />
            </Link>

            <Link
              color="#fff"
              sx={{ ':hover': { color: 'lightBlue' }, pr: 2 }}
              href="https://github.com/ikrammirza"
              target="_blank"
            >
              <GitHub />
            </Link>

            <Link
              color="#fff"
              sx={{ ':hover': { color: 'lightBlue' }, pr: 2 }}
              href="mailto:mirzaikram129@gmail.com"
              target="_blank"
            >
              <Email />
            </Link>

          </p>
        </div>
      </Container>
    </>
  );
}
