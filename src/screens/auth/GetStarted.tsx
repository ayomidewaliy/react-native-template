import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Screens} from 'navigation/types';
import {flexStyles, font} from 'commons';
import {screenWidth} from 'utils';
import {P} from 'components/Text';

type GetStartedProps = NativeStackScreenProps<Screens, 'GetStarted'>;

const ITEMS = [
  {
    title: 'Title One',
    caption: 'Caption One',
  },
  {
    title: 'Title Two',
    caption: 'Caption Two',
  },
  {
    title: 'Title Three',
    caption: 'Caption Three',
  },
];

export const GetStarted: React.FC<GetStartedProps> = ({}) => {
  const insets = useSafeAreaInsets();

  const styles = createStyles(insets.top + 40);

  return (
    <ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      bounces={false}>
      {ITEMS.map((item, index) => {
        return (
          <View style={styles.scrollContainer} key={index}>
            <View style={[flexStyles().itemCenter, flexStyles().justifyCenter]}>
              <P gut="24px 0 12px 0" size={font.size.h3} isBold>
                {item.title}
              </P>
              <P size={font.size.body_large} gut="0 0 24px 0">
                {item.caption}
              </P>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

function createStyles(paddingTop: number) {
  return StyleSheet.create({
    scrollContainer: {
      width: screenWidth,
      paddingTop,
      paddingBottom: 30,
      flex: 1,
      paddingHorizontal: 16,
    },
  });
}
