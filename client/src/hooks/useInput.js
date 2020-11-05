import {useState} from 'react';

const useInput = (initVal) => {
    const [value, setValue] = useState(initVal);

    const handleChange = e => setValue(e.target.value);

    const clearInput = () => setValue('');

    return [
        value,
        {
            setInput: {
                value,
                onChange: handleChange
                },
            clearInput
        }
    ]
}

export default useInput;
