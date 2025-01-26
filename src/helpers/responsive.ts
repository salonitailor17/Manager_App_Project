import { Dimensions, PixelRatio } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const width = (width: number) => {
  const elemWidth = typeof width === 'number' ? width : parseFloat(width);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const height = (height: number) => {
  const elemHeight = typeof height === 'number' ? height : parseFloat(height);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export { width, height };
