import { Button, Card } from "react-native-paper";

import Description from "../components/Description";
import Languages from "../components/Languages";
import React from "react";
import { ScrollView } from "react-native";

function DetailScreen({ navigation, route }) {
  const data = route.params?.data || {};
  return (
    <ScrollView>
      <Card>
        <Card.Cover source={{ uri: data.flags.png }} />
        <Card.Title title={data.name} subtitle={data.nativeName} />
      </Card>
      <Description data={data} />
      <Card style={{ marginHorizontal: 10 }}>
        <Button
          mode="contained"
          uppercase={false}
          onPress={() =>
            navigation.navigate("Map", {
              latlng: data.latlng,
              area: data.area,
              title: data.name,
            })
          }
        >
          View country map
        </Button>
      </Card>
      <Languages data={data} />
    </ScrollView>
  );
}

export default DetailScreen;
