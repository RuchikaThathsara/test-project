import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../dto/customer';
import {CustomerService} from '../../service/customer.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {

  customers: Customer[] = [];
  selectedCustomer: Customer = new Customer('', '', '');
  @ViewChild('txtId') txtId: ElementRef;
  @ViewChild('frmCustomer') frmCustomer: NgForm;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(customers => {
      this.customers = customers;
    }, error1 => {
      console.log(error1);
    });
  }

  tableRow_Click(customer: Customer): void {
    this.selectedCustomer = Object.assign({}, customer);
  }

  newCustomer(): void {
    this.txtId.nativeElement.focus();
  }

  saveCustomer(): void {
    if (!this.frmCustomer.invalid) {

      this.customerService.saveCustomer(this.selectedCustomer)
        .subscribe(resp => {
          if (resp) {
            alert('Customer has been saved successfully');
            this.customers.push(this.selectedCustomer);
          } else {
            alert('Failed to save the customer');
          }
        });

    } else {
      alert('Invalid Data, Please Correct...!');
    }
  }

}
