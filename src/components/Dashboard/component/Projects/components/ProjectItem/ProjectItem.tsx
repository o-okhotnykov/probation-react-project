import React from 'react';
import { Grid, Paper, Typography, Menu, MenuItem, IconButton } from '@material-ui/core';
import { Project } from 'interface/api/project';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useStyles } from './styles';
import './ProjectItem.scss';

type ProjectItemProps = {
    project: Project;
};

export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    const classes = useStyles();
    const { title, dateCreate, dateDue, img, reporter, stats } = project;
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Grid container className="project-item">
            <Grid item xs={3} className="recent-project">
                <img className="project-img" src={img} alt="project-img" />
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
                <Paper className={`${classes[stats]} project-stats`}>{stats}</Paper>
            </Grid>
            <Grid item xs={1} className={classes.action}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <MoreHorizIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Edit Project</MenuItem>
                    <MenuItem onClick={handleClose}>Exit</MenuItem>
                </Menu>
            </Grid>
        </Grid>
    );
};
