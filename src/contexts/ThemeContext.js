import React, { createContext, useState } from 'react';

const ThemeContextProvider = (props) => {
    const [isLightTheme, setLightTheme] = useState(true);

    const themes = {
        light: {
            gradientOne: '90deg, rgba(54,209,220,1) 0%',
            gradientTwo: 'rgba(91,134,229,1) 100%',
            button: '#5C88E5',
            todoListBackgroundColor: 'rgba(166, 216, 219, 0.411)',
            border: 'rgb(122 119 119 / 58%)'
        },
        dark: {
            gradientOne: '90deg, rgba(21,25,101,1) 0%',
            gradientTwo: 'rgba(81,85,133,1) 100%',
            button: '#46B5D1',
            todoListBackgroundColor: 'gray',
            border: '#fff'
        }
    }

    const toggleTheme = () => {
        setLightTheme(!isLightTheme);
    }

    return (
        <ThemeContext.Provider value={{ themes, isLightTheme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );

}

export const ThemeContext = createContext();
export default ThemeContextProvider;


