import { formatDuration } from 'date-fns'

interface Args {
  startDate: string
}

/**
 * Calculates the duration of a job based on the start date
 * @param args.startDate - The start date of the job in the format YYYY-MM-DD
 * @returns The duration of the job
 */
export function calculateCurrentJobDuration(args: Args): string {
  const currentDate = new Date()
  const startDate = new Date(args.startDate)

  let years = currentDate.getFullYear() - startDate.getFullYear()
  let months = currentDate.getMonth() - startDate.getMonth()

  if (months < 0) {
    years--
    months += 12
  }

  return formatDuration({ months, years })
}
