import React from 'react';
import { Container } from 'reactstrap';
import Header from './header/header';
import SideNav from './side-nav/side-nav';
import "./layout.css";


export default (props:any) => (
  <div> 
        <Container className="full-size"> 
            <Header />
            <div className="main"> 
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
