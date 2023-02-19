import { Text, View } from "react-native-animatable";
import { Card } from "react-native-elements";
import { SONGS } from "../shared/songs";
import { PROMOTIONS } from "../shared/promotions";
import { PARTNERS } from "../shared/partners";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

/*
The FeaturedItem function takes in an object as a parameter which is a general list of information that each image would have. 
Those would include the asset, text, the featured boolean and ID.
This function would include an if statement as a spot check (SC) to make sure that the right info was selected.
If not it will return an empty view. 

When it works it will create a simple Card utilizing the image, name and description along with some minor CSS 
*/

const FeaturedItem = ({ item }) => {
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

/*
The HomeScreen function is tasked to list all the assets needed by destructuring the pages via the useState hook
After that the singular featured asset found in each component is needed which would have the 'featured' prop of True

Create a const variable assinged to the state variable 'songs' etc. it then uses the find method used usually to search
for a boolean or singular item with the 'item' param since its also assigned to the FeaturedItem function and will be utilized there.
But since 'item' is a general fill in the blank it needs another step to find the right asset. 

So an arrow function is needed where within item we use dot notation to select the asset that has featured as true. 

Lastly, return the FeaturedItem function with the item assigned to each feat(x) function since three are needed. 
All three will be wrapped around the ScrollView tag which will allow the user to scroll through them on the app.


*/

const HomeScreen = () => {
  const [songs, setSongs] = useState(SONGS);
  const [partners, setPartners] = useState(PARTNERS);
  const [promotions, setPromotions] = useState(PROMOTIONS);

  const featSong = songs.find((item) => item.featured);
  const featPromotion = promotions.find((item) => item.featured);
  const featPartner = partners.find((item) => item.featured);

  return (
    <ScrollView>
      <FeaturedItem item={featSong} />
      <FeaturedItem item={featPromotion} />
      <FeaturedItem item={featPartner} />
    </ScrollView>
  );
};

export default HomeScreen;
