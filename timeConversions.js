// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {

  if (s[8] === "A") {
    if (s.slice(0, 2) === "12") {
      return "00" + s.slice(2, 8);
    }

    if (Number(s.slice(0, 2)) >= 1) {
      return s.slice(0, 8);
    }
  }

  if (s[8] === "P") {

    if (s.slice(0, 2) === "12") {
      return s.slice(0, 8);
    }

    if (Number(s.slice(0, 2)) >= 1) {
      let hour = 12 + Number(s.slice(0, 2));

      return String(hour) + s.slice(2, 8);
    }
  }
}

let s = '05:01:00PM'
console.log(timeConversion(s));