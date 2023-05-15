import React from "react";
import { Platform, StatusBar, Text } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export function GamesScreen() {
  const SafeArea = styled.SafeAreaView`
    flex: 1;
    ${isAndroid && `margin-top: ${StatusBar.currentHeight}px`};
  `;

  return (
    <SafeArea>
      <Text>Games Screen</Text>
    </SafeArea>
  );
}
