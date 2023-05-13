import React from 'react';
import {Text, StyleProp, TextStyle, TextProps} from 'react-native';

// import {colors, font} from '@commons/style-guide';

type PProps = TextProps & {
  color?: string;
  width?: string;
  align?: 'left' | 'right' | 'center';
  size?: number;
  left?: number | string;
  toUpper?: boolean;
  pad?: string | number;
  gut?: string | number;
  top?: number | string;
  isBold?: boolean;
  style?: StyleProp<TextStyle>;
  isMedium?: boolean;
  opacity?: number;
  isSingleLine?: boolean;
  isDoubleLine?: boolean;
  isCapitalize?: boolean;
};

export const P: React.FC<PProps> = ({
  children,
  color,
  width = 'auto',
  align = 'left',
  size = 16,
  left = 0,
  toUpper = false,
  pad,
  gut,
  top = 0,
  //   isBold = false,
  onPress,
  style,
  //   isMedium,
  opacity,
  isSingleLine,
  isDoubleLine,
  isCapitalize,
  ...extras
}) => {
  const others: any = {};
  const padding = convertStringToStyle(pad);
  const margin = convertStringToStyle(gut);
  //   const fontFamily = isMedium ? 'medium' : isBold ? 'bold' : 'body';
  let textTransform = toUpper ? 'uppercase' : 'none';

  if (isSingleLine) {
    others.numberOfLines = 1;
    others.ellipsizeMode = 'tail';
  } else if (isDoubleLine) {
    others.numberOfLines = 2;
    others.ellipsizeMode = 'tail';
  }

  if (isCapitalize) {
    textTransform = 'capitalize';
  }

  return (
    <Text
      style={{
        // fontFamily: font.family[fontFamily],
        left,
        width,
        // color: color || colors.text.primary,
        color,
        top,
        fontSize: size,
        textAlign: align,
        paddingTop: padding[0],
        paddingRight: padding[1],
        paddingBottom: padding[2],
        paddingLeft: padding[3],
        marginTop: margin[0],
        marginRight: margin[1],
        marginBottom: margin[2],
        marginLeft: margin[3],
        textTransform,
        opacity: opacity,
        // @ts-ignore
        ...style,
      }}
      allowFontScaling={false}
      onPress={onPress}
      {...others}
      {...extras}>
      {children}
    </Text>
  );
};

const convertStringToStyle = (value?: string | number) => {
  if (typeof value === 'number') {
    return [value, value, value, value];
  }
  if (!value) {
    return [0, 0, 0, 0];
  }

  return value
    .replace(/px/g, '')
    .split(' ')
    .map(v => parseInt(v, 10));
};
