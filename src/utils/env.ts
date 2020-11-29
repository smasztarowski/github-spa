export class Env {
    public static isDevelopment(): boolean {
        return process.env.NODE_ENV === 'development';
    }
    public static isProduction(): boolean {
        return process.env.NODE_ENV === 'production';
    }
}
