import React, {forwardRef} from 'react'
import './style.css'

// interface: Input Box 컴포넌트 Propperties //
interface Props {
    label: string;
    type: 'text | password';
    placeholder : string;
    value: string;
    error: boolean;
}

// componenet : Input Box 컴포넌트 //
const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {

    // state: properties //
    const { label, type, placeholder, value, error } = props;

    // render: Input box 컴포넌트 //
    return (
        <div className='inputbox'>
            <div className='inputbox-label'>{label}</div>
            <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
                <input type={type} className='input' placeholder={placeholder} value={value}/>
                <div className='icon-button'>
                    <div className='icon eye-light-off-icon'></div>
                </div>
            </div>
            <div className='inputbox-message'>{'비밀번호는 8자 이상 입력해주세요.'}</div>
        </div>
    )

});

export default InputBox;
