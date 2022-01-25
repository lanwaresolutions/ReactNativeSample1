import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { ScrollView, StyleSheet } from "react-native";

import { Card } from "react-native-paper";
import ListItem from "../components/ListItem";
import React from "react";
import { screenWidth } from "./../styles/layout";

const initialRegionValue = {
  latitude: 41.239357944,
  longitude: 75.7767820358,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

function MapScreen({ navigation, route }) {
  const title = route.params?.title;
  const latlng = route.params?.latlng;
  const area = route.params?.area;
  const [region, setRegion] = React.useState({
    latitude: latlng[0],
    longitude: latlng[1],
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const onRegionChange = (region) => {
    setRegion(region);
  };

  return (
    <ScrollView>
      <MapView
        initialRegion={initialRegionValue}
        region={region}
        onRegionChange={onRegionChange}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
      >
        <Marker
          coordinate={{
            latitude: latlng[0],
            longitude: latlng[1],
          }}
          title={title}
        />
      </MapView>
      <Card>
        <Card.Content>
          <ListItem label="Latitude" value={latlng[0]} />
          <ListItem label="Longitude" value={latlng[1]} />
          <ListItem label="Area" value={area} />
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
  mapStyle: {
    width: "100%",
    height: screenWidth,
  },
});
