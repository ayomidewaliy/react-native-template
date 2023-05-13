import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveItem = (key: string, value: any) => {
  return AsyncStorage.setItem(key, value);
};

export const getItem = async (key: string) => await AsyncStorage.getItem(key);

export const removeItem = async (key: string) =>
  await AsyncStorage.removeItem(key);

export const clearAll = () => AsyncStorage.clear();
