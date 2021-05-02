import React from 'react'

function Contact() {
    return (
            <div action="" method="post">
                <div id="form-title">
                    Contact Me
                </div>
                <div data-validate="Please enter your name.">
                    <h4>Please enter your name.</h4>
                    <input  type="text" name="full_name" placeholder="Name" />

                </div>
                <div data-validate="Please enter a valid email address.">
                    <h4 class="invalid-template ">Please enter a valid email address.</h4>
                    <input class="validate-input" type="email" name="email" placeholder="Email" />

                </div>
                <div data-validate="Please enter your summary">
                    <h4 class="invalid-template ">Please enter your summary</h4>
                    <textarea class="validate-input" name="message" placeholder="Summary"></textarea>

                </div>
                <div>
                    <button id="form-btn" type="submit" name="submit" value="Submit">
                        <span>
                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                            Submit
                        </span>
                    </button>
                </div>
            </div>
    )
}

export default Contact
