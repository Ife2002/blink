import { StyleSheet, Text, View, TextInput,
    ScrollView, FlatList, Dimensions, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native'
import React, {Component, useState, useEffect} from 'react'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons'; 
import List from '../Components/List';
import SearchBar from '../Components/SearchBar';

const datalist =[{key: 1},{key: 2},{key: 3}, {key: 4}, {key: 5}, {key: 6},]


const numColumns = 2
const WIDTH = Dimensions.get('window').width


const Input =(props) => {
    return(
      <View style={[styles.input, {flexDirection: 'row', alignItems: 'center',
      }]}>
        <View style={{padding: 10,}}>
        <AntDesign name="search1" size={24} color="white" />
        </View>
  <TextInput style={props.style} 
        placeholder={props.placeholder}
        placeholderTextColor={props.textColor}
        placeholderStyle={props.pstyle}
        />
     </View>
  );}


const Search = () => {

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from the fake api
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);
  

    const renderitems =({item, index})=> {
        return(
        <View style={styles.itemStlyle}>
            <Text style={styles.itemText}>{item.key}</Text>
        </View>
        )
    }
    const renderitems2 =({item, index})=> {
        return(
        <View style={styles.horizontallist}>
            <Text style={{color: '#000000', fontSize: 35,}}>{item.key}</Text>
        </View>
        )
    }
    const Recent = () => {
      return (
        <List
        searchPhrase={searchPhrase}
        data={fakeData}
        setClicked={setClicked}
      /> 
      )
    }
/*{!fakeData ? (
        <ActivityIndicator size="large" />
      ) : (
        
          <List
            searchPhrase={searchPhrase}
            data={fakeData}
            setClicked={setClicked}
          /> 
        
          )} */
    const Header = () =>{
      return(
        <View style={{alignItems: 'center', justifyContent: 'center', marginVertical: 5,}}>
          <Text style={{color: 'white', fontSize: 30,}}> Search</Text>
        </View>
      )
    }

  return (

    <View style={styles.container}>
        <ScrollView>
        {!clicked && <Header />}
   <View style={{flex: 1, position: 'relative', zIndex: 100,}}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {clicked && <Recent />}
      </View>
      <View style={{ flex: 1, //position: "relative", zIndex: 200,
      }}>
        <Text style={{color: '#FFFFFF', //fontFamily: 'DMSans-Med',
         fontSize: 20, marginVertical: 10,}}>Trending</Text>
        <FlatList
       data={datalist}
       renderItem={renderitems2}
       horizontal
       keyExtractor={(item, index) => index.toString()}
      />
      <Text style={{color: '#FFFFFF', //fontFamily: 'DMSans-Med',
         fontSize: 20, marginVertical: 10,}}>Categories</Text>
      <FlatList
       data={datalist}
       style={{paddingTop: 0,}}
       renderItem={renderitems}
       numColumns={numColumns}
       keyExtractor={(item, index) => index.toString()}
      />
      </View>
      </ScrollView>
    </View>
    
  )
}

export default Search

const styles = StyleSheet.create({
 container: {
  flex: 1,
  paddingTop: StatusBar.currentHeight,
  paddingHorizontal: 9,
  backgroundColor: '#0A0A0A',
 },
 horizontallist: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 5,
    width: 300,
    height: 100,
    borderRadius: 5,
    marginVertical: 5, 
 },
 itemStlyle: {
 backgroundColor: '#ffffff',
 alignItems: 'center',
 justifyContent: 'center',
 flex: 1,
 marginHorizontal: 5,
 height: WIDTH / numColumns,
 borderRadius: 5,
 marginVertical: 5,
 
 },
 itemText: {
  fontSize: 40,
  color: '#000000',
 },
 input: {
    margin: 0,
    marginVertical: 20,
    height: 50,
    
    alignItems: 'center',
    fontSize: 16,
    backgroundColor: "#353736",
    borderRadius: 5,
    color: "white",
    //fontFamily: 'DMSans-Regu',
    marginTop: 0,
  },
})