import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Alert
} from "react-native";

export default class App extends React.Component {
  state = {
    scoreValue: 1,
    userChoice: "",
    botChoice: "",
    Winner: "",
    botScore: 0,
    userScore: 0,
    modalVisible: false
  };



  botDecisionFunction = () => {
    var botNum = Math.floor(Math.random() * 30) + 1;

    //Display Bot's Choice


    //see if you can use min-max range later

    if (botNum >= 0 && botNum <= 10) {
      this.setState({
        botChoice: "Rock",
      });
    } else if (botNum >= 11 && botNum <= 20) {
      this.setState({
        botChoice: "Paper",
      });
    } else if (botNum >= 21 && botNum <= 30) {
      this.setState({
        botChoice: "Scissors",
      });
    }

    //Bot Logic

    //Logic for when user selects rock


    //should use switch statements
    if (this.state.userChoice === "Rock" && (botNum >= 0 && botNum <= 10)) {
      this.setState({
        Winner: "Tie",
        //botScore: this.state.botScore + 1,
        //userScore: this.state.userScore + 1,
      });
    } else if (
      this.state.userChoice === "Rock" &&
      (botNum >= 11 &&
      botNum <= 20)
    ) {
      this.setState({
        Winner: "Bot",
        botScore: this.state.botScore + 1,
        //userScore: this.state.userScore + 1,
      });
    } else if (
      this.state.userChoice === "Rock" &&
    (botNum >= 21 &&
      botNum <= 30)
    ) {
      this.setState({
        Winner: "Human",
        //botScore: this.state.botScore + 1,
        userScore: this.state.userScore + 1,
      });
    }

    //Logic for when user selects paper
    if (this.state.userChoice === "Paper" && (botNum >= 0 && botNum <= 10)) {
      this.setState({
        Winner: "Human",
        //botScore: this.state.botScore + 1,
        userScore: this.state.userScore + 1,
      });
    } else if (
      this.state.userChoice === "Paper" &&
      (botNum >= 11 &&
      botNum <= 20)
    ) {
      this.setState({
        Winner: "Tie",
        //botScore: this.state.botScore + 1,
       // userScore: this.state.userScore + 1,
      });
    } else if (
      this.state.userChoice === "Paper" &&
      (botNum >= 21 &&
      botNum <= 30)
    ) {
      this.setState({
        Winner: "Bot",
        botScore: this.state.botScore + 1,
        //userScore: this.state.userScore + 1,
      });
    }

    //Logic for when user selects scissors
    if (this.state.userChoice === "Scissors" && (botNum >= 0 && botNum <= 10)) {
      this.setState({
        Winner: "Bot",
        botScore: this.state.botScore + 1,
        //userScore: this.state.userScore + 1,
      });
    } else if (
      this.state.userChoice === "Scissors" &&
     ( botNum >= 11 &&
      botNum <= 20)
    ) {
      this.setState({
        Winner: "Human",
        //botScore: this.state.botScore + 1,
        userScore: this.state.userScore + 1,
      });
    } else if (
      this.state.userChoice === "Scissors" &&
      (botNum >= 21 &&
      botNum <= 30)
    ) {
      this.setState({
        Winner: "Tie",
       // botScore: this.state.botScore + 1,
        //userScore: this.state.userScore + 1,
      });
    }
  };



