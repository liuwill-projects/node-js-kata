const findPos = (list, val) => {
  let pos = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i] < val) {
      pos++
    } else {
      break
    }
  }
  return pos
}

const insertItem = (list, val) => {
  let pos = findPos(list, val)

  let front = list.slice(0, pos)
  let end = list.slice(pos)
  front[pos] = val
  return  front.concat(end)
}

export const insertSort = (raw) => {
  let list = []
  raw.forEach(item => {
    list = insertItem(list, item)
  })
  return list
}
