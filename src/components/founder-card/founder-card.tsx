import React, { useState, useEffect } from 'react'
import { withStyles, WithStyles, Grid, Grow } from '@material-ui/core'
import { founderCardStyles } from './founder-card.styles'

interface FounderCardProps {
    onClick?: () => void
    name: string
    imgSrc: string
    info: string
}

interface _FounderCardProps extends FounderCardProps, WithStyles<typeof founderCardStyles> { }

const _FounderCard: React.FC<_FounderCardProps> = (props) => {
    const { classes, onClick, name, imgSrc, info } = props
    return <Grow in={true} timeout={1000}>
        <Grid container spacing={3} onClick={onClick} className={classes.main} >
            <Grid item xs={12} className={classes.title}>
                {name}
            </Grid>
            <Grid item xs={12} className={classes.userImg}>
                <img src={imgSrc} />
            </Grid>
            <Grid item xs={12} className={classes.description}>
                {info}
            </Grid>
        </Grid>
    </Grow >
}

export const FounderCard = withStyles(founderCardStyles)(_FounderCard)