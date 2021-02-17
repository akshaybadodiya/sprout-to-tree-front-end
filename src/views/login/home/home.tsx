import React, { useState, useEffect } from 'react'
import { withStyles, WithStyles, Grid, Fab, Slide } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { homeStyles } from './home.styles'
import { Header } from '../../../components/header/header'
import { Team } from '../../../components/team/team'

interface HomeProps {
    onClick?: () => void
}

interface _HomeProps extends HomeProps, WithStyles<typeof homeStyles> { }

const _Home: React.FC<_HomeProps> = (props) => {
    const { classes, onClick } = props
    return <Grid container spacing={3} onClick={onClick} className={classes.home}>
        <Grid item xs={12} className={classes.headerContainer}>
            <Header />
        </Grid>
        <Grid item xs={12} className={classes.home_title}>
            Our Faculty
        </Grid>
        <Grid item xs={12}>
            <Team />
        </Grid>
        <Fab color="primary" aria-label="add" className={classes.addButton} onClick={() => window.location.href = '/create'}>
            <AddIcon />
        </Fab>
    </Grid>
}

export const Home = withStyles(homeStyles)(_Home)