import WebApp from '@twa-dev/sdk'

export enum EnumTokens {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken'
}

export const getItem = (key: EnumTokens | string): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    WebApp.CloudStorage.getItem(key, (error, value) => {
      if (error) {
        reject(error);
      } else {
        resolve(value || null);
      }
    });
  });
}

export const saveToStorage = (key: EnumTokens | string, value: string): void => {
  removeFromStorage(key)
  WebApp.CloudStorage.setItem(key, value);
}

export const removeFromStorage = (key: EnumTokens | string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    WebApp.CloudStorage.removeItem(key, (error, success) => {
      if (error) {
        reject(error);
      } else {
        resolve(success ?? false);
      }
    });
  });
}

