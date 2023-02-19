import { Text, View } from "react-native-animatable";
import { Card } from "react-native-elements";
import { SONGS } from "../shared/songs";
import { PROMOTIONS } from "../shared/promotions";
import { PARTNERS } from "../shared/partners";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

const featuredItem = ({ item }) => {
  if (item) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={item.image}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
              {item.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
};

const HomeScreen = () => {
  const [songs, setSongs] = useState(SONGS);
  const [partners, setPartners] = useState(PARTNERS);
  const [promotions, setPromotions] = useState(PROMOTIONS);

  const featSong = songs.find((item) => item.featured);
  const featPromotion = promotions.find((item) => item.featured);
  const featPartner = partners.find((item) => item.featured);

  return (
    <ScrollView>
      <featuredItem item={featSong} />
      <featuredItem item={featPromotion} />
      <featuredItem item={featPartner} />
    </ScrollView>
  );
};

export default HomeScreen;
