import styled from 'styled-components';
import { rowHeight, baseColumnWidth } from '../constants/dataGrid';

export const AvatarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${rowHeight}px;
    width: ${baseColumnWidth}px;

    .avatar-anchor {
        height: 100%;
        width: 50px;
        padding: 3px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