  render() {
    if (this.state.userScore === 5) {
      Alert.alert(
        "You Won!!!",
        "You beat the Bot",
        [
          {
            text: "Reset",
            onPress: () => this.setState({
              userScore: this.state.userScore = 0,
              botScore: this.state.botScore = 0,
            }, function() {}
            ),
            style: "destructive"
          }
        ],
        { cancelable: false }
      )
    } else if (this.state.botScore === 5) {
      Alert.alert(
        "You Lost!!!",
        "The Bot beat You",
        [
          {
            text: "Reset",
            onPress: () => this.setState({
              userScore: this.state.userScore = 0,
              botScore: this.state.botScore = 0,
            }, function() {}
            ),
            style: "destructive"
          }
        ],
        { cancelable: false }
      )
    }
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <Text style={{ color: "#fff", fontWeight: "900", fontSize: 30 }}>
          Winner: {this.state.Winner}
        </Text>
        <View style={styles.gameContainer}>
          <View style={styles.human}>
            <Text style={{ color: "#fff", fontWeight: "900", fontSize: 30 }}>Human</Text>
            <Text style={{ color: "#fff", fontWeight: "900", fontSize: 25 }}>
              Score: {this.state.userScore}
            </Text>

            <View style={styles.gameView}>
              <View style={styles.winBackground}>
                <Text style={{ color: "#000", fontWeight: "900", fontSize: 20 }}>
                  Choice: {this.state.userChoice}
                </Text>
              </View>

              <View style={styles.choicesContainer}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      userChoice: "Rock",
                    })
                  }
                >
                  <Text
                    style={{
                      color: "#fff",
                      padding: 10,
                      borderWidth: 1,
                      borderRadius: 20,
                      borderColor: "#fff",
                      marginHorizontal: 20,
                      fontWeight: "900", 
                      fontSize: 15
                    }}
                  >
                    Rock
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      userChoice: "Paper",
                    })
                  }
                >
                  <Text
                    style={{
                      color: "#fff",
                      padding: 10,
                      borderWidth: 1,
                      borderRadius: 20,
                      marginHorizontal: 20,
                      borderColor: "#fff",
                      fontWeight: "900", 
                      fontSize: 15
                    }}
                  >
                    Paper
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      userChoice: "Scissors",
                    })
                  }
                >
                  <Text
                    style={{
                      color: "#fff",
                      padding: 10,
                      borderWidth: 1,
                      borderRadius: 20,
                      marginHorizontal: 20,
                      borderColor: "#fff",
                      fontWeight: "900", 
                      fontSize: 15
                    }}
                  >
                    Scissors
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.bot}>
            <Text style={{ color: "#fff", fontWeight: "900", fontSize: 30 }}>Bot</Text>
            <Text style={{ color: "#fff", fontWeight: "900", fontSize: 25 }}>
              Score: {this.state.botScore}
            </Text>

            <View style={styles.gameView}>
              <View style={styles.winBackground}>
                <Text style={{ color: "#000", fontWeight: "900", fontSize: 20 }}>
                  Choice: {this.state.botChoice}
                </Text>
              </View>

              <View style={styles.choicesContainer}>
                <Text
                  style={{
                    color: "#fff",
                    padding: 10,
                    borderWidth: 1,
                    borderRadius: 20,
                    marginHorizontal: 20,
                    borderColor: "#fff",
                    fontWeight: "900", 
                    fontSize: 15
                  }}
                >
                  Rate
                </Text>
                <TouchableOpacity onPress={this.botDecisionFunction}>
                  <Text
                    style={{
                      color: "#fff",
                      padding: 10,
                      borderWidth: 1,
                      borderRadius: 20,
                      marginHorizontal: 20,
                      borderColor: "#fff",
                      fontWeight: "900", 
                      fontSize: 15
                    }}
                  >
                    Play
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      botChoice: "",
                      userChoice: "",
                      Winner: "",
                    })
                  }
                >
                  <Text
                    style={{
                      color: "#fff",
                      padding: 10,
                      borderWidth: 1,
                      borderRadius: 20,
                      marginHorizontal: 20,
                      borderColor: "#fff",
                      fontWeight: "900", 
                      fontSize: 15
                    }}
                  >
                    Reset
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <Text style={{ color: "#fff", position: "absolute", bottom: 0, marginVertical:30, fontWeight:"900" }}>
          Made by Godson Umoren
        </Text>
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
    //flex: 1,
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
  modalView: {
    margin: 20,
    backgroundColor:"#fff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color:"#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color:"#fff"
  },
  centeredView: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    //backgroundColor:"#fff"
  },

});
