import React from 'react';
import './Compose.css';

export default function Compose(props) {
    return (
        <div className="compose">
            <form  onSubmit={ (e) => props.onSubmit(e)}>
                <input
                    type="text"
                    className="compose-input"
                    placeholder="Type a message, @name"
                    onSubmit={ (e) => props.onSubmit(e)}
                />
            </form>

            {
                props.rightItems
            }
        </div>
    );
}