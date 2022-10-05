import React from 'react'
import style from "./Form.module.css";
import SideLog from "../../Assets/sideLogo.png";

import { Link } from "react-router-dom";


const LinkStyle = {
    textDecoration: 'none',
    color: '#000'
}


export default function Login() {
    return (

        <div className={style.mainBox}>

            <div className={style.bottomBox}>
                <h3>Welcome!</h3>
                <p>
                    Use these awesome forms to login or create new account in your project
                    for free.
                </p>
            </div>
            <div className={style.imgAndForm}>
                <div className={style.sideBox}>
                    <img src={SideLog} width="100%" />
                </div>
                <div className={style.formBox}>
                    <h2>Sign In With Credentials</h2>

                    <section>
                        <input type="email" placeholder="Email" />
                        <br />
                        <input type="password" placeholder="Password" />
                        <p>Remember Me</p>
                    </section>
                    <Link to={"/"} style={LinkStyle}>
                        <button >SIGN IN</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
