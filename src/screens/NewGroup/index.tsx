import Button from "@components/Button";
import Header from "@components/Header";
import HighLight from "@components/Highlight";
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

            </Content>

            <Button
                title="Criar"
            />
        </Container>
    );
}

export default NewGroup;