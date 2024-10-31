import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants';

export type Props = {
  handleGoBack: () => void;
};

const GoBackButton: React.FC<Props> = ({handleGoBack}) => {
  return (
    <>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons
          name={'arrow-back-outline'}
          color={colors.primary}
          size={25}
        />
      </TouchableOpacity>
    </>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
