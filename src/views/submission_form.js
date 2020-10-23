import {
    Component,
    h,
    render,
} from 'preact';

import linkstate from 'linkstate';

export default class SubmissionForm extends Component {
    state = {
        email: '',
        address: ''
    }
    onSubmit = ()=> {

    }

    render({},{email, address}) {
        return(
            <div>
                <form style={{
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                display: 'flex'
            }}>
                    <label for={'email'}> What's your email?</label>
                    <input id={'email'} type={'email'} value={email} onInput={linkstate(this,'email')} placeholder={'abc@example.com'}/>
                    <label for={'address'}> What's your home address?</label>
                    <input id={'address'} type={'text'} value={address} onInput={linkstate(this,'address')} placeholder={'57 Chicken Rd, Los Angles CA, 11111'}/>
                </form>
            </div>
        )
    }

}