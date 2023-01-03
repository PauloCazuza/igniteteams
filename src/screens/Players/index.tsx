import ButtonIcon from "@components/ButtonIcon";
import Header from "@components/Header";
import HighLight from "@components/Highlight";
import Input from "@components/Inputs";
import { Container, Form } from "./styles";

function Players() {
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


        </Container>
    );
}

export default Players;