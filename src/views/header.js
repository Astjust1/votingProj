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
                height:'80px',
                backgroundColor: 'purple',
                position:'fixed',
                width:'100%'
            }}>
            Header
            </nav>
        )
    }
}