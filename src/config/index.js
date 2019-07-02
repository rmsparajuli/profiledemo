import { Dimensions } from "react-native";
const Button_Width = Dimensions.get("window").width - 40;
const Button_Height = 40;
const Primary_Color_Red = "#B83227";
const Primary_Color_Blue = '#2475B0';
const Primary_Color_White = "#EAF0F1"
const Placeholder_Color = '#666'
const Normal_Text_Size = 14;
const TextBox_Width = Dimensions.get('window').width * .60;
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
export default (configs = {
  Button_Height,
  Button_Width,
  Primary_Color_Red,
  Primary_Color_Blue,
  Primary_Color_White,
  Placeholder_Color,
  HEIGHT,
  WIDTH,
  Normal_Text_Size,
  TextBox_Width,
  
});
