import { ReactElement } from 'react';
import { CardMedia, Paper, Typography } from '@material-ui/core';
import { Column } from 'react-table';
import { ProjectState } from 'types/api/project';
import { useStyles } from './styles';

export const columns: Column[] = [
    {
        Header: function Img(): ReactElement {
            return <Typography variant="h3">Image</Typography>;
        },
        accessor: 'img',
        Cell: function Name({ value }: { value: string }): ReactElement {
            return <CardMedia style={{ width: '5vh', height: '5vh' }} image={value} />;
        },
    },
    {
        Header: function Title(): ReactElement {
            return <Typography variant="h3">Title</Typography>;
        },
        accessor: 'title',
        Cell: function Surname({ value }: { value: string }): ReactElement {
            return <Typography variant="body1">{value}</Typography>;
        },
    },
    {
        Header: function dateCreate(): ReactElement {
            return <Typography variant="h3">Date Create</Typography>;
        },
        accessor: 'dateCreate',
        Cell: function dateCreate({ value }: { value: string }): ReactElement {
            return <Typography variant="body1">{value}</Typography>;
        },
    },
    {
        Header: function dateDue(): ReactElement {
            return <Typography variant="h3">Date Due</Typography>;
        },
        accessor: 'dateDue',
        Cell: function dateDue({ value }: { value: string }): ReactElement {
            return <Typography variant="body1">{value}</Typography>;
        },
    },
    {
        Header: function Reporter(): ReactElement {
            return <Typography variant="h3">Reporter</Typography>;
        },
        accessor: 'reporter',
        Cell: function Reporter({ value }: { value: string }): ReactElement {
            return <Typography variant="body1">{value}</Typography>;
        },
    },
    {
        Header: function Action(): ReactElement {
            return <Typography variant="h3">Action</Typography>;
        },
        accessor: 'stats',
        Cell: function Progress({ value }: { value: ProjectState }): ReactElement {
            const classes = useStyles();
            return <Paper className={classes[value]}>{value}</Paper>;
        },
    },
];
