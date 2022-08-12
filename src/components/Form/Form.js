import './Form.css';
import TextField from '../TextField';
import Dropdown from '../Dropdown';
import Button from '../Button';

export const Form = () => {
    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UI/UX',
        'Mobile',
        'Inovação e Gestão'
    ];

    return (
        <section className="form">
            <form onSubmit={_onSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField label="Nome" placeholder="Digite o seu nome" required={true} />
                <TextField label="Cargo" placeholder="Digite o seu cargo" required={true} />
                <TextField label="Imagem" placeholder="Informe o endereço da imagem" required={true} />
                <Dropdown label="Time" itens={teams} required={true} />
                <Button>Criar Card</Button>
            </form>
        </section>
    );
}

const _onSubmit = (event) => {
    event.preventDefault();
}