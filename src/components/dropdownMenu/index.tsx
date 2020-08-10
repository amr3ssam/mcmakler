import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
// special case the style for the Select Material UI component
const styles = {
    input: {
        marginRight: '8px',
    }

};

interface Props {

    /**
     *  props
     */
    data?: Array<any>,
    label?: string
}


export default function AlertDialog(props: Props) {

    return (
        <div  >
            <FormControl variant="outlined" size='small' style={styles.input}>
                <InputLabel htmlFor="outlined-age-native-simple">{props.label}</InputLabel>
                <Select
                    native 
                    label={props.label}
                    inputProps={{
                        name: 'showValue',
                        id: 'id',
                    }}
                >
                    <option value={0}>{"All"}</option>
                    {props.data !== undefined ? props.data.map((item) => {
                        return <option value={item.id}>{item.showValue}</option>
                    }) : null
                    }

                </Select>
            </FormControl>
        </div>
    );
}
