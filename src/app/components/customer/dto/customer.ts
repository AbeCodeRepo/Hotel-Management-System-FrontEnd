
export class CustomerDTO {

  customerID;
  customerName;
  mobileNo;
  address;
  status;

  constructor(customer?: any){
    customer = customer || {};

    this.customerID =customer.customerID || null;
    this.customerName =customer.customerName || '';
    this.mobileNo =customer.mobileNo || '';
    this.address =customer.address || '';
    this.status =customer.status || '';


  }
}
