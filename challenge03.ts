function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  const weightPackGift = packOfGifts.reduce((w,gift) => w+=gift.length,0)
  const weightReindeers = reindeers.reduce((w,reindeer) => w+= reindeer.length*2, 0)
  return Math.floor(weightReindeers / weightPackGift)
}
