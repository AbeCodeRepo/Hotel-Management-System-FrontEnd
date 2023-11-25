
export class StaffDTO {

  staffID;
  name;
  address;
  email;
  mobileNo;
  gender;
  position;
  salary;
  status;

  constructor(staff?: any){
    staff = staff || {};

    this.staffID =staff.staffID || null;
    this.name =staff.name || '';
    this.address =staff.address || '';
    this.email =staff.email || '';
    this.mobileNo =staff.mobileNo || '';
    this.gender =staff.gender || '';
    this.position =staff.position || '';
    this.salary =staff.salary || '';
    this.status =staff.status || '';


  }
}
