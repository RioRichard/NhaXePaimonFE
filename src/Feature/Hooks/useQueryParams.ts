import queryString from 'query-string';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useQueryParams = <T>() => {
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = React.useMemo<any>(() => {
        const params = queryString.parse(location.search);
        return {
            ...params,
            _page: Number(params._page) || 1,
            _limit: Number(params._limit) || 100
        };
    }, [location.search]);

    const updateParams = (filter: any) => {
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(filter)
        });
    };
    return { queryParams, updateParams };
};
