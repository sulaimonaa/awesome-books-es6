// Importing DateTime function from luxon library
import { DateTime } from './Luxon.js';

const getCurrentDate = () => {
  // get the current time
  const now = DateTime.now();
  const formattedDate = now.toLocaleString(DateTime.DATETIME_MED);
  return formattedDate;
};

export { getCurrentDate as default };
