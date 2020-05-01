import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BackgroundCurve from '../components/BackgroundCurve';
import Entypo from 'react-native-vector-icons/Entypo';
import BoxItem from './BoxItem';
import ListSearch from './ListSearch';
import {useNavigation} from '@react-navigation/native';
const Search = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <BackgroundCurve style={styles.svg} />
      <ScrollView style={styles.bodyContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigate.goBack()}>
            <Entypo name="chevron-left" color="#fff" size={30} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Search Result</Text>
        </View>
        <BoxItem />
        <ListSearch />
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  svg: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    top: -170,
  },
  bodyContainer: {
    marginTop: 60,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    marginEnd: 30,
  },
});
