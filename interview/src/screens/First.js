import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useGetDisks, useUpdateDisk } from '../api/apis';
import { AppContext } from '../../App';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const First = ({ navigation }) => {
  const { state: { disks } } = useContext(AppContext);
  const [getDisks] = useGetDisks();
  const [updateDisk] = useUpdateDisk(disks && disks[0] && disks[0].id, true);
  const diskArr = (disks && disks[0]) ? [...Array(parseInt(disks[0].disks)).keys()] : [];

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
      <Button title="Go to Second" onPress={() => navigation.navigate('Second')} />
      <View style={styles.columnsContainer}>
        {diskArr.map((disk) => (
          <TouchableOpacity style={styles.disk} key={`disk-${disk}`} onPress={handleDisk} />
        ))}
      </View>
    </View>
  )
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