import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface CheckboxFieldProps {
    name: any;
    label?: string;
    disabled?: boolean;
    icon?: any;
    checkedIcon?: any
}

export function CheckboxField(props: CheckboxFieldProps) {
    const { control } = useFormContext();
    const { name, label, disabled, icon, checkedIcon } = props;

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <FormControl error={!!error}>
                    <FormGroup>
                        <FormControlLabel disabled={disabled} control={<Checkbox icon={icon} checkedIcon={checkedIcon} checked={value} value={value} onChange={onChange} />} label={label} />
                    </FormGroup>
                    <FormHelperText>{error && error?.message}</FormHelperText>
                </FormControl>
            )}
        />
    );
}
