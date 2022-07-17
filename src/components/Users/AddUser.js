import React, {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUsername , setEnteredUsername] = useState('');
    const [enteredAge      , setEnteredAge     ] = useState('');

    const AddUserHandler = (event) =>{
        event.preventDefault();
        console.log(enteredUsername,enteredAge);
    }

    const userNameHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageNameHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return(
        <Card className={classes.input}>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" onChange={userNameHandler} type="text"/>

                <label htmlFor="age">Age (Years)</label>
                <input id="age" onChange={ageNameHandler} type="number"/>
                
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
