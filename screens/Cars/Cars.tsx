import { Layout, ListItem } from "@/components";
import { Cars } from "@/types/cars.type";
import { formatHungarianDate } from "@/utils";
import { router } from "expo-router";
import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import styles from "./Cars.style";
import { CarsScreenProps } from "./Cars.type";

export const CarsScreen = ({ cars, loading, error }: CarsScreenProps) => {
  const renderItem = ({ item }: { item: NonNullable<Cars>[0] }) => {
    const positionsCount = item.positions?.length ?? 0;
    const lastPosition =
      item.positions && item.positions.length > 0
        ? item.positions[item.positions.length - 1]
        : undefined;

    const subParts = [`Pozíciók: ${positionsCount}`];
    if (lastPosition)
      subParts.push(`Utolsó: ${formatHungarianDate(lastPosition.t)}`);

    return (
      <ListItem
        header={item.license_no}
        sub={subParts.join("\n")}
        onPress={() => {
          router.push(`/(tabs)/cars/${item.license_no}`);
        }}
      />
    );
  };

  return (
    <Layout headerProps={{ title: "Autók" }} scrollable={true}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator style={styles.activity} />
        </View>
      ) : !cars || cars.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nincs megjeleníthető autó.</Text>
        </View>
      ) : (
        <FlatList
          data={cars}
          contentContainerStyle={styles.listContent}
          keyExtractor={(item) => item.license_no}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      )}
    </Layout>
  );
};

export default CarsScreen;
