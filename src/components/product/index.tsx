import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface Props {
    amount: number,
    name: string,
    fn: (name: string) => void
}

export function Product({amount, name, fn}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{amount} - {name}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => fn(name)}
            >
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    );
}
