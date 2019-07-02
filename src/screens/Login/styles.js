import { StyleSheet } from "react-native";
import configs from "../../config";

const styles = StyleSheet.create({
  text: {
    fontSize: configs.Normal_Text_Size,
    color: configs.Primary_Color_Red
  },
  textSecond: {
    fontSize: configs.Normal_Text_Size,
    color: configs.Placeholder_Color,
    marginHorizontal: 10,
  },
  loginskipText: {
    fontSize: configs.Normal_Text_Size,
    color: configs.Primary_Color_White
  },
  logoView: {
    justifyContent: 'center',
    alignItems: "center",
    margin: 40,
    height: 120,
    width: 250,
  },
  logo: {
    height: '100%',
    width: '100%'
  },
  _forgetPass: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  _loginSkip: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  _login: {
    marginRight: 10,

    borderRadius: 5,
    width: 140,
    padding: 5,
    height: configs.Button_Height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _strikeLine: {
    textDecorationLine: 'line-through'
  },
  _strikeView: {
    flexDirection: 'row'
  },
  _otherLoginView: {
    borderWidth: 0,
    marginTop: 20,
    alignItems: 'center'
  },
  _facebookGamilView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  _facebookGamilLogo:{
    height:'100%',
    width:'100%',  
  },
  _facebookGamilTouch:{
    // borderWidth:1,
    margin:5,
    height:50,
    width:50,
    borderRadius:25,
    alignItems:'center',
    padding:10,
    justifyContent:'center',
  }
})

export default styles;