import WebApp from '@twa-dev/sdk'

export enum EnumTokens {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken'
}

export const getToken = (type: EnumTokens): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    WebApp.CloudStorage.getItem(type, (error, value) => {
      if (error) {
        reject(error);
      } else {
        resolve(value || null);
      }
    });
  });
}

export const saveTokenStorage = (type: EnumTokens, token: string): void => {
  WebApp.CloudStorage.setItem(type, token);
}

export const removeFromStorage = (type: EnumTokens): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    WebApp.CloudStorage.removeItem(type, (error, success) => {
      if (error) {
        reject(error);
      } else {
        resolve(success ?? false);
      }
    });
  });
}

