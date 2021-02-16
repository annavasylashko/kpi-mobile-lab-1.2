// Additional: Create custom error to handle errors in methods 6 & 7

class ValueError extends Error {
  constructor(message) {
    super(message);
  }

  toString() {
    return `${this.name} ${this.message}`;
  }
}

// 3. Create class (name contains initials)

class TimeAV {
  // 4. Declare properties
  // 5.a. Default values initialization
  hour = 0;
  minute = 0;
  second = 0;

  constructor(...args) {
    if (args.length == 1) {
      //5.c. Date type initialization
      this.hour = args[0].getHours();
      this.minute = args[0].getMinutes();
      this.second = args[0].getSeconds();
    } else if (args.length == 3) {
      // 5.b. Set of values initialization
      const [hour, minute, second] = args;
      hour >= 0 && hour <= 23 ? (this.hour = hour) : 0;
      minute >= 0 && minute <= 59 ? (this.minute = minute) : 0;
      second >= 0 && second <= 59 ? (this.second = second) : 0;
    }
  }

  //6.a. Method to return string with 12-hour format values
  clock() {
    var ampm = this.hour >= 12 ? "PM" : "AM";

    let clockHour = this.hour % 12;
    clockHour = this.hour ? clockHour : 12;
    let clockMinute = this.minute < 10 ? "0" + this.minute : this.minute;
    let clockSecond = this.second < 10 ? "0" + this.second : this.second;

    var strTime = `${clockHour}:${clockMinute}:${clockSecond} ${ampm}`;

    console.log(strTime);
  }

  //6.b. Method to return addittion of 2 objects
  sumTime(...args) {
    try {
      if (args.length == 3) {
        let totalSeconds =
          this.hour * 3600 +
          args[0] * 3600 +
          this.minute * 60 +
          +args[1] * 60 +
          this.second +
          args[2];

        let newHour = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let newMinute = Math.floor(totalSeconds / 60);
        let newSeconds = totalSeconds % 60;

        if (newHour >= 24) {
          console.log(new TimeAV(newHour - 24, newMinute, newSeconds));
        } else console.log(new TimeAV(newHour, newMinute, newSeconds));
      } else throw new ValueError("Values don't fit the conditions of method");
    } catch (e) {
      console.log(e.message);
    }
  }

  // 6.c. Method to return subtracion of 2 objects
  diffTime(...args) {
    try {
      if (args.length == 3) {
        let totalSeconds =
          this.hour * 3600 +
          this.minute * 60 +
          this.second -
          (args[0] * 3600 + args[1] * 60 + args[2]);

        let newHour = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let newMinute = Math.floor(totalSeconds / 60);
        let newSeconds = totalSeconds % 60;

        if (newHour < 0 && newMinute < 0 && newSeconds < 0) {
          console.log(
            new TimeAV(newHour + 24, newMinute + 60, newSeconds + 60)
          );
        } else if (newHour < 0 && newMinute < 0) {
          console.log(new TimeAV(newHour + 24, newMinute + 60, newSeconds));
        } else if (newHour < 0) {
          console.log(new TimeAV(newHour + 24, newMinute, newSeconds));
        } else console.log(new TimeAV(newHour, newMinute, newSeconds));
      } else throw new ValueError("Values don't fit the conditions of method");
    } catch (e) {
      console.log(e.message);
    }
  }
}

const sumTwoObj = (...args) => {
  try {
    if (args.length == 6) {
      let totalSeconds =
        args[0] * 3600 +
        args[3] * 3600 +
        args[1] * 60 +
        args[4] * 60 +
        args[2] +
        args[5];

      let newHour = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      let newMinute = Math.floor(totalSeconds / 60);
      let newSeconds = totalSeconds % 60;

      if (newHour >= 24) {
        console.log(new TimeAV(newHour - 24, newMinute, newSeconds));
      } else console.log(new TimeAV(newHour, newMinute, newSeconds));
    } else throw new ValueError("Values don't fit the conditions of method");
  } catch (e) {
    console.log(e.message);
  }
};

const diffTwoObj = (...args) => {
  try {
    if (args.length == 6) {
      let totalSeconds =
        args[0] * 3600 +
        args[1] * 60 +
        args[2] -
        (args[3] * 3600 + args[4] * 60 + args[5]);

      let newHour = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      let newMinute = Math.floor(totalSeconds / 60);
      let newSeconds = totalSeconds % 60;

      if (newHour < 0 && newMinute < 0 && newSeconds < 0) {
        console.log(new TimeAV(newHour + 24, newMinute + 60, newSeconds + 60));
      } else if (newHour < 0 && newMinute < 0) {
        console.log(new TimeAV(newHour + 24, newMinute + 60, newSeconds));
      } else if (newHour < 0) {
        console.log(new TimeAV(newHour + 24, newMinute, newSeconds));
      } else console.log(new TimeAV(newHour, newMinute, newSeconds));
    } else throw new ValueError("Values don't fit the conditions of method");
  } catch (e) {
    console.log(e.message);
  }
};

// ---------- 8. EXAMPLES WITH DIFFERENT TYPES OF INITIALIZATORS ----------

console.log();
console.log(
  "---------- 8. EXAMPLES WITH DIFFERENT TYPES OF INITIALIZATORS ----------"
);
console.log();

// 5.a. Default values initialization
let defaultTime = new TimeAV();
console.log("5.a. Default values initialization");
console.log(defaultTime);
console.log();

// 5.b. Set of values initialization
let setTime = new TimeAV(19, 23, 9);
console.log("5.b. Set of values initialization");
console.log(setTime);
console.log();

//5.c. Date type initialization
let dateTime = new TimeAV(new Date("December 17, 1995 03:24:00"));
console.log("5.c. Date type initialization");
console.log(dateTime);
console.log();

// ---------- 9. USE OF METHODS 6 & 7 -------------------------------------

console.log();
console.log(
  "---------- 9. USE OF METHODS 6 & 7 -------------------------------------"
);
console.log();

//6.a. Method to return string with 12-hour format values
console.log("6.a. String with 12-hour format");
setTime.clock();
console.log();

//6.b. Method to return addittion of prev & new objects
console.log(`6.b. Sum of 19:23:9 (5.b obj) and 6:14:55`);
setTime.sumTime(6, 14, 55);
console.log();

// 6.c. Method to return subtracion of prev & new objects
console.log(`6.c. Difference of 19:23:9 (5.b obj) and 19:23:10`);
setTime.diffTime(19, 23, 10);
console.log();

// * 6.errorHandle. Method to return subtracion of prev & new objects
console.log(` * 6.errorHandle. Difference of 19:23:9 (5.b obj) and 19:10`);
setTime.diffTime(19, 10);
console.log();

// 7.a. Method to return addittion of 2 objects
console.log(
  "7.a. Method to return addittion of 2 objects (14:20:03 & 15:23:15)"
);
sumTwoObj(14, 20, 3, 15, 23, 15);
console.log();

// 7.b. Method to return subtracion of 2 objects
console.log(
  "7.b. Method to return subtracion of 2 objects (14:20:03 & 15:23:15)"
);
diffTwoObj(14, 20, 3, 15, 23, 15);
console.log();

// * 7.errorHandle. Method to return subtracion of 2 objects
console.log(
  " * 7.errorHandle. Method to return subtracion of 2 objects (14:20:03 & 15:23)"
);
diffTwoObj(14, 20, 3, 15, 23);
console.log();
