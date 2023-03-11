import { Autocomplete, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface SelectNameOnlySearchField {
    name: any;
    label: string;
    options: any;
    disabled?: boolean;
}

export function SelectNameOnlySearchField(props: SelectNameOnlySearchField) {
    const { control } = useFormContext();
    const { name, label, options, disabled } = props;

    return (
        
        <Controller
            name={name}
            control={control}
            defaultValue={null}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Autocomplete
                    sx={{ mb: 2 }}
                    value={value}
                    onChange={(event, selectedOptions) => onChange(selectedOptions)}
                    options={options}
                    getOptionLabel={(option) => (option.name ? option.name : option.id? option.id : "")}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    noOptionsText="Không có lựa chọn nào được tìm thấy"
                    disabled={disabled}
                    renderInput={(params) => <TextField {...params} variant="standard" label={label} error={!!error} helperText={error?.message} />}
                />
            )}
        />
    );

}
