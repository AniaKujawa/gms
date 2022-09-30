import React, { useEffect, useState, FC } from 'react';
import { TextField } from '@material-ui/core'
import { useTranslation } from 'react-i18next';

import { useDebounce } from './../../hooks/useDebounce';
import { useStyles } from './SearchBand.styles';
import { Props } from './types'; 

export const SearchBand: FC<Props> = ({ setSearchValue }) => {
    const { t } = useTranslation();
    const [ value, setValue ] = useState<string>('');
    const debouncedSearch = useDebounce(value, 1000);
    const classes = useStyles();

    useEffect(() => {
        setSearchValue(debouncedSearch);
    }, [debouncedSearch, setSearchValue]);

    return (
        <div className={classes.container}>
            <TextField
                fullWidth
                type="search"
                placeholder={t('dashboard.searchBandPlaceholder')}
                onChange={e => setValue(e.target.value)}
                variant="outlined"
            />
        </div>
    )
    }