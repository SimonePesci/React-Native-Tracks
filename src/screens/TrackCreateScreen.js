import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
import { FontAwesome } from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView style={styles.SafeView} forceInset={{ top: "always" }}>
      <Text h3>Create a Track</Text>
      <Map />
      {/* <NavigationEvents
        onWillBlur={() => {
          console.log("will blur");
        }}
      /> */}
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>

    // <>
    //   <Text h3>Create a Track</Text>
    //   <Map />
    // </>
  );
};

TrackCreateScreen.navigationOptions = () => {
  return {
    title: "Add Track",
    tabBarIcon: <FontAwesome name="plus" size={20} />,
  };
};

const styles = StyleSheet.create({
  SafeView: {
    flex: 1,
    marginTop: 10,
  },
});

export default withNavigationFocus(TrackCreateScreen);
