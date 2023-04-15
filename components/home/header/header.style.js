import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  headerText: {
    fontFamily: FONT.regularPoppin,
    fontSize: SIZES.xxLarge,
    color: "#000000",
  },
  headerTextCrete: {
    fontFamily: FONT.regularPoppin,
    fontSize: 24,
    color: "#000000",
  },
  boldText: {
    fontFamily: FONT.boldPoppin
  },
  searchContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    // marginTop: SIZES.small,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regularPoppin,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    paddingLeft: 0,
    fontSize: 32,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    alignSelf: "flex-end",
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
