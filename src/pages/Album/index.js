import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from '@material-ui/core/styles';
import { deepPurple, yellow } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import projects from '../../projects.json';

import knife from '../../images/featuredEdge.jpg';
import directory from '../../images/employee-directory.jpg';
import movie from '../../images/movieIQ_home.jpg';
import horse from '../../images/loginPage.png';
import budget from '../../images/tableGraph.jpg';
import planner from '../../images/day_planner.jpg';
import fitness from '../../images/dashboard.jpg';
import weather from '../../images/weather_dashboard.jpg';
import notes from '../../images/notesPage.jpg';
import burger from '../../images/lists.jpg';
import password from '../../images/password_generator.jpg';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

let imageArray = [
  knife,
  horse,
  directory,
  movie,
  fitness,
  planner,
  budget,
  weather,
  notes,
  burger,
  password,
];

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const muiTheme = createTheme({
  typography: {
    h2: {
      // fontSize: 36,
      // marginBottom: 15,
    },
  },
  palette: {
    primary: {
      main: deepPurple[700],
    },
    secondary: {
      main: yellow[100],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundImage: "url('https://files.wallpaperpass.com/2019/10/octopus%20wallpaper%20111%20-%202048x1536.jpg')",
    // objectPosition: "100px 10%",
    // objectFit: "cover",
    backgroundColor: '#9e9e9e',
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(2),
    fontSize: 10,
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#9e9e9e',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.secondary.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    // <React.Fragment>
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          {/* <CameraIcon className={classes.icon} /> */}
          <Typography variant='h6' color='inherit' noWrap>
            Tim Martin
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth='md'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Portfolio
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Welcome to my portfolio. A few of these projects are being used,
              in their beta versions, by the public. The rest are more of a way
              to stretch my programming legs.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  {/* <ButtonGroup size="small" > */}
                  <Link
                    href='https://github.com/TimMartin13'
                    target='_blank'
                    rel='noopener'
                  >
                    <Button variant='contained' color='primary'>
                      <GitHubIcon />
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href='https://github.com/TimMartin13'
                    target='_blank'
                    rel='noopener'
                  >
                    <Button variant='contained' color='primary'>
                      <LinkedInIcon />
                    </Button>
                  </Link>
                  {/* </ButtonGroup>   */}
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='lg'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projects.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={imageArray[card.id - 1]}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {card.title}
                    </Typography>
                    <Typography style={{ height: '160px', overflowY: 'auto' }}>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid container>
                      <Grid item xs={6}>
                        <Link
                          href={card.deployed}
                          target='_blank'
                          rel='noopener'
                          style={{
                            fontSize: 18,
                            paddingLeft: 14,
                            textDecoration: 'none',
                          }}
                        >
                          View
                        </Link>
                      </Grid>
                      <Grid item xs={6}>
                        <Link
                          href={card.repository}
                          target='_blank'
                          rel='noopener'
                          style={{
                            fontSize: 18,
                            textDecoration: 'none',
                            textAlign: 'right',
                          }}
                        >
                          Repo
                        </Link>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='textSecondary'
          component='p'
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
      {/* </React.Fragment> */}
    </ThemeProvider>
  );
}
