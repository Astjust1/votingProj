import {
    h,
    render,
    Component,
    toChildArray
} from 'preact';

import SubmissionForm from './submission_form';

export const App = (props={}) => (
    <div style={{
        width: '100vw',
        height:'100vh',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        display: 'flex'
    }} >
     <SubmissionForm/>
     {props.children}
    </div>
);

