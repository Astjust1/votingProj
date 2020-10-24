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
                backgroundColor: 'purple',
                position:'fixed',
                width: '100%'
            }}>
            Footer
            </div>
        )
    }
}