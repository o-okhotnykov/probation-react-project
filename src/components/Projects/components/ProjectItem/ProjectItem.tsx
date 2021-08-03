/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { Project } from 'interface/api/project';
import { useStyles } from './styles';
import './ProjectItem.scss';

export const ProjectItem: React.FC<Project> = (props) => {
    const classes = useStyles();
    const { title, dateCreate, dateDue, img, reporter, stats } = props;

    return (
        <Grid container className="project-item">
            <Grid item xs={1}>
                <img className="project-img" src={img} alt="project-img" />
            </Grid>
            <Grid item xs={2}>
                <Typography>{title}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography>{dateCreate}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography>{reporter}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography>{dateDue}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Paper className={classes.paper}>{stats}</Paper>
            </Grid>
            <Grid item xs={1}>
                <Paper className={classes.paper}>action</Paper>
            </Grid>
        </Grid>
    );
};
