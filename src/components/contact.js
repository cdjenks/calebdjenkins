import React from "react";

function Contact() {
    return (
        <div className="container">

            <div className="row content-main">

                <div className="col-sm-1 col-lg-2"></div>

                <form className="card col-sm-10 col-lg-6">

                    <div>

                        <h2 className="content-title">Contact</h2>

                        <label for="exampleFormControlInput1">Name</label>
                        <input type="text" class="form-control" placeholder="John Smith"></input>
                    </div>

                    <br />
                    <br />

                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="johnsmith@example.com"></input>
                    </div>

                    <br />
                    <br />

                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>

                </form>

                <div className="col-sm-1 col-lg-2"></div>

            </div>

        </div>
    )
};

export default Contact;