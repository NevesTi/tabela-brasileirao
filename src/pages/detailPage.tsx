import { View, Text,StyleSheet, Image } from "react-native";

export default function DetailPage({route, navigation}){
    const {id,name,points,position,shieldUrl} = route.params;
    console.log(name);
     return (
        <View style={styles.container}>
            <Image source={shieldUrl} style={styles.imagetime}/>
            <Text style={styles.nometime}>{name}</Text> 
            <Text>{position}</Text>
        
        </View>
        
        
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#74f20d',
        alignItems: 'center',
        justifyContent: 'center',
      },
nometime:{
    fontSize:30,
},
imagetime:{
width:200,
height:200,
},

})