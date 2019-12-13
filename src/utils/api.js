import storageFactory from '@/utils/storage-factory.js'

const storage = storageFactory(() => localStorage)
const prefix = 'concept'
const activityType = 'activity'

const encode = (item) => JSON.stringify(item)
const decode = (string) => {
  const object = JSON.parse(string)
  if (object && object.hasOwnProperty('created')) {
    object['created'] = new Date(object.created)
  }
  return object
}

const key = (type, id) => `${prefix}-${type}-${id}`
const set = (type, item) => storage.setItem(key(type, item.id), encode(item))
const get = (type, id) => decode(storage.getItem(key(type, id)))
const getByKey = (key) => decode(storage.getItem(key))
const getAll = (type) => storage.keys()
  .filter(key => key.includes(`${prefix}-${type}`))
  .map(key => getByKey(key))

export const saveActivity = (activity) => set(activityType, activity)
export const getActivity = (id) => get(activityType, id)
export const getAllActivity = () => getAll(activityType)
