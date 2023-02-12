import * as React from 'react';
import {IMaskInput} from 'react-imask';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import styles from './CustomPhoneField.module.scss'
import {createTheme, ThemeProvider} from "@mui/material";
import {useState} from "react";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const {onChange, ...other} = props;
    return (
        <IMaskInput
            {...other}
            mask="+{7} (000) 000-00-00"
            inputRef={ref}
            onAccept={(value) => onChange({target: {name: props.name, value}})}
            overwrite
        />
    );
});

TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};


export default function CustomPhoneField() {
    const [values, setValues] = React.useState({
        textmask: ''
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

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

    return (
        <>
            <ThemeProvider theme={theme}>
                <div className={styles.content}>
                    <TextField
                        bgcolor={'primary'}
                        required
                        variant='filled'
                        onBlur={() => setIsDirtyField(true)}
                        error={isDirtyField}
                        // onBlur={() => setIsDirtyField(true)}
                        fullWidth={true}
                        InputProps={{
                            className: styles.field,
                            disableUnderline: true,
                            inputComponent: TextMaskCustom
                        }}
                        // onInput = {(e) =>{
                        //     e.target.value = e.target.value.slice(0,20)
                        // }}
                        className={styles.field}
                        value={values.textmask}
                        onChange={handleChange}
                        name="textmask"
                        placeholder={'+7(___)___-__-__'}
                        type={'tel'}
                        label={'Номер телефона'}
                        id="formatted-text-mask-input"
                        inputComponent={TextMaskCustom}
                    />
                </div>
            </ThemeProvider>

        </>

    );
}

// <TextField
//     bgcolor={'primary'}
//     required
//     variant='filled'
//     fullWidth={true}
//     InputProps={{
//         className: styles.field,
//         disableUnderline: true
//     }}
//     onInput = {(e) =>{
//         e.target.value = e.target.value.slice(0,12)
//     }}
//     className={styles.field}
//     value={values.textmask}
//     onChange={handleChange}
//     name="textmask"
//     type={'tel'}
//     label={'Номер телефона'}
//     id="formatted-text-mask-input"
//     inputComponent={TextMaskCustom}
// />