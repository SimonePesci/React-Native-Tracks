import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  //   console.log(locations);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  //   let points = [];
  //   for (let i = 0; i < 20; i++) {
  //     if (i % 2 === 0) {
  //       points.push({
  //         latitude: 37.7749 + i * 0.001,
  //         longitude: -122.4194 + i * 0.001,
  //       });
  //     } else {
  //       points.push({
  //         latitude: 37.7749 - i * 0.002,
  //         longitude: -122.4194 + i * 0.002,
  //       });
  //     }
  //   }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      //   region={{
      //     ...currentLocation.coords,
      //     latitudeDelta: 0.01,
      //     longitudeDelta: 0.01,
      //   }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;

// const startWatching = async () => {
//     try {
//       const { granted } = await requestPermissionsAsync();
//       if (!granted) {
//         throw new Error('Location permission not granted');
//       }
//     } catch (e) {
//       setErr(e);
//     }
//   };

// import { requestForegroundPermissionsAsync } from 'expo-location';

// const { granted } = await requestForegroundPermissionsAsync();

// initialLocation = {
//     longitude: -122.0312186,
//     latitude: 37.33233141,
//   };
//   return (
//     <MapView
//       style={styles.map}
//       initialRegion={{
//         ...initialLocation,
//         latitudeDelta: 0.01,
//         longitudeDelta: 0.01,
//       }}
//     >
