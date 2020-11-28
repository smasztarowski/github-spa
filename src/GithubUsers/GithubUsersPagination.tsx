import { FC, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ComponentProps } from '@material-ui/data-grid';
import Pagination from '@material-ui/lab/Pagination';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchGithubUsers } from './githubUsers.actions';

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
});

export const GithubUsersPagination: FC<ComponentProps> = (props) => {
    const { pagination, api } = props;
    const classes = useStyles();
    const dispatch = useAppDispatch();

    const handleOnChange = useCallback((event, page) => {
        dispatch(fetchGithubUsers({ since: pagination.page + 6, per_page: 6 }));
        api.current.setPage(page);
    }, [api, dispatch, pagination]);

    return (
        <Pagination
            className={classes.root}
            color="primary"
            page={pagination.page}
            count={40}
            onChange={handleOnChange}
        />
    );
}

GithubUsersPagination.displayName = GithubUsersPagination.name;
