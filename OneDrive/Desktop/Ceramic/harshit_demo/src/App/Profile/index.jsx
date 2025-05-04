import React from 'react'
import './Profile.scss'
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";  
import { SiFacebook } from "react-icons/si"; 
import { FiTwitter } from "react-icons/fi";

export default function Profile() {
  return (
    <div>
        <div className="Profile">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
				<div className="login__field">
                <GiPlagueDoctorProfile />
					<input type="text" className="login__input" placeholder="User name / Email"/>
				</div>
				<div className="login__field">
                <RiLockPasswordFill />
					<input type="password" className="login__input" placeholder="Password"/>
				</div>
				<button className="button login__submit">
					<span className="button__text">Log In Now</span>
					
				</button>				
			</form>
			<div className="social-login">
				<h3>log in via</h3>
				<div className="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"><BsInstagram /></a>
					<a href="#" class="social-login__icon fab fa-facebook"><SiFacebook /></a>
					<a href="#" class="social-login__icon fab fa-twitter"><FiTwitter />
                    </a>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    </div>
  )
}
