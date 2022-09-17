import React from 'react';
import MainLayout from './layouts/MainLayout';

const Contact = function() {
    return (
        <MainLayout title="Contact Me">
            <div className="mg-10-bottom mg-3-top-all">
                <p className="paragraph text-size-3">
                    If you would like to get in touch with me, here are a few of my contacts where I am the most active:
                </p>
                <p className="text-size-3">
                    Phone: 210-291-8779
                </p>
                <p className="text-size-3" style={{wordBreak: "break-all"}}>
                    Email: <span style={{color: "limegreen", textDecoration: "underline"}}><a href="mailto:jt.gutierrez.dev@gmail.com">jt.gutierrez.dev@gmail.com</a></span>
                    Email: <span style={{color: "limegreen", textDecoration: "underline"}}><a href="mailto:jtgutierrez.macpark@gmail.com">jtgutierrez.macpark@gmail.com</a></span>
                </p>
            </div>
        </MainLayout>
    );
}

export default Contact;