import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {ManageCustomersComponent} from '../view/manage-customers/manage-customers.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<ManageCustomersComponent> {

  canDeactivate(component: ManageCustomersComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.frmCustomer.dirty) {
      if (!confirm('There are some unsaved changes. Do you really want to exit?')) {
          return false;
      }
    }
    return true;
  }

}
