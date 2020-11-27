import { sessionStorage } from '../../Storage/SessionStorage';

export async function getForceProductionApi(): Promise<boolean> {
    try {
        const value = await sessionStorage.getItem('force-github-production-api');
        return !!value;
    } catch (ex) {
        return false;
    }
}
