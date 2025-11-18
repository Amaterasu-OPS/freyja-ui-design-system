export const hexToRGBObject = (hex: string): { r: number; g: number; b: number } => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result) {
    result = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(hex);

    if (!result) {
      throw new Error('Invalid hex color format ' + hex);
    } else {
      result = [
        '',
        result[1] + result[1],
        result[2] + result[2],
        result[3] + result[3]
      ] as unknown as RegExpExecArray;
    }
  }

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  };
};

export const hexToRGBA = (hex: string, alpha: number = 1): string => {
  const { r, g, b } = hexToRGBObject(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const rgbToHex = (r: number, g: number, b: number): string => {
  const toHex = (num: number) => {
    const hex = num.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export const rgbToRGBA = (r: number, g: number, b: number, alpha: number = 1): string => {
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const hexToLuma = (hex: string): number => {
  const { r, g, b } = hexToRGBObject(hex);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
};

export const isLightColor = (hex: string): boolean => {
  return hexToLuma(hex) > 0.5;
};

export const isDarkColor = (hex: string): boolean => {
  return !isLightColor(hex);
};