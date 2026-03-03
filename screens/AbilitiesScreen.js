import { FlatList, Text, View, TouchableOpacity, Modal, Button, ActivityIndicator, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react';
import { getPokemonAbility, getPokemonAbilityDetails } from '../API/calls'
import capitalize from '../utils/capitalize';

const AbilitiesScreen = () => {

    const [ability, setAbility] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedAbility, setSelectedAbility] = useState(null);
    const [abilityDetails, setAbilityDetails] = useState(null);
    const [loadingDetails, setLoadingDetails] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await getPokemonAbility();
                setAbility(result);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading Pokemon Ability...</Text>
            </View>

        );
    }

    const handleAbilityPress = async (ability) => {
        setSelectedAbility(ability);
        setShowModal(true);
        setLoadingDetails(true);
        setAbilityDetails(null);

        try {
            const details = await getPokemonAbilityDetails(ability.url);
            // console.log('Ability details:', details);
            setAbilityDetails(details);
        } catch (error) {
            console.error('Error loading ability details:', error);
        } finally {
            setLoadingDetails(false);
        }
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => handleAbilityPress(item)}
            >
                <Text style={styles.abilityName}>{capitalize(item.name)}</Text>
            </TouchableOpacity>
        );
    };



    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={ability}
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
                            {selectedAbility?.name}
                        </Text>

                        {loadingDetails ? (
                            <ActivityIndicator size="small" color="#0000ff" />
                        ) : abilityDetails ? (
                            <>



                                <Text style={styles.modalDescription}>
                                    <Text style={styles.label}>Description: </Text>
                                    {capitalize(abilityDetails.effect_entries?.find(
                                        entry => entry.language.name === 'en'
                                    )?.effect || 'No description available')}
                                </Text>

                                <Text style={styles.modalText}>
                                    <Text style={styles.label}>Generation: </Text>
                                    {capitalize(abilityDetails.generation?.name)}
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


    )
}

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
    },
    abilityName: {
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
        fontWeight: 'bold'
    },
    modalDescription: {
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10,
        fontStyle: 'italic',
        color: '#555'
    }
});


export default AbilitiesScreen