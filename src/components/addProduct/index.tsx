import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from './style';

export interface IProduct {
  name: string,
  amount: number
}

interface Props {
  fn: (product: IProduct) => void
}

export function AddProduct({fn}: Props) {

  const [ productName, setProductName ] = useState("");
  const [ productAmount, setProductAmount ] = useState(1);

  const handleProductName = () => {
    fn({name: productName, amount: productAmount});
    setProductName("");
  }

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Nome do produto"
        placeholderTextColor="#6B6B6B"
        style={styles.inputName}
        value={productName}
        onChangeText={setProductName}
      />

      <TextInput
        keyboardType="numeric"
        placeholderTextColor="#6B6B6B"
        style={styles.inputNumber}
        value={productAmount.toString()}
        onChangeText={(amount) => setProductAmount(+amount)}
      />
      <TouchableOpacity 
        onPress={() => handleProductName()} 
        style={styles.button}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
