import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switch(props){
  return (
    <div className={classes.wrapper}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <Paper elevation={4} className={classes.paper}>
          <svg className={classes.svg}>
            <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
          </svg>
        </Paper>
      </Slide>
    </div>
  )
}