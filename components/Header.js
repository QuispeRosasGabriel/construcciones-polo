import React from 'react';
import { menuList } from '../utils';

const Header = () => (
    <div>
        <ul>
            {
                menuList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))
            }
        </ul>
    </div>
);

export default Header;