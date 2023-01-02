import { useState } from "react";
import { FlatList } from "react-native";
import GroupCard from "@components/GroupCard";
import Header from "@components/Header";
import HighLight from "@components/Highlight";
import { Container } from "./styles";
import ListEmpty from "@components/ListEmpty";

export default function Groups() {
    const [groups, setGroups] = useState<string[]>([]);

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
                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Que tal cadastrar um grupo ?"
                    />
                )}
            />
        </Container>
    );
}
