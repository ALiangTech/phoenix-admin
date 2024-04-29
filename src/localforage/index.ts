import * as localforage from 'localforage';

const LocalForage = {
  getItem<T>(key: Localforage.SetItemKey) {
    return localforage.getItem<T>(key);
  },
  setItem(key: Localforage.SetItemKey, value: any) {
    return localforage.setItem(key, value);
  },
};

export default LocalForage;
