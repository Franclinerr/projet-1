import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [cases, setCases] = useState(Array(9).fill(null));
  const [xJoue, setXJoue] = useState(true);
  const [pressed, setPressed] = useState(null);
  const [sounds, setSounds] = useState({});

  useEffect(() => {
    (async () => {
      const click = new Audio.Sound();
      const win = new Audio.Sound();
      // Sons gratuits en ligne
      await click.loadAsync({ uri: 'https://cdn.freesound.org/previews/270/270404_5123851-lq.mp3' });
      await win.loadAsync({ uri: 'https://cdn.freesound.org/previews/270/270402_5123851-lq.mp3' });
      setSounds({ click, win });
    })();
  }, []);

  const gagnant = calculerGagnant(cases);
  const statut = gagnant? `Gagnant: ${gagnant}` : cases.every(Boolean)? "Match nul!" : `Tour du joueur: ${xJoue? 'X' : 'O'}`;

  const jouer = async (i) => {
    if (cases[i] || gagnant) return;
    try { await sounds.click?.replayAsync(); } catch {}
    const copie = [...cases];
    copie[i] = xJoue? 'X' : 'O';
    setCases(copie);
    const win = calculerGagnant(copie);
    if (win) {
      setTimeout(async () => { try { await sounds.win?.replayAsync(); } catch {} }, 200);
    }
    setXJoue(!xJoue);
  };

  const reset = () => {
    setCases(Array(9).fill(null));
    setXJoue(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Morpion</Text>
      <Text style={styles.tour}>{statut}</Text>
      <View style={styles.plateau}>
        {cases.map((val, i) => (
          <View key={i} style={styles.glowWrapper}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPressIn={() => setPressed(i)}
              onPressOut={() => setPressed(null)}
              onPress={() => jouer(i)}
              style={[styles.case, pressed === i && styles.casePressed, val && styles.caseRemplie]}
            >
              <Text style={[styles.symbole, val === 'X'? styles.x : styles.o]}>{val}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.bouton} onPress={reset}><Text style={styles.boutonTexte}>Recommencer</Text></TouchableOpacity>
    </View>
  );
}

function calculerGagnant(c) {
  const lignes = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for (let [a,b,d] of lignes) if (c[a] && c[a] === c[b] && c[a] === c[d]) return c[a];
  return null;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#050510', alignItems: 'center', justifyContent: 'center', padding: 20 },
  titre: { fontSize: 42, fontWeight: '900', color: '#6ea8ff', textShadowColor: '#3b82f6', textShadowOffset: {width:0, height:0}, textShadowRadius: 20, marginBottom: 10 },
  tour: { fontSize: 22, color: '#4f8cff', fontWeight: '700', marginBottom: 40, textShadowColor: '#4f8cff', textShadowRadius: 10 },
  plateau: { width: 330, height: 330, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignContent: 'space-between' },
  glowWrapper: { width: 102, height: 102, borderRadius: 22, shadowColor: '#ffffff', shadowOpacity: 0.9, shadowRadius: 18, shadowOffset: {width:0, height:0}, elevation: 20 },
  case: { width: 102, height: 102, backgroundColor: '#0d0d24', borderRadius: 22, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#1a1a3a' },
  casePressed: { backgroundColor: '#02020a', transform: [{ scale: 0.93 }], borderColor: '#000' },
  caseRemplie: { backgroundColor: '#070712' },
  symbole: { fontSize: 48, fontWeight: '900' },
  x: { color: '#38bdf8', textShadowColor: '#38bdf8', textShadowRadius: 15 },
  o: { color: '#fb7185', textShadowColor: '#fb7185', textShadowRadius: 15 },
  bouton: { marginTop: 50, backgroundColor: '#ffffff', paddingHorizontal: 30, paddingVertical: 12, borderRadius: 30 },
  boutonTexte: { fontWeight: '800', fontSize: 15, color: '#050510' },
});