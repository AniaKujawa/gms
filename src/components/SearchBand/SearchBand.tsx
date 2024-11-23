"use client"
import React, { FC, useState, useEffect } from 'react';
import { TextField } from '@material-ui/core'
import { useTranslations } from 'next-intl';

import { StyledContainer } from './SearchBand.styles';
import { useBandsSearch } from '../../hooks/useBandsSearch';

export const SearchBand: FC = () => {
    const t = useTranslations('dashboard');
    const { value, delayedSearch } = useBandsSearch();
    const [searchInput, setSearchInput] = useState(value);

    useEffect(() => {
        setSearchInput(value);
    }, [value]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchInput(value);
        delayedSearch(value);
    };

    return (
        <StyledContainer>
            <TextField
                fullWidth
                type="search"
                placeholder={t('searchBandPlaceholder')}
                value={searchInput}
                onChange={handleInputChange}
                variant="outlined"
            />
        </StyledContainer>
    )
}
