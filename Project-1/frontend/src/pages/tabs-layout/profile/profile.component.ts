import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Input() formGroup!: FormGroup
  profile: any;

  ngOnInit() {
    this.profile = this.formGroup.controls['profile']
    console.log(this.profile);
  }

}
