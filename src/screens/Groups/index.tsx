import { useState } from "react";
import { FlatList } from "react-native";
import GroupCard from "@components/GroupCard";
import Header from "@components/Header";
import HighLight from "@components/Highlight";
import { Container } from "./styles";

export default function Groups() {
    const [groups, setGroups] = useState<string[]>(["Galera da Rocket", "Amigos"]);

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
            />
        </Container>
    );
}
