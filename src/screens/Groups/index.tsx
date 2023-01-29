import { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import GroupCard from "@components/GroupCard";
import Header from "@components/Header";
import HighLight from "@components/Highlight";
import { Container } from "./styles";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import { groupsGetAll } from "@storage/group/groupsGetAll";

export default function Groups() {
    const [groups, setGroups] = useState<string[]>([]);
    const navigation = useNavigation();

    function handleNewGroups() {
        navigation.navigate("new");
    }

    async function fetchGroups() {
        try {
            setGroups(await groupsGetAll());
        } catch (error) {
            console.log(error);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchGroups();
    }, []));

    return (
        <Container>
            <Header />

            <HighLight title="Turmas" subtitle="Jogue com sua turma " />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item}
                    />
                )}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Que tal cadastrar um grupo ?"
                    />
                )}
            />

            <Button title="Criar nova turma" onPress={handleNewGroups} />
        </Container>
    );
}
