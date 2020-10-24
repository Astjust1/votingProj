import {
    Component,
    h,
    render,
} from 'preact';

import linkstate from 'linkstate';

export default class Header extends Component {

    render({},{}) {
        return(
            <nav style={{
                backgroundColor: '#ecb7bf',
                position:'fixed',
                width:'100%',
                top: '0',
                minHeight: '50px'
            }}>
                <ul style={{
                    width:'30%',
                    display: 'flex',
                    paddingLeft: '15px',
                    paddingRight: '15px'
                }}>
                    <li style={{display: 'block', paddingTop: '15px', paddingBottom: '15px',  paddingLeft: '15px',
                    paddingRight: '15px'}}> About </li>
                    <li style={{display: 'block', paddingTop: '15px', paddingBottom: '15px',  paddingLeft: '15px',
                    paddingRight: '15px'}}> Donate </li>
                </ul>
            </nav>
        )
    }
}