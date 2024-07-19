import React from 'react';
import { TextInput } from 'react-native';
import styles from '../../styles/CartScreenStyles';

type NotesProps = {
  notes: string;
  setNotes: (notes: string) => void;
};

const NotesComponent: React.FC<NotesProps> = ({ notes, setNotes }) => {
  return (
    <TextInput
      style={styles.notesInput}
      placeholder="Add optional notes to pharmacy or delivery instructions"
      multiline
      value={notes}
      onChangeText={setNotes}
    />
  );
};

export default NotesComponent;
