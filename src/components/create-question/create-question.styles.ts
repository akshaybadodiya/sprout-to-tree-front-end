import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { createStyles } from '@material-ui/core'

export const createQuestionStyles = (theme: Theme) => createStyles({
    main: {
        width: "100% !important",
        maxWidth: 600,
        margin: "0 auto !important",
        position: "relative",
        paddingBottom: 64
    },
    title: {
        textAlign: "center",
        margin: "12px 8px"
    },
    card: {
        backgroundColor: "#ffffff",
        padding: "16px 8px !important",
        width: "100%",
        margin: 0,
        borderRadius: 12,
        maxWidth: 600
    },
    optionContainer: {
        width: "calc(100% - 16px)",
        padding: 8
    },
    option_input: {
        border: "1px solid grey",
        borderRadius: 8,
        width: "calc(100% - 16px)",
        padding: "8px",
        textAlign: "center",
        fontFamily: 'Montserrat, sans-serif'
    },
    imgUrl_input: {
        border: "1px solid grey",
        borderRadius: 8,
        width: "calc(100% - 16px)",
        padding: "8px",
        textAlign: "center",
        fontFamily: 'Montserrat, sans-serif',
        "&:focus": {
            border: "1px solid #0ba8e4",
            outline: "none",
            borderRadius: 8
        }
    },
    questionText: {
        width: "calc(100% - 16px)",
        height: 50,
        padding: "8px",
        fontFamily: 'Montserrat, sans-serif'
    },
    imgContainer: {
        "& img": {
            width: "calc(100% + 24px)",
            margin: "0px -12px"
        }
    },
    questionPreview: {
        backgroundColor: "#D8d8d8",
        width: "100%",
        margin: "auto",
        borderRadius: "12px"
    }
})