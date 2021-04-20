import React from "react";
import { Link } from "react-router-dom";
import './styles.scss'

const UserMottoPass = () => {
    return (
        <>
            <div className="motto_outter_container">
                <div className="container">
                    <div className="motto_inner_container">
                        <div className='motto_links'><Link to='/'>Go Back</Link>
                        <Link to='/user-onboard/user-payments'>Go next</Link></div>
                        <div className="motto_wrapper">
                            <div className='motto_pass_wrapper'>
                                <h2>Get a Motto Pass to Do More for Less</h2>
                                <div className='motto_pass_items'>
                                    <div className='motto_pass_left'>
                                        <div class='session_pass'>
                                            <h3>3 Session pass</h3>
                                        </div>
                                    </div>
                                    <div className='motto_pass_right'>
                                    <div class='session_pass'>
                                            <h3>3 Session pass</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserMottoPass;
