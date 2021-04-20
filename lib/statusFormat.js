

export const formatStatusIndex = (level, goodInterval, outerRange) => {
  if (level === 0)
    return 0 // Untrack
  else if (level >= goodInterval[0] && level <= goodInterval[1])
    return 3 // Good
  else if (level < goodInterval[0] + outerRange)
    return 1 // Lowest
  else if (level < goodInterval[0])
    return 2 // Low
  else if (level > goodInterval[1] + outerRange)
    return 4 // Highest
  else if (level > goodInterval[1])
    return 5 // High
}