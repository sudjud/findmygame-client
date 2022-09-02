import React from 'react';
import Header from '../Header';
import chat from './chat.module.sass'
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Chat = () => {
    const [chats, setChats] = useState([])

    const user = useSelector(state => state.auth.users)
    console.log(user)

    return (
        <div>
            <Header />
            <div className={chat.chat}>
                <div className={chat.left_side_chat}>
                    <div className={chat.chat_container}>
                        <h2>Chats</h2>
                        <div className={chat.chat_list}>
                            Conversations
                        </div>
                    </div>
                </div>
                <div className={chat.right_side_chat}>
                    Right side
                </div>
            </div>
        </div>
    );
};

export default Chat;