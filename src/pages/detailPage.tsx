import { View, Text,StyleSheet, Image, TouchableOpacity } from "react-native";

export default function DetailPage({route, navigation}){
    const {id,name,points,position,shieldUrl} = route.params;
    console.log(name);
     return (
        <View style={styles.container}>
            <Text style={styles.nomecampeonato}>Campeonato Brasileiro A</Text>
            <Image style={styles.imagetime} source={shieldUrl}/>
            <Text style={styles.nometime}>{name}</Text> 
            <Text style={styles.posicaotime}> Posição: {position}</Text>

          <View style={styles.containerbutton}>
                <TouchableOpacity style={styles.buttonresult} onPress={() => {
            navigation.navigate('result');
          }} >
                  <Text style={styles.title_result}>Resultados</Text>
                </TouchableOpacity>
              </View>
        
        </View>
        
        
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#b7d5e5',
        alignItems: 'center',
        justifyContent: 'center',
      },
      nomecampeonato:{
fontSize:30,
marginBottom:80

      },
nometime:{
    fontSize:30,
    marginBottom:40
},
imagetime:{
    width:200,
    height:200,
    backgroundColor:'#008000',
    marginBottom:50,
    

},
posicaotime:{
    fontSize:30
    
},
buttonresult: {
backgroundColor:'#ff0000',
borderRadius:10



  },
  containerbutton:{
   marginTop:50

  },
  title_result:{
    fontSize:20
  }

})