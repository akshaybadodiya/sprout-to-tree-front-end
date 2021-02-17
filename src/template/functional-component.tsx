import React, { useState, useEffect } from 'react'
import { withStyles, WithStyles, Grid } from '@material-ui/core'
import { componentStyles } from './functional-component.styles'

interface ComponentProps {
    onClick?: () => void
}

interface _ComponentProps extends ComponentProps, WithStyles<typeof componentStyles> { }

const _Component: React.FC<_ComponentProps> = (props) => {
    const { classes, onClick } = props
    return <Grid container spacing={3} onClick={onClick} className={classes.main}>
        <Grid item xs={12}>

        </Grid>
    </Grid>
}

export const Component = withStyles(componentStyles)(_Component)