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
            height:'95%',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            display: 'flex',
            overFlowY: 'scroll'
        }} >
        <SubmissionForm/>
        {props.children}
        </div>
        <Footer/>
    </div>
);

