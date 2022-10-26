const componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

// export const rgbToHex = (r, g, b) => {
//   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
// };

export const rgbToHex = (r, g, b) => {
  const hex = [r.toString(16), g.toString(16), b.toString(16)];
  hex.forEach((val, nr) => {
    if (val.length === 1) {
      hex[nr] = "0" + val;
    }
  });

  return "#" + hex.join("").toUpperCase();
};
