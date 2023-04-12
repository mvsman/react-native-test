import { Modal, View, Text, ActivityIndicator, StyleSheet } from 'react-native';

interface ModalLoaderProps {
  visible: boolean;
}

export const ModalLoader = ({ visible }: ModalLoaderProps) => (
  <Modal animationType="fade" style={styles.modal} visible={visible}>
    <View style={styles.overlay}>
      <View style={styles.content}>
        <Text>Загрузка...</Text>
        <ActivityIndicator />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    display: 'flex',
    gap: 12,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
