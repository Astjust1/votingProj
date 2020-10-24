import {
    Component,
    h,
    render,
} from 'preact';

import linkstate from 'linkstate';

export default class Footer extends Component {

    render({},{}){
        return(
            <div style={{
                height:'5%',
                backgroundColor: '#ecb7bf',
                position:'fixed',
                width: '100%'
            }}>
            Footer
            </div>
        )
    }
}