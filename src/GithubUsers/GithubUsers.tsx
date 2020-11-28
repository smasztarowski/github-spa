import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DataGrid, ColDef } from '@material-ui/data-grid';
import { fetchGithubUsers } from './githubUsers.acions';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { getGithubUsers } from './githubUsers.selectors';

import { GithubUserAvatar } from './GithubUserAvatar';

import { GithubUsersWrapper } from './styled/GithubUsersWrapper';
import { GithubUser } from '../Api/Github/github.interfaces';

import { rowHeight, baseColumnWidth, idColumnWidth } from './constants/dataGrid';
import { DataGridColumn } from './enums/dataGridColumn';

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

export const GithubUsers: FC = () => {
    const dispatch = useAppDispatch();
    const githubUsers = useSelector(getGithubUsers);
    const shouldFetchUsers = githubUsers.length === 0;

    useEffect(() => {
        if (shouldFetchUsers) {
            dispatch(fetchGithubUsers({ since: 0, per_page: 10 }));
        }
    }, [dispatch, shouldFetchUsers]);

    const getRows = useCallback(() => githubUsers.map((user) => ({
        [DataGridColumn.Id]: user.id,
        [DataGridColumn.Avatar]: user,
        [DataGridColumn.Username]: user.login,
    })), [githubUsers]);

    return (
        <GithubUsersWrapper>
            <div className="data-grid-wrapper">
                <DataGrid
                    rows={getRows()}
                    columns={columns}
                    rowHeight={rowHeight}
                />
            </div>
        </GithubUsersWrapper>
    );
};

GithubUsers.displayName = GithubUsers.name;
