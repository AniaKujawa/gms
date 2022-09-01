import React, { useEffect, useState, FC } from 'react';
import { Input } from '@material-ui/core'
import { useTranslation } from 'react-i18next';

import { useDebounce } from './../../hooks/useDebounce';
import { Props } from './types'; 

export const SearchBand: FC<Props> = ({ setSearchValue }) => {
    const { t } = useTranslation();
    const [ value, setValue ] = useState<string>('');
    const debouncedSearch = useDebounce(value, 1000);

    useEffect(() => {
        setSearchValue(debouncedSearch);
    }, [debouncedSearch, setSearchValue]);

    return (
        <div>
            <Input
                type="search"
                placeholder={t('searchBandPlaceholder')}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    )
}