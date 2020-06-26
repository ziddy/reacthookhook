import { useState } from "react";


export const useTabs = (initialTab, allTabs) => {
    try {
      const [currentIndex, setCurrentIndex] = useState(initialTab);
      return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
      };
    } catch (err) { //try,catch란? 자바 예외처리 해주는 문법
      throw Error();
    }
  };