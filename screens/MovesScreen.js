import { FlatList, Text, View, TouchableOpacity, Modal, Button, ActivityIndicator, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react';
import { getPokemonMoves, getPokemonMoveDetails } from '../API/calls';
import capitalize from '../utils/capitalize';
// import typeColors from '../shared/typeColors';




const MovesScreen = () => {

  const [moves, setMoves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedMove, setSelectedMove] = useState(null);
  const [moveDetails, setMoveDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getPokemonMoves();
        setMoves(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

     const capitalize = (name) => {
        return name[0].toUpperCase() + name.slice(1)
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Pokemon Moves...</Text>
      </View>

    );
  }

  const handleMovePress = async (move) => {
    setSelectedMove(move);
    setShowModal(true);
    setLoadingDetails(true);
    setMoveDetails(null);

    try {
      const details = await getPokemonMoveDetails(move.url);
     // console.log('Move details:', details); 
      setMoveDetails(details);
    } catch (error) {
      console.error('Error loading move details:', error);
    } finally {
      setLoadingDetails(false);
    }
  };



  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleMovePress(item)}
      >
        <Text style={styles.moveName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={moves}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {selectedMove?.name}
            </Text>

            {loadingDetails ? (
              <ActivityIndicator size="small" color="#0000ff" />
            ) : moveDetails ? (
              <>
                <Text style={styles.modalText}>
                  <Text style={styles.label}>Type: </Text>
                  {capitalize(moveDetails.type?.name)}
                </Text>
                <Text style={styles.modalText}>
                  <Text style={styles.label}>Power: </Text>
                  {moveDetails.power || 'N/A'}
                </Text>
                <Text style={styles.modalText}>
                  <Text style={styles.label}>Accuracy: </Text>
                  {moveDetails.accuracy || 'N/A'}
                </Text>
                <Text style={styles.modalText}>
                  <Text style={styles.label}>PP: </Text>
                  {moveDetails.pp}
                </Text>
                <Text style={styles.modalText}>
                  <Text style={styles.label}>Damage Class: </Text>
                  {capitalize(moveDetails.damage_class?.name)}
                </Text>
                <Text style={styles.modalText}>
                  <Text style={styles.label}>Generation: </Text>
                  {capitalize(moveDetails.generation?.name)}
                </Text>
                    <Text style={styles.modalDescription}>
      <Text style={styles.label}>Description: </Text>
      {moveDetails.flavor_text_entries?.find(
        entry => entry.language.name === 'en'
      )?.flavor_text || 'No description available'}
    </Text>
              </>
            ) : null}

            <Button
              title="Close"
              onPress={() => setShowModal(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    padding: 10
  },
  item: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 5,
    borderRadius: 8
  },  abilityName: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'capitalize'
  },
  modalText: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center'
  },
  label: {
  modalDescription: {
  fontSize: 14,
  marginTop: 10,
  marginBottom: 10,
  fontStyle: 'italic',
  color: '#555'
},
   label: {
    fontWeight: 'bold'
  }
}
});


export default MovesScreen