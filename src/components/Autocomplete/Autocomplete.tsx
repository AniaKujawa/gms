import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import MUIAutocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

import { Props, Option } from './types';

const filter = createFilterOptions<Option>()

export const Autocomplete: FC<Props> = ({ onChange, value, options }) => {
  const { t } = useTranslation('translation');

  return (
    <MUIAutocomplete
      multiple
      filterSelectedOptions
      value={value}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Tags"
          variant="outlined"
        />
      )}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            name: `${t('add')} "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      getOptionLabel={option => {
        if (typeof option === 'string') {
          return option;
        }

        if (option.inputValue) {
          return option.inputValue;
        }

        return option.name;
      }}
      onChange={(e, updatedOptions) => {
        const lastEl = updatedOptions[updatedOptions.length - 1];

        if (lastEl && lastEl.inputValue) {
          onChange([...value, { name: lastEl.inputValue }])
        } else {
          onChange(updatedOptions)
        }
      }}
      getOptionSelected={(option, value) => (
        option.name === value.name
      )}
      renderOption={(option) => option.name}
    />
  );
};
