import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-ionicons";

//Assets
import Colors from "../settings/Colors";

const Rating = ({onChange}) => {
  const [rating, setRating] = useState(0);
  const ratingArr = [1, 2, 3, 4, 5];

  const changeRating = (k) => {
    setRating(k);
    onChange(k);
  }

  return (
    <View style={styles.container}>
      {ratingArr.map((k, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => changeRating(k)}
          activeOpacity={0.8}
          underlayColor={Colors.gold}
        >
          <Icon name="ios-star" size={60} color={rating >= k ? Colors.gold : Colors.lightBlue} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

Rating.defaultProps = {
  onChange: () => null,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 15,
    marginVertical: 5,
  },
});

export default Rating;
