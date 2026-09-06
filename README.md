# 🎮 Morpion Mobile - React Native + Expo

> A clean, performant, and fully responsive Tic-Tac-Toe game built for mobile.
> Academic Project - Software Engineering | yaounde, Cameroon.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### 📱 Live Preview
<p align="center">
 <img src="./IMG 6003.png" alt="Game IMG 6003" width="300"/>
 <br/>
 <em>Add your IMG 6003 here - just drag your phone screenshot into the repo</em>
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

*2. Handling a Move (Immutability):*
When a cell is pressed, we NEVER modify the state directly. We create a copy:

const newBoard = [...board];
newBoard[index] = xIsNext? 'X': 'O';
setBoard(newBoard);
setXIsNext(!xIsNext);

*3. Winner Detection Algorithm:*
We have the 8 possible winning combinations. On every move, we loop through them:

const winningCombos = [
 [0,1,2], [3,4,5], [6,7,8], // rows
 [0,3,6], [1,4,7], [2,5,8], // columns
 [0,4,8], [2,4,6] // diagonals
];

for (let [a, b, c] of winningCombos) {
 if (board[a] && board[a] === board[b] && board[a] === board[c]) {
 return board[a]; // We have a winner
 }
}

*4. Game Over Logic:*
- If `calculateWinner(board)` returns 'X' or 'O' -> Winner
- If `board` has no `null` left and no winner -> Draw
- Otherwise -> Game continues

✨ Features
- Prevents overwriting an already played cell
- Instant winner / draw detection
- Turn indicator (X's Turn / O's Turn)
- One-click Reset - `setBoard(Array(9).fill(null))`
- 100% Responsive Design for all phone sizes
- [ ] Next: Score history
- [ ] Next: Play vs AI (Minimax Algorithm)[x]

📂 Project Structure

/morpion-game
├── App.js # Main game component & logic
├── components/
│ └── Square.js # Reusable cell component
├── assets/
└── package.json

▶️ How to Run the Project

1. Clone the repo

git clone https://github.com/Franclinerr/Morpion-game.git
cd Morpion-game

2. Install dependencies

npm install

3. Start Expo

npx expo start

Scan the QR Code with your Expo Go app (Android/iOS).

👨‍💻 Author
*Franclinerr* - Software Engineering Student & Mobile Developer.
Passionate about building clean mobile UIs with React Native.

---
Built with ❤️ in yaounde, CM
