import { Routes } from '@angular/router';
import { ProductsComponent} from './domains/products/products.component';
import { PageOne } from './domains/info/info.component';
export const routes: Routes = [
    {
        path:'',
        component:ProductsComponent
    }, 
    {
        path:'info',
        component:PageOne 
    }

];
