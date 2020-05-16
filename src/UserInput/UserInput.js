import React from 'react';


const UserInput = (props) => {
    const styles = {
        border: "3px solid green",
    }
    return(
        <div>
            <input style={styles} type="text" value={props.username} onChange={props.changeUsername}/>
        </div>
    );
}

export default UserInput;