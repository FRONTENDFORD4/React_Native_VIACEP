import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';

export default function App() {
  
  const [contador, setContador] = useState(0);

  const incremento = () => {
    setContador(contador + 2)
  }
    function decremento() {
      setContador(contador - 1)
   } else{
     // Alert.alert("impossivel decrementar a partir desse ponto")
     ToastAndroid.show("Erro, o contador já está em 0, não é impossível decrementar mais" ToastAndroid.SHORT)
     return;
    }
  }

  function showtoast() {
    Toast.show{{
      type: 'info',
      text: "Aviso",
      text2: " Impossivel decrementar",
      position: 'bottom',
      bottomoffset: 20
     }};
  }
  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={incremento}
        style={styles.button}
      >
        <Text style={{color: "white", textAlign: "center"}}>
          Incrementar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={decremento}
        style={styles.button}
      >
        <Text style={{color: "white", textAlign: "center"}}>
          Decrementar
         </Text>
      </TouchableOpacity>

      <Text>contador: {contador}</Text>
      <StatusBar style="auto" />
      <Toast/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 10,
    width: 150,
    margin: 10
  }
});
