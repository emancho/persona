import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import SkipPreviousIcon from '@mui/icons-material/FastRewind';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/FastForward';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';


function NavButtons() {
    const theme = useTheme();
    
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Link to="/SocialLinks"> {/* Specify the target page's route */}
            <IconButton aria-label="previous">
                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            </Link>
            <Link to="/AboutMe"> {/* Specify the target page's route */}
            <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            </Link>
            <Link to="/CanvasPage"> {/* Specify the target page's route */}
            <IconButton aria-label="next">
                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
            </Link>
        </Box>
  );
}

export default NavButtons;