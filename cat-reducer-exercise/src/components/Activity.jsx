import React from 'react';
import { connect } from 'react-redux';
import { setActivity } from '../redux/actions';

import NameInput from './NameInput';

const Activity = ({activity, name, setActivity}) => (
    <>
    <h1>What is the cat doing?</h1>
    <p>{name} is...{activity}</p>
    <button onClick={() => setActivity('eating')}>Eating</button>
    <button onClick={() => setActivity('playing')}>Playing</button>
    <button onClick={() => setActivity('napping')}>Napping</button>
    <button onClick={() => setActivity('blepping')}>Blepping</button>
    <NameInput/>
    </>
)

const mapStateToProps = state => {
    const {activity} = state;
    return activity;
}

export default connect(
    mapStateToProps, //what do i want
    { setActivity } //what do i want to do
    )(Activity);