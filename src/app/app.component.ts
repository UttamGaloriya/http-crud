import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { userobj } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Login';

  data: userobj = {
    name: "uttam",
    email: "uttam@gmail.com",
    type: "admin",
    number: 123456,
    password: "fshdbfjsbdfjdsh"

  }

  constructor(private userService: UserService) { }

  ngOnInit() {




    // this.userService.postData(this.data)
    //   .subscribe(response => {
    //     console.log(response)
    //   })

    // this.userService.getAllData()
    //   .subscribe(data => {
    //     console.log(data)
    //   })

    // this.userService.updateData(this.dataUpdate, 101)
    //   .subscribe(data => console.log(data))

    // this.userService.deleteData(101).
    // subscribe(
    //   data => { console.log("data delete" + data) })
  }


}
