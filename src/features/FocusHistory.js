import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.item}>Nothing has been focused on</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Things we've focused on : </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: fontSizes.md,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    padding: fontSizes.md,
    fontWeight: 'bold',
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: fontSizes.sm,
  },
});
