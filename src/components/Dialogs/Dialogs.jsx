import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "dialogs/" + props.id;
    return (
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Sveta'},
        {id: 2, name: 'Viktor'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Valera'},
        {id: 5, name: "Lena"},
        {id: 6, name: "Gena"},
    ]

        let dialogsElements = dialogsData
            .map( (dialog) => <DialogItem name={dialog.name} id={dialog.id}/> );


    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Respect'},
        {id: 5, message: "Cool"},
        {id: 6, message: "Good morning"},
    ]

    let messagesElements = messagesData
        .map((messages) => <Message message={messages.message}></Message>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}



export default Dialogs