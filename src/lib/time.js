import timeFormat from 'hh-mm-ss'

export const formatSecondsToStopWatch = (seconds, displayFormat = 'hh:mm:ss') => {
  return timeFormat.fromS(seconds, displayFormat)
}

// Eventualy make this part of settings
export const roundToNearestMinutes = (seconds, nearestMinute = 15) => {
  let minutes = Math.ceil(seconds / 60)
  return (nearestMinute * Math.ceil(minutes / nearestMinute))
}