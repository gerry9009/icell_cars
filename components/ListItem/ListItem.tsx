import { Colors, Spacing } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { ElementType } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./ListItem.style";
import { ListItemProps } from "./ListItem.type";

export const ListItem = ({ header, sub, onPress }: ListItemProps) => {
  const Container: ElementType = onPress ? TouchableOpacity : View;

  const pressProps = onPress ? { onPress, activeOpacity: 0.7 } : {};

  return (
    <Container style={styles.container} {...pressProps}>
      <View style={styles.left}>
        <Text style={styles.header} numberOfLines={1}>
          {header}
        </Text>
        {sub ? (
          <Text style={styles.sub} numberOfLines={2}>
            {sub}
          </Text>
        ) : null}
      </View>

      <View style={styles.right} pointerEvents="none">
        {onPress ? (
          <Ionicons
            name="chevron-forward"
            size={Spacing[24]}
            color={Colors.primary}
          />
        ) : null}
      </View>
    </Container>
  );
};
