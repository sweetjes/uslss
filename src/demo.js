import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import './demo.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
    borderRadius: 30, 
  },
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { id: 0, label: 'html' },
    { id: 1, label: 'css' },
    { id: 2, label: 'javascript' },
    { id: 3, label: 'react' },
    { id: 4, label: 'vue' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.id !== chipToDelete.id));
  };

  return (
    <div className={classes.root}>
      {chipData.map((data) => {

        return (
          <li id={data.id}>
            <Chip
              label={data.label}
              onDelete={handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );

      })}
    </div>
  );
}
