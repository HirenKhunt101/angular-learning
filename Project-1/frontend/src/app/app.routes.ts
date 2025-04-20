import { Routes } from '@angular/router';
import { TabsComponent } from '../pages/tabs/tabs.component';
import { TabsLayoutComponent } from '../pages/tabs-layout/tabs-layout.component';

export const routes: Routes = [
    {
        path: 'tabs',
        component: TabsComponent
    },
    {
        path: 'tab-layout',
        component: TabsLayoutComponent
    }
];
