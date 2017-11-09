import React from 'react';
import { Link, Route } from 'react-router-dom';


import { MainMenu } from './menus';
import HeaderPrivate from './HeaderPrivate';
import SidebarRight from './SidebarRight';
import DashboardLog from './DashboardLog';
import EditProfile from './EditProfile';


const PageTemplate = ({children}) =>
      <div>
         <div className="container-fluid">
              <HeaderPrivate/>
          </div>
          <div className="container-fluid row">
              <div className="col-3">
                  <MainMenu />
              </div>
              <div className="col-6">
                  {children}
              </div>
              <div className="col-3">
                  <SidebarRight/>
              </div>
          </div>
      </div>

export const EditProfile1 = () =>
    <PageTemplate>
      <EditProfile />
    </PageTemplate>

export const Home = () =>
    <PageTemplate>
      <DashboardLog />
    </PageTemplate>
