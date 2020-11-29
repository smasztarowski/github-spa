import { FC, useCallback, useState, useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import { appSessionStorage } from '../Storage/SessionStorage';

import { getRouteUrl } from '../Router/utils/routeData';

import { View } from '../enums/view';
import { Env } from '../utils/env';
import { SessionStorageKey } from '../enums/sessionStorageKey';

export const AppDevTool: FC = () => {
    const [storageValue, setStorageValue] = useState(false);

    useEffect(() => {
        const getStorageValue = async () => {
            const value = await appSessionStorage.getItem(SessionStorageKey.ForceGithubProductionApi);
            setStorageValue(!!value);
        }
        getStorageValue();
    }, []);

    const handleChange = useCallback(async () => {
        if (storageValue) {
            appSessionStorage.removeItem(SessionStorageKey.ForceGithubProductionApi);
        } else {
            appSessionStorage.setItem(SessionStorageKey.ForceGithubProductionApi, true);
        }
        window.location.assign(getRouteUrl(View.Home));
    }, [storageValue]);
 
    return Env.isDevelopment() ? (
        <FormControlLabel
            control={<Switch checked={storageValue} onChange={handleChange} name="checkedA" />}
            label={storageValue ? 'Switch to Sandbox API' : 'Switch to Production API'}
        />
    ) : null
};

AppDevTool.displayName = AppDevTool.name;
