import {StyleSheet, TextStyle} from 'react-native';

export const Fonts = {};

const primary = {};

const text = {};

const form = {};

const neutral = {
  white: '#FFFFFF',
  black: '#000000',
};

export const colors = {
  primary,
  form,
  text,
  neutral,
};

export const font = {
  size: {
    h1: 28,
    h2: 24,
    h3: 20,
    body_large: 16,
    body_small: 14,
    caption: 12,
  },
  family: {
    // body: Fonts.DMSansRegular,
    // medium: Fonts.DMSansMedium,
    // bold: Fonts.DMSansBold,
  },
};

export const lineHeight = {
  h1: 36,
  h2: 32,
  h3: 28,
  body_large: 24,
  body_small: 22,
  caption: 20,
};

export const spacing = (value?: number) => {
  return StyleSheet.create({
    paddingLeft: {paddingLeft: value},
    paddingRight: {paddingRight: value},
    paddingTop: {paddingTop: value},
    paddingBottom: {paddingBottom: value},
    paddingVertical: {paddingVertical: value},
    paddingHorizontal: {paddingHorizontal: value},

    marginLeft: {marginLeft: value},
    marginRight: {marginRight: value},
    marginTop: {marginTop: value},
    marginBottom: {marginBottom: value},
    marginVertical: {marginVertical: value},
    marginHorizontal: {marginHorizontal: value},

    mLeftAuto: {marginLeft: 'auto'},
  });
};

export const flexStyles = () => {
  return StyleSheet.create({
    justifyCenter: {justifyContent: 'center'},
    justifyBetween: {justifyContent: 'space-between'},
    itemCenter: {alignItems: 'center'},
    row: {flexDirection: 'row'},
    column: {flexDirection: 'column'},
    rowCenter: {flexDirection: 'row', alignItems: 'center'},
    flex1: {flex: 1},
    flexGrow1: {flexGrow: 1},
  });
};

export const PADDING = 20;

export const hexToRgba = (hex: string, opacity: number) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return `rgba(${parseInt(result![1], 16)}, ${parseInt(
    result![2],
    16,
  )}, ${parseInt(result![3], 16)},${opacity})`;
};

export const readOnlyInput = (
  size: number,
  _isCodeInvalid: boolean,
): TextStyle => {
  const inputSize = size || 50;
  return {
    // color: colors.text.secondary,
    backgroundColor: colors.neutral.white,
    fontSize: font.size.body_large,
    borderWidth: 2,
    // borderColor: isCodeInvalid ? colors.form.error : colors.text.secondary,
    // fontFamily: font.family.medium,
    marginRight: 9.5,
    height: inputSize,
    width: inputSize,
    textAlign: 'center',
    borderRadius: 8,
  };
};
