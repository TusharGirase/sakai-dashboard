/* eslint-disable @next/next/no-img-element */

import React from 'react';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from './context/menucontext';
import { AppMenuItem } from '@/types';

const AppMenu = () => {
    const model: AppMenuItem[] = [
        {
            label: 'Home',
            items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
                {
                    label: 'Asetman',
                    items: [
                        { label: 'Dashboard', icon: 'pi pi-fw pi-circle', to: '/assetman/dashboard' },
                        { label: 'New', icon: 'pi pi-fw pi-plus', to: '/assetman/new' }
                    ]
                },
                {
                    label: 'LoanApp',
                    items: [
                        { label: 'Dashboard', icon: 'pi pi-fw pi-circle', to: '/loanapp/dashboard' },
                        { label: 'New', icon: 'pi pi-fw pi-plus', to: '/loanapp/new' }
                    ]
                }
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
