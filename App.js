import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity } from "react-native";

export default class App extends React.Component {
  state = {
    scoreValue: 1,
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

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.gameContainer}>
          <View style={styles.human}>
            <Text style={{ color: "#fff" }}>Name</Text>
            <Text style={{ color: "#fff" }}>
              Score: {this.state.scoreValue}
            </Text>

            <View style={styles.gameView}>
              <View style={styles.winBackground}>
                <Text style={{ color: "#000" }}>Choice</Text>
              </View>

              <View style={styles.choicesContainer}>
                <TouchableOpacity><Text
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
                <TouchableOpacity><Text
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
                <TouchableOpacity><Text
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
            <Text style={{ color: "#fff" }}>Name</Text>
            <Text style={{ color: "#fff" }}>
              Score: {this.state.scoreValue}
            </Text>

            <View style={styles.gameView}>
              <View style={styles.winBackground}>
                <Text style={{ color: "#000" }}>Choice</Text>
              </View>

              <View style={styles.choicesContainer}>
              <TouchableOpacity><Text
                  style={{
                    color: "#fff",
                    padding: 10,
                    borderWidth: 1,
                    borderRadius:20,
                    marginHorizontal:20,
                    borderColor: "#fff",
                  }}
                >
                  Rock
                </Text></TouchableOpacity>
                <TouchableOpacity><Text
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
                <TouchableOpacity><Text
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
