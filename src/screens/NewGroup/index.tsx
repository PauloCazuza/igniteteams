import Button from "@components/Button";
import Header from "@components/Header";
import HighLight from "@components/Highlight";
import Input from "@components/inputs";
import { Container, Content, Icon } from "./styles";

function NewGroup() {
    return (
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />

                <HighLight
                    title="Nova turma"
                    subtitle="cria a turma para adicionar as pessoas"
                />

                <Input />

                <Button
                    title="Criar"
                    style={{ marginTop: 20 }}
                />

            </Content>

        </Container>
    );
}

export default NewGroup;