const createInterRandomStr = (str: string): string => {
  return str.replace(/http:(.*?).html/, "<a href= http:$1.html</a>");
};
