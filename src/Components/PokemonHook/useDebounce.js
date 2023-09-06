function useDebounce(cb, delay = 2000) {
  let timerid;
  return (...arg) => {
    // console.log(arg);
    clearTimeout(timerid)
    timerid = setTimeout(() => {
      cb(...arg);
    }, delay);
  };
};

export default useDebounce;
