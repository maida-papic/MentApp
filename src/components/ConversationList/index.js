import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Axios from 'axios';

import './ConversationList.css';

export default function ConversationList(props) {
    const [conversations, setConversations] = useState([]);
    useEffect(() => {
        getConversations()
    },[])

    const getConversations = () => {

            let newConversations = [
                {
                    photo:'',
                    name: 'Maida',
                    text: 'Hello world! This is a long message that needs to be truncated.'
                },
                {
                    photo:'',
                    name: 'Maida',
                    text: 'Hello world! This is a long message that needs to be truncated.'
                },

        ];
            setConversations([...conversations, ...newConversations])

    }

    return (
        <div className="conversation-list">
            <Toolbar
                title="Messenger"
                leftItems={[
                    <ToolbarButton key="cog" icon="ion-ios-cog" />
                ]}
                rightItems={[
                    <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
                ]}
            />
            <ConversationSearch />
            {
                conversations.map(conversation =>
                    <ConversationListItem
                        key={conversation.name}
                        data={conversation}
                    />
                )
            }
        </div>
    );
}