function countHours(year: string, holidays: string[]) {
  const workWeek = [1, 2, 3, 4, 5]

  const hours = holidays.reduce((hour, holiday) => workWeek.includes((new Date(`${holiday}/${year}`)).getDay()) ? hour += 2 : hour += 0, 0)
  return hours
}
