import React from 'react';
import { connect } from 'react-redux';
import { eat, play, nap, blep, guster } from '../redux/actions';

const Activity = ({activity, name, eat, play, nap, blep, guster}) => (
    <>
    <h1>What is the cat doing?</h1>
    <p>The {name} is...{activity}</p>
    <button onClick={() => eat()}>Eating</button>
    <button onClick={() => play()}>Playing</button>
    <button onClick={() => nap()}>Napping</button>
    <button onClick={() => blep()}>Blepping</button>
    <button onClick={() => guster()}>Guster</button>
    </>
)

const mapStateToProps = state => {
    const {activity} = state;
    return activity;
}

export default connect(
    mapStateToProps, //what do i want
    {eat, play, nap, blep, guster} //what do i want to do
    )(Activity);