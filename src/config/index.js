import { Dimensions } from "react-native";
const Button_Width = Dimensions.get("window").width - 40;
const Button_Height = 50;
const Primary_Color = "#B83227";
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
export default (configs = {
  Button_Height,
  Button_Width,
  Primary_Color,
  HEIGHT,
  WIDTH
});
