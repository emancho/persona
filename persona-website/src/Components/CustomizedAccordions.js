import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import MultiActionAreaCard from './ProjectEntry';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // Handles the button press for each project info
  const handleButtonPress =(alertMessage) => {
    alert({alertMessage});
  }

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>The Gals Just Want to Dance</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <MultiActionAreaCard image={itemData[0].img} title={itemData[0].title} description={itemData[0].description} actionFunc={<handleButtonPress alertMessage={'Be Patient...'} />} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>TechBro Dracula</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <MultiActionAreaCard image={itemData[1].img} title={itemData[1].title} description={itemData[1].description} actionFunc={<handleButtonPress alertMessage={'Loading 5%...'} />}/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

// List of objects where each object is the project 
const itemData = [
    {
      img: `${process.env.PUBLIC_URL}/images/proj1.png`,
      title: 'The Gals Just Want to Dance (Music Project)',
      description: 'This ablum is will be my first music project. Album cover is based on a true story with a Release Date of Summer 2024.',
    },
    {
      img: `${process.env.PUBLIC_URL}/images/techbro_drac.png`,
      title: 'Tech Bro Dracula ( Screen Write )',
      description: 'This is a screenplay Im writing to take advantage of the public domain use of Dracula. Currently cooking with the script so just wait on it!!!',
    },
  ];

export default CustomizedAccordions;