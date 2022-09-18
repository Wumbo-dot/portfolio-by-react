import React, { useEffect } from 'react';
import HeaderCSS from './Header.module.css';

const Header = () => {

    return (
        <header className={`${HeaderCSS.headerContainer}`}>

                <div className={`${HeaderCSS.portfolioContacts} pd-2-top pd-3-left pd-3-right pd-2-bottom flex-column`}>
                    <h1 className={`${HeaderCSS.portfolioName}`}>{'<'} JT Gutierrez{'/>'}</h1>
                    <div className="flex-column flex-center mg-2-bottom-all mg-2-top-all">
                        <p>{'{ Name: \'JT Gutierrez\' }'}</p>
                        <p>{'{ File: portfolio-by-react }'}</p>
                        <p>{'{ Github:'} <a href="https://github.com/Wumbo-dot">https://github.com/Wumbo-dot</a> {'}'}</p>
                        <p>{'{ Email: jt.gutierrez.dev@gmail.com }'}</p>
                    </div>
                </div>

        </header>
    );
}

export default Header;