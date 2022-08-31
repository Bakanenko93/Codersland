const toUpperCase = (s) => {
  return s.toUpperCase();
}

const toLowerCase = (s) => {
  return s.toLowerCase();
}

export const createSamples = (s) => {
  return s.toLowerCase()+s.toUpperCase();
}