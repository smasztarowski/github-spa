import { FC, useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { DataGrid, ColDef, PageChangeParams } from '@material-ui/data-grid';
import { useToasts } from 'react-toast-notifications';
import { fetchGithubUsers } from './githubUsers.actions';
import { setCurrentPage, setFetchedPages } from './githubUsers.slice';
import {
    getGithubUsers,
    getGithubUsersLoadingState,
    getGithubUsersCurrentPage,
    getGithubUsersFetchedPages,
} from './githubUsers.selectors';

import {
    fetchGithubUsersCount,
} from '../GithubUsersCount/githubUsersCount.actions';
import {
    getGithubUsersTotalCount,
    getGithubUsersCountLoadingState,
} from '../GithubUsersCount/githubUsersCount.selectors';

import { useAppDispatch } from '../hooks/useAppDispatch';

import { GithubUserAvatar } from './GithubUserAvatar';

import { GithubUsersWrapper } from './styled/GithubUsersWrapper';

import { GithubUser } from '../Api/Github/github.interfaces';

import { rowHeight, baseColumnWidth, idColumnWidth } from './constants/dataGrid';
import { DataGridColumn } from './enums/dataGridColumn';
import { LoadingState } from '../enums/loadingState';

const columns: ColDef[] = [
    {
        field: DataGridColumn.Id,
        headerName: 'ID',
        width: idColumnWidth,
    },
    {
        field: DataGridColumn.Avatar,
        headerName: 'Avatar',
        width: baseColumnWidth,
        sortable: false,
        renderCell(params) {
            const { login, avatar_url } = params.value as GithubUser;
            return (<GithubUserAvatar login={login} url={avatar_url} />);
        }
    },
    {
        field: DataGridColumn.Username,
        headerName: 'Login',
        width: baseColumnWidth,
    },
];

const pageSize = 6;

export const GithubUsers: FC = () => {
    const dispatch = useAppDispatch();
    const fetchedPages = useSelector(getGithubUsersFetchedPages);
    const { addToast } = useToasts();
    const githubUsers = useSelector(getGithubUsers);
    const loadingState = useSelector(getGithubUsersLoadingState);
    const currentPage = useSelector(getGithubUsersCurrentPage);
    const totalCount = useSelector(getGithubUsersTotalCount);
    const totalCountLoadingState = useSelector(getGithubUsersCountLoadingState);
    const shouldFetchUsers = githubUsers.length === 0;
    const initialPage = useRef(currentPage).current;

    useEffect(() => {
        if (loadingState === LoadingState.Error) {
            addToast('Failed to load GithubUsers', {
                appearance: 'error',
                autoDismiss: true,
            });
        }
    }, [loadingState, addToast]);

    useEffect(() => {
        if (totalCountLoadingState === LoadingState.Error) {
            addToast('Failed to load Users count', {
                appearance: 'error',
                autoDismiss: true,
            });
        }
    }, [totalCountLoadingState, addToast]);

    useEffect(() => {
        if (shouldFetchUsers) {
            dispatch(fetchGithubUsers({ since: 0, per_page: pageSize }));
        }
    }, [dispatch, shouldFetchUsers]);

    useEffect(() => {
        if (totalCount === 0 && totalCountLoadingState !== LoadingState.Finished) {
            dispatch(fetchGithubUsersCount());
        }
    }, [dispatch, totalCount, totalCountLoadingState]);

    useEffect(() => {
        if (!fetchedPages[currentPage]) {
            dispatch(setFetchedPages({ [currentPage]: true }));
            dispatch(fetchGithubUsers({ since: ((currentPage - 1) * pageSize) + 1, per_page: pageSize }));
        }
    }, [dispatch, currentPage, fetchedPages]);

    const handlePageChange = useCallback((params: PageChangeParams) => {
        const { page } = params;
        if (page === 1 && currentPage === initialPage) {
            dispatch(setCurrentPage(currentPage));
            return;
        }
        if (page !== currentPage) {
            dispatch(setCurrentPage(page));
        }
    }, [dispatch, currentPage, initialPage]);

    return (
        <GithubUsersWrapper>
            <div className="data-grid-wrapper">
                <DataGrid
                    page={currentPage}
                    rows={githubUsers.map((user) => ({
                        [DataGridColumn.Id]: user.id,
                        [DataGridColumn.Avatar]: user,
                        [DataGridColumn.Username]: user.login,
                    }))}
                    columns={columns}
                    rowHeight={rowHeight}
                    rowCount={totalCount}
                    pageSize={pageSize}
                    pagination={true}
                    onPageChange={handlePageChange}
                    loading={loadingState === LoadingState.Pending || totalCountLoadingState === LoadingState.Pending}
                />
            </div>
        </GithubUsersWrapper>
    );
};

GithubUsers.displayName = GithubUsers.name;
