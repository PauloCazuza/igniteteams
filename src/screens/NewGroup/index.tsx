import { useState } from "react";
import { Container, Content, Icon } from "./styles";

import Button from "@components/Button";
import Header from "@components/Header";
import HighLight from "@components/Highlight";
import Input from "@components/Inputs";
import { useNavigation } from "@react-navigation/native";

function NewGroup() {
    const [group, setGroup] = useState<string>("");
    const navigation = useNavigation();

    function handleNew() {
        navigation.navigate("players", { group });
    }

    return (
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />

                <HighLight
                    title="Nova turma"
                    subtitle="cria a turma para adicionar as pessoas"
                />

                <Input
                    placeholder="Nome da turma"
                    onChangeText={setGroup}
                />

                <Button
                    title="Criar"
                    style={{ marginTop: 20 }}
                    onPress={handleNew}
                />

            </Content>

        </Container>
    );
}

export default NewGroup;