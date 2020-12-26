import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity } from "react-native";

export default class App extends React.Component {
  state = {
    scoreValue: 1,
    userChoice:"",
    botChoice:"",
  };

  deviceType() {
    if (Platform.OS === "web") {
      return {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      };
    } else {
      return {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      };
    }
  }

  getUserInput = () => {

    var botNum = Math.floor(Math.random() * 30) + 1
   /* var rockRange = {
        from: 0,
        to: 10
    }
    var paperRange = {
      from: 11,
        to: 20
    }
    var scissorsRange = {
      from: 21,
        to: 30
    }*/



    if((botNum >= 1) && (botNum <= 10)) {
      this.setState({
        botChoice: "Rock"
      })
    } else if((botNum >= 11) && (botNum <= 20)) {
      this.setState({
        botChoice: "Paper"
      })
    } else if((botNum >= 21) && (botNum <= 30)) {
      this.setState({
        botChoice: "Scissors"
      })
    }

    /*for (var r = 0; r<=10; r++){
      rockRange.push(r)
    }

    for (var p = 0; p<=10; p++){
      paperRange.push(r)
    }

    for (var s = 0; s<=10; s++){
      scissorsRange.push(s)
    }*/
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.gameContainer}>
          <View style={styles.human}>
            <Text style={{ color: "#fff" }}>Human</Text>
            <Text style={{ color: "#fff" }}>
              Score: {this.state.scoreValue}
            </Text>

            <View style={styles.gameView}>
              <View style={styles.winBackground}>
                <Text style={{ color: "#000" }}>Choice: {this.state.userChoice}</Text>
              </View>

              <View style={styles.choicesContainer}>
                <TouchableOpacity onPress = {() => this.setState ({
                    userChoice: "Rock"
                  })}><Text
                  style={{
                    color: "#fff",
                    padding: 10,
                    borderWidth: 1,
                    borderRadius:20,
                    borderColor: "#fff",
                    marginHorizontal:20
                  }}
                >
                  Rock
                </Text></TouchableOpacity>
                <TouchableOpacity onPress = {() => this.setState ({
                    userChoice: "Paper"
                  })}><Text
                  style={{
                    color: "#fff",
                    padding: 10,
                    borderWidth: 1,
                    borderRadius:20,
                    marginHorizontal:20,
                    borderColor: "#fff",
                  }}
                >
                  Paper
                </Text></TouchableOpacity>
                <TouchableOpacity onPress = {() => this.setState ({
                    userChoice: "Scissors"
                  })}><Text
                  style={{
                    color: "#fff",
                    padding: 10,
                    borderWidth: 1,
                    borderRadius:20,
                    marginHorizontal:20,
                    borderColor: "#fff",
                  }}
                >
                  Scissors
                </Text></TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.bot}>
            <Text style={{ color: "#fff" }}>Bot</Text>
            <Text style={{ color: "#fff" }}>
              Score: {this.state.scoreValue}
            </Text>

            <View style={styles.gameView}>
              <View style={styles.winBackground}>
              <Text style={{ color: "#000" }}>Choice: {this.state.botChoice}</Text>
              </View>

              <View style={styles.choicesContainer}>
              <Text
                  style={{
                    color: "#fff",
                    padding: 10,
                    borderWidth: 1,
                    borderRadius:20,
                    marginHorizontal:20,
                    //borderColor: "#fff",
                  }}
                >     </Text>
               <TouchableOpacity onPress = {this.getUserInput}><Text
                  style={{
                    color: "#fff",
                    padding: 10,
                    borderWidth: 1,
                    borderRadius:20,
                    marginHorizontal:20,
                   borderColor: "#fff",
                  }}
                >Play</Text></TouchableOpacity>
                <TouchableOpacity
                  onPress = {() => this.setState ({
                    botChoice: "",
                    userChoice: ""
                  })}
                ><Text
                  style={{
                    color: "#fff",
                    padding: 10,
                    borderWidth: 1,
                    borderRadius:20,
                    marginHorizontal:20,
                    borderColor: "#fff",
                  }}
                >Reset</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <Text style={{ color: "#fff" }}>Made by Godson Umoren</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row"
    width: "100%",
    height: "100%",
  },

  gameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    ...Platform.select({
      ios: {
        flexDirection: "column",
      },
      web: {
        flexDirection: "row",
      },
      default: {
        flexDirection: "column",
      },
    }),
  },
  human: {
    margin: 10,
    borderWidth: 10,
    borderColor: "#fff",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    //justifyContent:"flex-start"
  },
  bot: {
    margin: 10,
    borderColor: "#fff",
    borderWidth: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    //justifyContent:"flex-end"
  },
  gameView: {
    padding: 20,
  },
  winBackground: {
    padding: 20,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  choicesContainer: {
   paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    //alignItems:"center",
    margin: 10,
  },
});
