interface myDate {
  year: number
  month: string
  day: string
}

export function changeDate(date: string): myDate {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const newDate = date.split('T')[0].split('-')

  return {
    year: +newDate[0],
    month: months[+newDate[1] - 1],
    day: cahngeNumber(+newDate[2]),
  }
}

function cahngeNumber(number: number) {
  switch (number) {
    case 1:
      return `${number}st `
    case 2:
      return `${number}nd `
    case 3:
      return `${number}rd `
    default:
      return `${number}th `
  }
}
