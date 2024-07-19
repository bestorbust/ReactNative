import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Pressable } from 'react-native';
import styles from '../../styles/PharmacyStyles';

interface ChangeAddressModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (newAddress: string) => void;
}

const ChangeAddressModal: React.FC<ChangeAddressModalProps> = ({ visible, onClose, onSave }) => {
  const [newAddress, setNewAddress] = useState('');

  const handleSave = () => {
    onSave(newAddress);
    onClose();
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Change Address</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Enter new address"
            value={newAddress}
            onChangeText={setNewAddress}
          />
          <View style={styles.modalButtons}>
            <Pressable style={styles.modalButton} onPress={onClose}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.modalButton} onPress={handleSave}>
              <Text style={styles.modalButtonText}>Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ChangeAddressModal;
