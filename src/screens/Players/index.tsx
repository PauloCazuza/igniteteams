import ButtonIcon from "@components/ButtonIcon";
import Header from "@components/Header";
import HighLight from "@components/Highlight";
import { Container } from "./styles";

function Players() {
    return (
        <Container>
            <Header showBackButton />

            <HighLight
                title="Nome da turma"
                subtitle="adicione a galera e separe os times"
            />

            <ButtonIcon />
        </Container>
    );
}

export default Players;