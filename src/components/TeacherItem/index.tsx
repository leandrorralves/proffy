import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
    name: string;
    subject: string;
    image: string;
    value: string;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
    return (
        <article className="teacher-item">
            <header>
                <img src={props.image} alt="Leandro Alves" />
                <div>
                    <strong>{props.name}</strong>
                    <span>{props.subject}</span>
                </div>
            </header>

            <p>{props.children}</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>{props.value}</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;