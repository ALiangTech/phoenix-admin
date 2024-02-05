import * as localforage from 'localforage';

const LocalForage = {
  getItem(key: Localforage.SetItemKey) {
    return localforage.getItem(key);
  },
  setItem(key: Localforage.SetItemKey, value: any) {
    return localforage.setItem(key, value);
  },
};

export default LocalForage;
