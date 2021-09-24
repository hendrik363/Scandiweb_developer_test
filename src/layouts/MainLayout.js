import React from 'react';
import Header from './../components/Header';

class MainLayout extends React.Component {

    render()  {
        return(
            <div className="fullHeight">
                <Header />
                <div className="main">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default MainLayout;