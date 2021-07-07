import React, { useState, useEffect } from 'react';

function useTrucateText(str, lengthOfStr) {

    const currentText = str;
    const [text, setText] = useState(currentText);

    const truncateText = (str, n) => {
        const newTitle = str.substr(0, n - 1) + "..."
        str?.length > n ?
            setText(newTitle)
            : setText(str);
    };

    useEffect(() => {
        truncateText(str, lengthOfStr)
    }, [text, currentText, str, lengthOfStr]);

    return (
        <h2>{text}</h2>
    )
};

export default useTrucateText;