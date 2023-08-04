"use client"
import React, { FC, useState, useEffect } from 'react';
import { TextField } from '@material-ui/core'
import { useTranslation } from 'next-i18next';

import { useStyles } from './SearchBand.styles';
import { useBandsSearch } from '../../hooks/useBandsSearch';

export const SearchBand: FC = () => {
    const { t } = useTranslation('dashboard');
    const { value, delayedSearch } = useBandsSearch();
    const [searchInput, setSearchInput] = useState(value);
    const classes = useStyles();

    useEffect(() => {
        setSearchInput(value);
    }, [value]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchInput(value);
        delayedSearch(value);
    };

    return (
        <div className={classes.container}>
            <TextField
                fullWidth
                type="search"
                placeholder={t('searchBandPlaceholder')}
                value={searchInput}
                onChange={handleInputChange}
                variant="outlined"
            />
        </div>
    )
}
