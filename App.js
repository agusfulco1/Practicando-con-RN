import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {useState, useEffect} from 'react'
import Separator from './Separator';

export default function App() {
  const [text, onChangeText] = useState("")
  const [textoAMostrar, setText] = useState("")
  const [caracteres, setCaracteres] = useState(0)
  const [seMuestra, setSeMuestra] = useState(false)

  const mostrarTexto = () => {
    setSeMuestra(true)
    setText(text)
  }

  useEffect( () => {
    setCaracteres(text.length)
  }, [text])
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TextInput
          style={styles.input} 
          onChangeText={onChangeText}
          value={text}
          placeholder='ingrese texto'
          
        />
        <Text style={styles.caracteres}>caracteres: {caracteres}</Text>
        <Button 
          title='Presioname'
          style={styles.button}
          onPress={mostrarTexto}
        />
        {seMuestra ? (
          <View>
            <Separator />
            <Text style={styles.palabra}>{textoAMostrar}</Text>
          </View>
        ) : null}
      </View>
      <StatusBar style="auto" />
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
  box: {
    borderColor: 'black',
    borderWidth:  1,
    padding: 10,
  },
  input: {
    marginBottom: 10,
    padding: 4,
    borderWidth: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  caracteres: {
    textAlign: 'right',
    color: 'red',
  },
  palabra: {
    textAlign: 'center',
  },
  separator: {
    height: 10,
    backgroundColor: "red",
    marginVertical: 1,
    borderWidth: 4,
    borderColor: 'black'
  },
});
