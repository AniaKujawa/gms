import React, { useEffect, useState, FC } from 'react';
import { TextField } from '@material-ui/core'
import { useTranslation } from 'next-i18next';

import { useDebounce } from './../../hooks/useDebounce';
import { useStyles } from './SearchBand.styles';
import { useBandsSearch } from '../../hooks/useBandsSearch';

export const SearchBand: FC = () => {
    const { t } = useTranslation();
    const { search, handleSearchChange } = useBandsSearch();
    const [ value, setValue ] = useState<string>(search);
    const debouncedSearch = useDebounce(value, 1000);
    const classes = useStyles();

    useEffect(() => {
        handleSearchChange(debouncedSearch);
    }, [debouncedSearch, handleSearchChange]);

    return (
        <div className={classes.container}>
            <TextField
                fullWidth
                type="search"
                placeholder={t('dashboard.searchBandPlaceholder')}
                value={value}
                onChange={e => setValue(e.target.value)}
                variant="outlined"
            />
        </div>
    )
}