import React, { useState, useEffect } from 'react'
import { withStyles, WithStyles, Grid } from '@material-ui/core'
import { loginStyles } from './login-card.styles'
import educationtree from '../../educationtree.png'
import Button from '@material-ui/core/Button';


interface LoginCardProps {
    onClick?: () => void
}

interface _LoginCardProps extends LoginCardProps, WithStyles<typeof loginStyles> { }

const _LoginCard: React.FC<_LoginCardProps> = (props) => {
    const { classes, onClick } = props
    return <Grid container spacing={3} onClick={onClick} className={classes.main}>
        <Grid item xs={12} className={classes.card_img}>
            <img src={educationtree} />
        </Grid>
        <Grid item xs={12} className={classes.card_description}>
            Lets work together in growing the knowledge tree of a child's journey.
        </Grid>
        <Grid item xs={12}>
            <Button variant="contained" color="primary" className={classes.login_button} onClick={() => window.location.href = '/home'}>Login</Button>
        </Grid>
        <Grid item xs={12}>
            <Button variant="contained" color="primary" className={classes.login_button}>Sign-Up</Button>
        </Grid>
    </Grid>
}

export const LoginCard = withStyles(loginStyles)(_LoginCard)