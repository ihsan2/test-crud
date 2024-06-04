import React, {ReactNode} from 'react';
import {StyleSheet, Text as TextNative, TextStyle} from 'react-native';

type TextProps = {
  children: ReactNode;
  style?: TextStyle;
  color?: string;
  family?: 'regular' | 'bold';
  size?: number;
  textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify' | undefined;
};

const Text = (props: TextProps) => {
  const {
    children,
    style,
    color = '#000',
    textAlign = 'left',
    family = 'regular',
    size = 14,
    ...rest
  } = props;

  const getFont = () => {
    switch (family) {
      case 'bold':
        return styles.fontBold;
      default:
        return styles.fontRegular;
    }
  };

  return (
    <TextNative
      {...rest}
      style={[
        getFont(),
        {
          textAlign,
          color,
          fontSize: size,
        },
        style,
      ]}>
      {children}
    </TextNative>
  );
};

const styles = StyleSheet.create({
  fontBold: {
    fontWeight: 'bold',
  },
  fontRegular: {
    fontWeight: '400',
  },
});

export default React.memo<TextProps>(Text);
