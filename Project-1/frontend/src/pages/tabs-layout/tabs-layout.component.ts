import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { InterestComponent } from './interest/interest.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tabs-layout',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ProfileComponent, InterestComponent],
  templateUrl: './tabs-layout.component.html',
  styleUrl: './tabs-layout.component.css'
})

export class TabsLayoutComponent {

  tabs = [
    {
      name: 'Profile',
      component: ProfileComponent
    },
    {
      name: 'Interest',
      component: InterestComponent
    },
  ];
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
