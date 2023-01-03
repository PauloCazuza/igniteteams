import { useState } from "react";
import { FlatList } from "react-native";

import ButtonIcon from "@components/ButtonIcon";
import Filter from "@components/Filter";
import Header from "@components/Header";
import HighLight from "@components/Highlight";
import Input from "@components/Inputs";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import PlayerCard from "@components/PlayerCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";

function Players() {
    const [team, setTeam] = useState("Time A");
    const [players, setPlayers] = useState(["Player 1", "Player 2"]);

    return (
        <Container>
            <Header showBackButton />

            <HighLight
                title="Nome da turma"
                subtitle="adicione a galera e separe os times"
            />

            <Form>
                <Input
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                />

                <ButtonIcon
                    icon="add"
                />
            </Form>

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => {
                        return (
                            <Filter
                                title={item}
                                isActive={item === team}
                                onPress={() => setTeam(item)}
                            />
                        )
                    }}
                    horizontal
                />

                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => {
                    return (
                        <PlayerCard
                            name={item}
                            onRemove={() => { }}
                        />
                    )
                }}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Não há pessoas nesse time"
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    players.length === 0 && { flex: 1 }
                ]}
            />

            <Button
                title="Remover turma"
                type="SECONDARY"
            />
        </Container>
    );
}

export default Players;