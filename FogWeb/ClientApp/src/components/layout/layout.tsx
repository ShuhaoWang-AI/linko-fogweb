import React from 'react';
import { Container } from 'reactstrap';
import Header from './header/header';
import SideNav from './side-nav/side-nav';
import "./layout.scss";


export default (props:any) => (
    <div className="">  

        <Header />
        <Container>
            <div className="main full-size"> 
                <SideNav />
                <div className="content">
                    {
                        props.children
                    } 
                </div>   
            </div>
        </Container>
  </div>
);
