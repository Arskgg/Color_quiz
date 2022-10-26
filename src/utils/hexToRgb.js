export const hexToRgb = (hex) => {
  let r, g, b, css;

  if (hex == "") {
    r = "";
    g = "";
    b = "";
    css = "";
  }
  if (hex.charAt(0) == "#") hex = hex.substring(1, hex.length);
  if (hex.length != 6 && hex.length != 8 && hex.length != 3) {
    return;
  }
  if (hex.length == 3) {
    r = hex.substring(0, 1);
    g = hex.substring(1, 2);
    b = hex.substring(2, 3);
    r = r + r;
    g = g + g;
    b = b + b;
  } else {
    r = hex.substring(0, 2);
    g = hex.substring(2, 4);
    b = hex.substring(4, 6);
  }
  if (hex.length == 8) {
    a = hex.substring(6, 8);
    a = (parseInt(a, 16) / 255.0).toFixed(2);
  }
  r = parseInt(r, 16);
  g = parseInt(g, 16);
  b = parseInt(b, 16);
  css = "rgb(" + r + ", " + g + ", " + b + ")";
  if (hex.length == 8) css = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";

  return { hex: `#${hex}`, r, g, b, css };
};
