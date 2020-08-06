import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" id="week-day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem name="Leandro Alves" subject="Java" value="R$ 50,00" image="https://avatars0.githubusercontent.com/u/20647305?s=460&u=6429db061f93065a1bff075d5006b9c84f76e808&v=4">
                    Entusiasta das mais novas tecnologias.
                    <br /><br />
                    Trabalhando com desenvolvimento desde 2004. Atualmente trabalhando com Java EE e React Mobile.
                </TeacherItem>
                <TeacherItem name="Leandro Alves" subject="Java" value="R$ 50,00" image="https://avatars0.githubusercontent.com/u/20647305?s=460&u=6429db061f93065a1bff075d5006b9c84f76e808&v=4">
                    Entusiasta das mais novas tecnologias.
                    <br /><br />
                    Trabalhando com desenvolvimento desde 2004. Atualmente trabalhando com Java EE e React Mobile.
                </TeacherItem>
                <TeacherItem name="Leandro Alves" subject="Java" value="R$ 50,00" image="https://avatars0.githubusercontent.com/u/20647305?s=460&u=6429db061f93065a1bff075d5006b9c84f76e808&v=4">
                    Entusiasta das mais novas tecnologias.
                    <br /><br />
                    Trabalhando com desenvolvimento desde 2004. Atualmente trabalhando com Java EE e React Mobile.
                </TeacherItem>
                <TeacherItem name="Leandro Alves" subject="Java" value="R$ 50,00" image="https://avatars0.githubusercontent.com/u/20647305?s=460&u=6429db061f93065a1bff075d5006b9c84f76e808&v=4">
                    Entusiasta das mais novas tecnologias.
                    <br /><br />
                    Trabalhando com desenvolvimento desde 2004. Atualmente trabalhando com Java EE e React Mobile.
                </TeacherItem>
            </main>
        </div>
    )
}

export default TeacherList;