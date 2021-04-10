import React from 'react';
import './style.css'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import featuredEdge from "../../images/featuredEdge.jpg";
import directory from "../../images/employee-directory.jpg";
import movie from "../../images/movieIQ_home.jpg";
import horse from "../../images/loginPage.png";
import budget from "../../images/tableGraph.jpg";
import planner from "../../images/day_planner.jpg";
import fitness from "../../images/dashboard.jpg";
import weather from "../../images/weather_dashboard.jpg";
import notes from "../../images/notesPage.jpg";
import burger from "../../images/lists.jpg";
import password from "../../images/password_generator.jpg";

let imageArray = [featuredEdge, horse, directory, movie, fitness, planner, budget, weather, notes, burger, password];


const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 10,
    background: 'rgba(255, 255, 255, .6)',
    // -webkit-backdrop-filter: blur(10px);
    backdropFilter: 'blur(10px)',
    borderRadius: '100px 5px'
  },
  media: {
    height: 140,
    objectFit: 'cover',
    objectPosition: '120px 5%'
  },
});

const Accordion = withStyles({
  root: {
    background: 'rgba(255, 255, 255, 0)',
    // -webkit-backdrop-filter: blur(10px);
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    // backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function ProjectCard(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={ imageArray[props.project.id - 1] }
          title={ props.project.title }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { props.project.title }
          </Typography>
          <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
              <Typography>Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                { props.project.description }
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}>
              <Typography>Technology</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                { props.project.technology }
                {/* { 
                  props.project.technology.map((tech) => (
                    <i class={ icon }></i>
                    // "technology": ["fab fa-react", "fab fa-js-square", "fab fa-css3-alt", "fab fa-html5", "fab fa-node-js", "fab fa-bootstrap", "fab fa-mailchimp"]
                  ))
                } */}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={ props.project.deployed } target="_blank">
          Site
        </Button>
        <Button size="small" color="primary" href={ props.project.repository } target="_blank">
          Repository
        </Button>
      </CardActions>
    </Card>
  );
}