export default function parse(txt, patternObjs, options) {
  let arr, val, index, iVal
  let linkIndex = 0
  let eventIndex = 0
  const { links ,events} = options
  for (const po of patternObjs) {
    const { pattern, offset, style, link, event } = po
    do {
      arr = pattern.exec(txt)
      if (arr) {
        val = arr[0]
        index = arr.index
        iVal = val.slice(offset, val.length - offset)
        txt = txt.split('')
        if (links && link) {
          txt.splice(index, val.length, `<a href='${links[linkIndex] || '#'}' style="${style}">${iVal}</a>`)
          linkIndex++
        } else if (
          events && Array.isArray(events) && events[eventIndex]
          && 
          event
        ) {
          txt.splice(index, val.length, `<span id="${events[eventIndex].id}" style="${style}">${iVal}</span>`)
          eventIndex++
        } else {
          txt.splice(index, val.length, `<span style="${style}">${iVal}</span>`)
        }
        txt = txt.join('')
      }
    } while (arr)
  }
  // console.log(txt)
  return txt
}
