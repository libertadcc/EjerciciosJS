const times = [60, 75, 79, 80, 55, 59];

const total = times.reduce((acc, current) => acc + current);
const media = total/times.length;

console.log('media', media);