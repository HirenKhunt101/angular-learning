import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

  tabs = ['Profile', 'Interest', 'Setting'];
  activeTab = 0;
  dataForm = new FormGroup({
    profile: new FormGroup({
      name: new FormControl('12'),
      age: new FormControl(0)
    }),
    interst: new FormGroup({
      isMusic: new FormControl(true),
      isDance: new FormControl(false),
    }),
    setting: new FormControl('male')
  })

  tabChange(ind: any) {
    this.activeTab = ind;
    console.log(ind);


  }

}
