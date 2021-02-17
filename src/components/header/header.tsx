import React, { useState, useEffect } from 'react'
import { withStyles, WithStyles, Grid } from '@material-ui/core'
import { headerStyles } from './header.styles'

interface HeaderProps {
    onClick?: () => void
}

interface _HeaderProps extends HeaderProps, WithStyles<typeof headerStyles> { }

const _Header: React.FC<_HeaderProps> = (props) => {
    const { classes, onClick } = props
    const userName = "Akshay"


    return <Grid container spacing={0} className={classes.header}>
        <Grid item xs={6} className={classes.header_left}>
            Hi {userName}
        </Grid>
    </Grid>
}

export const Header = withStyles(headerStyles)(_Header)