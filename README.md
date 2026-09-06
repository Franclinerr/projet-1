# 🎮 Morpion Mobile - React Native + Expo

> A clean, performant, and fully responsive Tic-Tac-Toe game built for mobile.
> Academic Project - L2 Software Engineering | yaounde , Cameroon.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### 📱 Live Preview
<p align="center">
  <img src="./IMG_6003.png" alt="Game IMG_6003 " width="300"/>
  <br/>
  <em>Add your  IMG_6003 here - just drag your phone screenshot into the repo</em>
</p>

### 🚀 About The Project
This is not just a game. It's a demonstration of core React Native concepts: state management, component reusability, and declarative UI logic.
The goal was to build a 3x3 Tic-Tac-Toe without any HTML, 100% native mobile components.

### 📱 Tech Stack & Why

| Technology | Usage |
| --- | --- |
| **React Native / Expo** | Cross-platform mobile framework. One codebase for Android & iOS. |
| **React Hooks** | `useState` to manage board state, player turn, and winner. `useEffect` to watch for game-end. |
| **JSX & StyleSheet API** | Native styling, no CSS/HTML. Using Flexbox for perfect responsiveness. |
| **Expo Go** | For instant testing on a real device without building an APK. |

### 🧠 Core Game Logic Explained

This is the part your teacher will ask about:

**1. The State:**
```javascript
const [board, setBoard] = useState(Array(9).fill(null)); // 9 empty cells
const [xIsNext, setXIsNext] = useState(true); // X starts