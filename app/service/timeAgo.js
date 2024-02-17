import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

const timeAgo = (timeStamp) => {
  const jsDate = new Date(timeStamp * 1000);
  const now = new Date();

  const minutesAgo = differenceInMinutes(now, jsDate);
  const hoursAgo = differenceInHours(now, jsDate);
  const daysAgo = differenceInDays(now, jsDate);
  const monthsAgo = differenceInMonths(now, jsDate);
  const yearsAgo = differenceInYears(now, jsDate);

  if (minutesAgo < 1) {
    return "Baru saja";
  } else if (minutesAgo < 60) {
    return `${minutesAgo} menit yang lalu`;
  } else if (hoursAgo < 24) {
    return `${hoursAgo} jam yang lalu`;
  } else if (daysAgo < 30) {
    return `${daysAgo} hari yang lalu`;
  } else if (monthsAgo < 12) {
    return `${monthsAgo} bulan yang lalu`;
  } else {
    return `${yearsAgo} tahun yang lalu`;
  }
};
export default timeAgo;
