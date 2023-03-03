import React, { FC } from 'react';
import { TextField } from '@material-ui/core'
import { useTranslation } from 'next-i18next';

import { useStyles } from './SearchBand.styles';
import { useBandsSearch } from '../../hooks/useBandsSearch';

export const SearchBand: FC = () => {
    const { t } = useTranslation('dashboard');
    const { value, delayedSearch, setSearchValue} = useBandsSearch();
    const classes = useStyles();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchValue(value);
        delayedSearch(value);
      };

    return (
        <div className={classes.container}>
            <TextField
                fullWidth
                type="search"
                placeholder={t('searchBandPlaceholder')}
                value={value}
                onChange={handleInputChange}
                variant="outlined"
            />
        </div>
    )
}