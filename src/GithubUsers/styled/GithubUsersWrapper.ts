import styled from 'styled-components';
import { rowHeight } from '../constants/dataGrid';

export const GithubUsersWrapper = styled.div`
    .data-grid-wrapper {
        min-height: ${rowHeight * 9}px;
        height: 100%;
        width: 100%;
    };
`;
