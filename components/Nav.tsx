import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton, Toolbar, Typography } from '@mui/material';

export default function Nav() {
  return (
    <header>
      <nav>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" pl={2}>
              <Link href="/">Home</Link>
            </Typography>
            <Typography variant="h6" pl={2}>
              <Link href="/events">Events</Link>
            </Typography>
            <Typography variant="h6" pl={2}>
              <Link href="/about">ABOUT</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </nav>
    </header>
  );
}
