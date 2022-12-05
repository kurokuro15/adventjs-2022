function fitsInOneBox(boxes: { l: number, w: number, h: number }[]) {
  return boxes.sort((a, b) => {
    let aux = 0
    if (a.l > b.l)
      aux++
    else
      aux--
    if (a.h > b.h)
      aux++
    else
      aux--
    if (a.w > b.w)
      aux++
    else
      aux--
    return aux
  }).every((v, i, a) => {
    if (a[i + 1]) {
      return (v.h < a[i + 1].h && v.l < a[i + 1].l && v.w < a[i + 1].w)
    } else
      return true
  })
}
