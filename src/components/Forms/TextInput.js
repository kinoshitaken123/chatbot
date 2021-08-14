import React from 'react';
import TextField from "@material-ui/core/TextField";
import defaultDataset from '../../dataset';

const TextInput = (props) => {
    return (
        <TextField
            fullWidth={true}
            label={props.label}
            margin={"dense"}
            multiline={props.multiline} // 複数行いれたい時
            rows={props.rows}
            value={props.value}
            type={props.type}
            onChange={props.onChange}
        />
    );
};

export default TextInput