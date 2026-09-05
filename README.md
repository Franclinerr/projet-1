# Morpion Mobile - React Native + Expo

Projet académique L2 Génie Logiciel. Jeu de morpion 3x3 full mobile.

## 📱 Stack Technique
- **React Native / Expo** : Pour le mobile
- **React Hooks** : `useState` pour l'état du jeu, `useEffect` pour détecter la fin
- **JSX & StyleSheet** : Interface 100% React Native (pas de HTML)

## 🧠 Logique du jeu (ce que ton prof veut entendre)
1. **Etat:** `const [board, setBoard] = useState(Array(9).fill(null))`
2. **Tour par tour:** `const [xIsNext, setXIsNext] = useState(true)` -> on alterne X et O
3. **Coup:** Quand on clique sur une case, on copie la grille `[...board]` on met X ou O, puis `setBoard`
4. **Victoire:** On a un tableau des 8 combinaisons gagnantes `[[0,1,2], [3,4,5]...]` et on boucle pour voir si `board[a] === board[b] === board[c]`
5. **Fin de partie:** Si victoire ou si `board` est plein sans victoire = Match nul

## ✨ Features
- Blocage des cases déjà jouées
- Détection instantanée du gagnant
- Bouton "Recommencer" qui reset tout avec `setBoard(Array(9).fill(null))`
- Design responsive avec Flexbox

## ▶️ Lancer le projet
```bash
git clone https://github.com/Franclinerr/projet-1.git
cd projet-1
npm install
npx expo start