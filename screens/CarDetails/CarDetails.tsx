import { Layout, ListItem } from "@/components";
import { formatHungarianDate } from "@/utils";
import { router } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./CarDetails.style";
import { CarDetailsScreenProps } from "./CarDetails.type";

export const CarDetailsScreen = ({
  car,
  positions,
  loading,
}: CarDetailsScreenProps) => {
  const renderItem = ({ item }: { item: NonNullable<typeof positions>[0] }) => {
    const coord = `Lat: ${item.gps_lat.toFixed(
      6
    )} • Lon: ${item.gps_lon.toFixed(6)}`;
    const speed = `Sebesség: ${item.gps_speed.toFixed(2)} km/h`;
    const extras = [
      item.road ? `Útvonal: ${item.road}` : null,
      item.city ? `Város: ${item.city}` : null,
    ]
      .filter(Boolean)
      .join(" • ");

    const subParts = [coord, speed, extras].filter(Boolean).join("\n");

    return <ListItem header={formatHungarianDate(item.t)} sub={subParts} />;
  };

  return (
    <Layout
      headerProps={{
        title: car?.license_no ? `${car.license_no}` : "Autó",
        onBackPress: () => router.back(),
      }}
    >
      {loading ? (
        <View style={styles.container}>
          <Text style={styles.meta}>Betöltés...</Text>
        </View>
      ) : !positions || positions.length === 0 ? (
        <View style={styles.empty}>
          <Text>Nincs pozíció ehhez az autóhoz.</Text>
        </View>
      ) : (
        <FlatList
          data={positions}
          keyExtractor={(item, idx) => `${item.t}-${idx}`}
          renderItem={renderItem}
        />
      )}
    </Layout>
  );
};

export default CarDetailsScreen;
