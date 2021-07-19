import React, { useState } from 'react';

import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

export function TextArea({ ...rest }: TextInputProps) {
    const [category, setCategory] = useState('');

    return (
        <TextInput
            style={styles.container}
            {...rest}
        />
    );
}