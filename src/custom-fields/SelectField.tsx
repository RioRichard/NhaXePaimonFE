import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface SelectFieldProps {
    name: any;
    label: string;
    muiProps?: SelectProps;
    options?: { label: string; value: string }[];
}

export function SelectField(props: SelectFieldProps) {
    const { control } = useFormContext();
    const { name, label, options, muiProps } = props;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { invalid, error } }) => (
                <FormControl error={invalid} size="small">
                    <InputLabel id={name + '-label'}>{label}</InputLabel>
                    <Select labelId={name + '-label'} id={name} label={label} {...muiProps} {...field}>
                        {options?.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText error={invalid}>{invalid ? error?.message : ''}</FormHelperText>
                </FormControl>
            )}
        />
    );
}
