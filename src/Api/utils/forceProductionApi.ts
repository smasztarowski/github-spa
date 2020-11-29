import { SessionStorageKey } from '../../enums/sessionStorageKey';
import { appSessionStorage } from '../../Storage/SessionStorage';

export async function getForceProductionApi(): Promise<boolean> {
    try {
        const value = await appSessionStorage.getItem(SessionStorageKey.ForceGithubProductionApi);
        return !!value;
    } catch (ex) {
        return false;
    }
}
