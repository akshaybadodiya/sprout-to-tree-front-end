import React, { useState, useEffect } from 'react'
import { withStyles, WithStyles, Grid, Input, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Slider } from '@material-ui/core'
import { createQuestionStyles } from './create-question.styles'

interface CreateQuestionProps {
    onClick?: () => void
}

interface _CreateQuestionProps extends CreateQuestionProps, WithStyles<typeof createQuestionStyles> { }

const _CreateQuestion: React.FC<_CreateQuestionProps> = (props) => {
    const { classes, onClick } = props
    const [questionText, setQuestionText] = useState<string | undefined>(undefined)
    const [imgUrl, setImgUrl] = useState<string | undefined>(undefined)
    const [noOfOptions, setNoOfOptions] = useState<number>(0)
    const options: JSX.Element[] = [];
    for (let i = 1; i <= noOfOptions; i++) {
        options.push(<Grid item xs={12} md={6} className={classes.optionContainer}>
            <input placeholder={`Option ${i} text`} className={classes.option_input}></input>
        </Grid>);
    }

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQuestionText(e.target.value)
    }

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImgUrl(e.target.value)
    }

    const handleOptionNoChange = (e: React.ChangeEvent<{}>, newValue: any) => {
        setNoOfOptions(newValue)
    }

    const optionsArr = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        }
    ];

    return <Grid container spacing={3} className={classes.main}>
        <Grid item xs={12}>
            <h2 className={classes.title}>Question Creation</h2>
        </Grid>
        <Grid item xs={12}>
            <Grid container spacing={2} className={classes.card}>
                <Grid item xs={12}>                  Write the content of the question.        </Grid>
                <Grid item xs={12} >
                    <textarea placeholder="Write your question here..." onChange={(e) => handleTextChange(e)} className={classes.questionText}></textarea>
                </Grid>
                <Grid item xs={12}>
                    Select number of options
        </Grid>
                <Grid item xs={12}>
                    <Slider
                        defaultValue={0}
                        getAriaValueText={(noOfOptions) => `${noOfOptions}`}
                        onChange={handleOptionNoChange}
                        aria-labelledby="discrete-slider-custom"
                        valueLabelDisplay="auto"
                        marks={optionsArr}
                        step={1}
                        min={0}
                        max={4}
                    />
                </Grid>
                <Grid item xs={12}>
                    Add an image url
        </Grid>
                <Grid item xs={12}>
                    <input placeholder="Add image url here..." onChange={(e) => handleUrlChange(e)} className={classes.imgUrl_input}></input>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3} className={classes.questionPreview}>
                        {questionText && <Grid item xs={12}>
                            {questionText}
                        </Grid>}
                        {imgUrl && <Grid item xs={12} className={classes.imgContainer}>
                            <img src={imgUrl} />
                        </Grid>}
                        {noOfOptions > 0 && <Grid item xs={12}>
                            <Grid container spacing={3}>
                                {options}
                            </Grid>
                        </Grid>}
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    </Grid>
}

export const CreateQuestion = withStyles(createQuestionStyles)(_CreateQuestion)