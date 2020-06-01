import React from 'react';
import './FilterDrawer.scss';
import {
  Box, Button,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";

const ColorButton = withStyles(() => ({
  root: {
    color: green[50],
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}))(Button);

const useStyles = makeStyles(theme => ({
  roundedExpansionPanel: {
    borderRadius: theme.shape.borderRadius,
    '&::before': {
      height: '0px'
    }
  },
}));


export default function FilterDrawer() {
  const classes = useStyles();

  const maxPrice = 10000;
  const [price, setPrice] = React.useState([200, 3000]);
  const [colorPanelExpanded, setColorPanelExpanded] = React.useState(false);
  const [typePanelExpanded, setTypePanelExpanded] = React.useState(false);
  const [orderPanelExpanded, setOrderPanelExpanded] = React.useState(false);
  const [orderType, setOrderType] = React.useState('');

  const selectTypes = [
    {
      title: 'З обгорткою',
      name: 'with_coverage',
      state: React.useState(false)
    },
    {
      title: 'Без обгорткою',
      name: 'without_coverage',
      state: React.useState(false)
    },
    {
      title: 'Весняний',
      name: 'spring_bouquet',
      state: React.useState(false)
    },
  ];

  const colorSelect = [
    {
      color: 'red',
      name: 'red',
      state: React.useState(false)
    },
    {
      color: 'green',
      name: 'green',
      state: React.useState(false)
    },
    {
      color: 'blue',
      name: 'blue',
      state: React.useState(false)
    }
  ];


  return (
    <Box className="drawerContentContainer">
      <Typography variant="h5" align="center">
        Ваші фільтри
      </Typography>

      <Box mb={2}/>

      <hr className="hr85vw"/>

      <Box mb={4}/>
      <Paper elevation={1} className={`${classes.roundedExpansionPanel} filterItem`}>
        <Typography id="range-slider" gutterBottom>
          Ціна:
        </Typography>
        <Slider
          value={price}
          onChange={(_, value) => setPrice(value)}
          valueLabelDisplay="off"
          max={maxPrice}
          style={{color: 'green'}}
        />
        <Grid
          container
          justify={"space-between"}
        >
          <Box>{price[0]} грн</Box>
          <Box>{price[1]} грн</Box>
        </Grid>
      </Paper>

      {/*<Box mb={2}/>*/}

      {/*<ExpansionPanel*/}
      {/*  expanded={colorPanelExpanded}*/}
      {/*  onChange={() => setColorPanelExpanded(!colorPanelExpanded)}*/}
      {/*  elevation={1}*/}
      {/*  className={classes.roundedExpansionPanel}*/}
      {/*>*/}
      {/*  <ExpansionPanelSummary*/}
      {/*    expandIcon={<ExpandMoreIcon/>}*/}
      {/*  >*/}
      {/*    <Typography gutterBottom>*/}
      {/*      Колір*/}
      {/*    </Typography>*/}
      {/*  </ExpansionPanelSummary>*/}
      {/*  <ExpansionPanelDetails>*/}
      {/*    {colorSelect.map((color, index) => (*/}
      {/*      <FormControlLabel*/}
      {/*        key={index}*/}
      {/*        control={*/}
      {/*          <Radio*/}
      {/*            name={color.name}*/}
      {/*            checked={color.state[0]}*/}
      {/*            onChange={*/}
      {/*              (_, value) => color.state[1](value)*/}
      {/*            }*/}
      {/*            style={{*/}
      {/*              color: color.color,*/}
      {/*            }}*/}
      {/*          />*/}
      {/*        }*/}
      {/*      />*/}
      {/*    ))}*/}
      {/*  </ExpansionPanelDetails>*/}
      {/*</ExpansionPanel>*/}

      <Box mb={2}/>

      <ExpansionPanel
        expanded={typePanelExpanded}
        onChange={() => setTypePanelExpanded(!typePanelExpanded)}
        elevation={1}
        className={classes.roundedExpansionPanel}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon/>}
        >
          <Typography gutterBottom>
            Тип
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{
          flexDirection: 'column'
        }}>

          {selectTypes.map((type, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    name={type.name}
                    checked={type.state[0]}
                    onChange={
                      (_, value) => type.state[1](value)
                    }
                    style={{color: 'green'}}
                  />
                }
                label={type.title}
              />
          ))}

        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Box mb={2}/>

      <ExpansionPanel
        expanded={orderPanelExpanded}
        onChange={() => setOrderPanelExpanded(!orderPanelExpanded)}
        elevation={1}
        className={classes.roundedExpansionPanel}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon/>}
        >
          <Typography gutterBottom>
            Порядок
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RadioGroup aria-label="gender" name="gender1" value={orderType} onChange={(_, value) => setOrderType(value)}>
            <FormControlLabel value="title" control={<Radio style={{color: 'green'}}/>} label="Назва"/>
            <FormControlLabel value="min_price" control={<Radio style={{color: 'green'}}/>} label="Найнижча ціна"/>
            <FormControlLabel value="max_price" control={<Radio style={{color: 'green'}}/>} label="Найвища ціна"/>
            <FormControlLabel value="popularity" control={<Radio style={{color: 'green'}}/>} label="Популярність"/>
          </RadioGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <Box mb={4}/>

      <Grid
        container
        justify={"center"}
      >
        <ColorButton
          variant="contained"
          onClick={() => ''}
        >
          Застосувати
        </ColorButton>
      </Grid>
    </Box>
  );
};
