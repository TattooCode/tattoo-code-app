 import { AsyncStorage } from 'react-native';
 
async function setCache(item, value) {
  try {
    await AsyncStorage.setItem(`@${item}`, value);
  } catch (error) {
    return error;
  }
}

async function getCache(item, callback) {
  try {
    let value = await AsyncStorage.getItem(`@${item}`);
    callback(value);
  } catch (error) {
    return error;
  }
}

export { setCache, getCache };