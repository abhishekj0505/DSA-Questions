function debounce(func, delay) {
  let timer;

  return function (...args) {
    const context = this;

    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}


const logMessage = (msg) => console.log("Logging:", msg);

const debouncedLog = debounce(logMessage, 1000);

debouncedLog("Hello");
debouncedLog("Hi");
debouncedLog("Abhishek"); //only this will be logged


