import React from "react";
import { Text } from "react-native";
import { FONT } from "../../constants";

const DetailContent = ({detailText}) => {

  return (
    <>
        <Text style={{fontFamily: FONT.boldPoppin, fontSize: 24, lineHeight: 36}}>{detailText.title}</Text>
        <Text style={{fontFamily: FONT.regularPoppin, fontSize: 12, lineHeight: 18}}>{detailText.date}</Text>
        <Text style={{marginTop: 40, fontFamily: FONT.regularPoppin, fontSize: 16, lineHeight: 24}}>
            {detailText.description}
        </Text>
    </>
  );
};

export default DetailContent;
