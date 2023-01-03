import { useState } from "react";
import { FlatList } from "react-native";

import ButtonIcon from "@components/ButtonIcon";
import Filter from "@components/Filter";
import Header from "@components/Header";
import HighLight from "@components/Highlight";
import Input from "@components/Inputs";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

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

        </Container>
    );
}

export default Players;