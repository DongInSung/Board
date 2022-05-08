import signUpStyle from './SignUp.module.css';
import { customAxios } from '../axios/Axios';

import { useEffect, useRef, useState } from 'react';


function SignUp() {


    const inputedUserData = useRef([]);
    const [regCheck, setRegCheck] = useState({
        id: true,
        idCheck: true,
        name: true,
        pw: true,
        pwCheck: true,
        email: true
    });
    


    useEffect(() => {
        inputedUserData.current[0].focus();
    }, []);


    const addToRef = (el) => {
        if (el && !inputedUserData.current.includes(el)) {
            inputedUserData.current.push(el);
        }
    }


    
    const submitUserData = async () => {
        
    }


    return (
        <div className={signUpStyle.signUp}>

            <div className={signUpStyle.container}>
                <table>
                    <thead>
                        <tr>
                            <th colSpan='2'><h2>회원 가입</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="signUp-id">아이디</label>
                            </td>
                            <td>
                                <input id="signUp-id" type='text' autoComplete='off' maxLength='11'
                                    className={`${signUpStyle.inputId} ${regCheck.id === true ? null : `${signUpStyle.regCheck}`} `}
                                    ref={addToRef} />
                                <button className={signUpStyle.idCheck}>중복 확인</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="signUp-name">이름</label>
                            </td>
                            <td>
                                <input id="signUp-name" type='text' autoComplete='off'
                                    className={regCheck.name === true ? null : `${signUpStyle.regCheck}`}
                                    ref={addToRef} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="signUp-password">비밀번호</label>
                            </td>
                            <td>
                                <input id="signUp-password" type='password'
                                    className={regCheck.pw === true ? null : `${signUpStyle.regCheck}`}
                                    ref={addToRef} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="signUp-passwordCheck">비밀번호 확인</label>
                            </td>
                            <td>
                                <input id="signUp-passwordCheck" type='password'
                                    className={regCheck.pwCheck === true ? null : `${signUpStyle.regCheck}`}
                                    ref={addToRef} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="signUp-email">이메일</label>
                            </td>
                            <td>
                                <input id="signUp-email" type='text' autoComplete='off'
                                    className={regCheck.email === true ? null : `${signUpStyle.regCheck}`}
                                    ref={addToRef} />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button className={signUpStyle.submitBtn} onClick={submitUserData}>회원 가입</button>
            </div>
        </div>
    )


}

export default SignUp;