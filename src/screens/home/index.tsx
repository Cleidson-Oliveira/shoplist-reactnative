import { useState } from "react";
import { Alert, FlatList, Text, View } from 'react-native';
import { AddProduct, IProduct } from '../../components/addProduct';
import { Product } from "../../components/product";
import { styles } from './style';

export function Home () {
  const [ products, setProducts ] = useState([] as IProduct[]);

  const handleAddProduct = (product: IProduct) => {
    const productExist = products.some(({name}) => product.name === name )

    if (productExist) {
      return Alert.alert("O produto já existe na lista!");
    }
    
    setProducts(prevState => [...prevState, product]);
  }

  const deletProduct = (name: string) => {
    Alert.alert("Remover produto", `Você quer remorer ${name} da sua lista?`, [
      {
        text: "Sim",
        onPress: () => setProducts(prevState => prevState.filter(product => product.name !== name))
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de compras</Text>

      <AddProduct fn={handleAddProduct}/>

      <FlatList
        data={products}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Product
            key={item.name} 
            amount={item.amount}
            name={item.name} 
            fn={deletProduct} 
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Você não vai comprar nada? Adicione produtos a sua lista de compras.
          </Text>
        )}
      />
    </View>
  );
}

