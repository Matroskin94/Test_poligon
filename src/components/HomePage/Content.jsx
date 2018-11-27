import React from 'react';

const Content = props => (
    <div>
        <h2>Очень полезная штука</h2>
        <p>Про которую я пока не могу толком ничего рассказать</p>
        <button onClick={props.onButtonClick} >Уже хочу!!!</button>
    </div>
);

export default Content;
