import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class Header extends React.Component {
    render() {
        return (
            <header className='Header'>
                <AppBar
                    title={<span>Photo Store</span>}
                    showMenuIconButton={false}
                />
            </header>
        );
    }
}
