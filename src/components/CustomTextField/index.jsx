import * as React from "react";
import {createTheme, TextField, ThemeProvider} from "@mui/material";
import styles from './index.module.scss'
import {useState} from "react";

export const CustomTextField =
    ({
         label,
         type = 'text',
         isSelect = false,
         isMultiline = false,
         visible = true,
         children
     }) => {

        const theme = createTheme({
            status: {
                danger: '#e53e3e',
            },
            palette: {
                primary: {
                    main: '#989898',
                    secondary: '#FFFFFF',
                    darker: '#FFFFFF',
                },
                neutral: {
                    main: '#000000',
                }
            },
        });
        const [isDirtyField, setIsDirtyField] = useState(false)

        if (visible)
            return (
                <>
                    <ThemeProvider theme={theme}>

                        <div className={styles.content}>
                            <TextField
                                bgcolor={'primary'}
                                required
                                type={type}
                                id="filled-required"
                                select={isSelect}
                                label={label}
                                defaultValue=""
                                error={isDirtyField}
                                onBlur={() => setIsDirtyField(true)}
                                multiline={isMultiline}
                                rows={isMultiline ? 4 : 1}
                                variant="standard"
                                fullWidth={true}
                                InputProps={{
                                    className: styles.field,
                                    disableUnderline: true
                                }}
                                className={styles.field}
                            >
                                {children}
                            </TextField>
                        </div>
                    </ThemeProvider>
                </>
            );
    };