import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { getDataFromApi } from "../api/fetchData";

import { View } from "../components/Themed";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export default function TabTwoScreen() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const result = await getDataFromApi();
    setData(result);
  }

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Another way to write a function - this is Arrow Function
  const getDisksList = (value: number) => {
    var result = [];
    for (let i = 0; i < value; i++) {
      result.push(i + 1);
    }

    return result;
  };

  return (
    <View style={styles.container}>
      {data ? (
        data.map((item: any, idx: number) => {
          const disks = getDisksList(item.disks);
          return (
            <View
              key={idx}
              style={{
                flex: 1,
                width: deviceWidth,
                backgroundColor: getRandomColor(),
                display: "flex",
                flexDirection: "row",
              }}
            >
              {disks.map((index) => (
                <View
                  key={index}
                  style={{
                    flex: 1,
                    height: 100,
                    backgroundColor: getRandomColor(),
                  }}
                ></View>
              ))}
            </View>
          );
        })
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
