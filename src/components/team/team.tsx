import React, { useState, useEffect } from 'react'
import { withStyles, WithStyles, Grid } from '@material-ui/core'
import { teamStyles } from './team.styles'
import { FounderCard } from '../founder-card/founder-card'

interface TeamProps {
    onClick?: () => void
}

interface _TeamProps extends TeamProps, WithStyles<typeof teamStyles> { }

const _Team: React.FC<_TeamProps> = (props) => {
    const { classes, onClick } = props
    const cofounders = [
        { name: "Kakoli BIswas Halder", imgSrc: process.env.PUBLIC_URL + '/img/kakoli.jpg', info: "MSc in Bio-Endineering and BEd" },
        { name: "Pinky Biswas Burman", imgSrc: process.env.PUBLIC_URL + '/img/pinky.jpg', info: "BE in Electronics and Communication with Mtech in Embedded Systms" },
        { name: "Papiya Biswas Badodiya", imgSrc: process.env.PUBLIC_URL + '/img/papiya.jpg', info: "BE in Electronics and Communication with Mtech in Embedded Systems" },
    ]

    return <Grid container spacing={3} className={classes.main}>
        {cofounders.map(cofounder => {
            return <Grid item xs={12} md={4}>
                <FounderCard
                    name={cofounder.name}
                    imgSrc={cofounder.imgSrc}
                    info={cofounder.info}
                />
            </Grid>
        })}
    </Grid>
}

export const Team = withStyles(teamStyles)(_Team)