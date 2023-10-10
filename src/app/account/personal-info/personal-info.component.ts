import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  public groupVisible4: boolean = false;
  public groupVisible5: boolean = false;
  public inputVisible: boolean = true;
  public inputVisible1: boolean = false;
}
