import React, { Dispatch, SetStateAction, memo } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { AppText } from '../..';
import { images } from '../../../assets';

import useStyles from './styles';
import { activeOpacity } from '../../../utils/constants';
import { height } from '../../../helpers/responsive';

interface AddTaskModalProps extends ModalProps {
  setVisible: Dispatch<SetStateAction<boolean>>;
  setError?: Dispatch<SetStateAction<string>>;
  setValue: Dispatch<SetStateAction<string>>;
  error?: string;
  value: string;
  handleAdd?(): void;
}

const AddTaskModal = ({
  visible,
  setVisible,
  value,
  setValue,
  error = '',
  setError,
  handleAdd,
}: AddTaskModalProps) => {
  const styles = useStyles();
  const { colors } = useTheme();

  const handleOnchangeText = text => {
    setValue && setValue(text);
    setError && setError('');
  };

  const handleClose = () => {
    setVisible && setVisible(false);
  };

  return (
    <Modal transparent visible={visible} statusBarTranslucent>
      <View style={styles.modal}>
        <View style={styles.wrapper}>
          <View style={styles.title}>
            <AppText label={'Add New Task'} fontWeight={'700'} />
            <TouchableOpacity
              activeOpacity={activeOpacity}
              onPress={handleClose}>
              <Image source={images.plusImage} style={styles.image} />
            </TouchableOpacity>
          </View>
          <View style={styles.textInput}>
            <TextInput
              style={styles.input}
              value={value}
              placeholder={'Enter task name'}
              onChangeText={handleOnchangeText}
            />
            {error && (
              <AppText
                label={error}
                color="red"
                style={styles.error}
                fontWeight={'400'}
                size={height(1.5)}
              />
            )}
          </View>
          <TouchableOpacity
            activeOpacity={activeOpacity}
            style={styles.btn}
            onPress={handleAdd}>
            <AppText label={'Submit'} color={colors.card} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default memo(AddTaskModal);
