import React, { useState, useEffect } from 'react'
import { withStyles, WithStyles, Grid } from '@material-ui/core'
import { loginStyles } from './login.styles'
import { LoginCard } from '../../components/login-card/login-card'

interface LoginProps {
    onClick?: () => void
}

interface _LoginProps extends LoginProps, WithStyles<typeof loginStyles> { }

const _Login: React.FC<_LoginProps> = (props) => {
    const { classes, onClick } = props
    return <Grid container spacing={3} onClick={onClick} className={classes.main}>
        <Grid item xs={12} className={classes.title}>
            Welcome to Sprout to Tree Learning Labs
        </Grid>
        <Grid item xs={12}>
            <LoginCard />
        </Grid>
    </Grid>
}

export const Login = withStyles(loginStyles)(_Login)