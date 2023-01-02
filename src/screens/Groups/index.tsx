import Header from "@components/Header";
import HighLight from "@components/Highlight";
import { Container } from "./styles";

export default function Groups() {
    return (
        <Container>
            <Header />

            <HighLight title="Turmas" subtitle="Jogue com sua turma" />
        </Container>
    );
}
