import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }


];
