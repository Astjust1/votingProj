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
                <form style={{
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                display: 'flex',
                border:'1px solid #bfecb7',
                borderRadius:'16px',
                height: "25%",
                width: "60%",
                boxShadow:'5px 10px 12px #b7bfec',
            }}> 
                    <div>
                        <label for={'email'}> What's your email?</label>
                        <input id={'email'} type={'email'} value={email} onInput={linkstate(this,'email')} placeholder={'abc@example.com'}/>
                    </div>
                    <div>
                        <label for={'address'}> What's your home address?</label>
                        <input id={'address'} type={'text'} value={address} onInput={linkstate(this,'address')} placeholder={'57 Chicken Rd, Los Angles CA, 11111'}/>
                    </div>
                </form>
        )
    }

}