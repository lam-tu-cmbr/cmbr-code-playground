import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useGetDisks, useUpdateDisk } from '../api/apis';
import { AppContext } from '../../App';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Second = () => {
  const { state: { disks } } = useContext(AppContext);
  const [getDisks] = useGetDisks();
  const [updateDisk] = useUpdateDisk(disks && disks[1] && disks[1].id, true);
  const diskArr = (disks && disks[1]) ? [...Array(parseInt(disks[1].disks)).keys()] : [];

  const handleDisk = async () => {
    await updateDisk({
      data: {
        disks: diskArr.length - 1
      }
    });
    await getDisks();
  };

  return (
    <View style={styles.container}>
      <View style={styles.columnsContainer}>
        {diskArr.map((disk) => (
          <TouchableOpacity style={styles.disk} key={`disk-${disk}`} onPress={handleDisk} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disk: {
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'green',
    margin: 5,
    width: 50,
    height: 100,
  }
});