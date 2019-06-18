exports.getName = (id, list, idName = 'id', nameName = 'name') => {
  if(!id) return null
  const val = list[list.findIndex(v => v[idName] === id)]
  return val && val[nameName]
}

exports.getId = (name, list) => {
  if(!name) return null
  const val = list[list.findIndex(v => v.name === name)]
  return val && val.id
}

exports.getText = (id, list, name) => {
  const val = list[list.findIndex(v => v.id === id)]
  return val && val[name]
}

exports.getValue = (id, list) => {
  if(!id) return null
  const val = list[list.findIndex(v => v.id === id)]
  return val && val.value
}

exports.getRdmStr = (len) => {
  let rdmString = ''
  for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
  return rdmString.substr(0, len)
}