import {
    h,
    render,
    Component,
    toChildArray
} from 'preact';

import SubmissionForm from './submission_form';
import Header from './header';
import Footer from './footer';

export const App = (props={}) => (
    <div
    style={{
        width: '100vw',
        height:'100vh',
        }}
    >
        <Header/>
        <div style={{
            width: '100%',
            height:'75%',
            alignItems: 'center',
            alignContent: 'space-evenly',
            flexDirection: 'column',
            justifyContent: 'center',
            display: 'flex',
            overFlowY: 'scroll'
        }} >
        <h1>
            Voting info for people in a rush!
        </h1>
        <SubmissionForm/>
        {props.children}
        </div>
        <Footer/>
    </div>
);

