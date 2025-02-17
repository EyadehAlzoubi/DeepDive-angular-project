import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboad-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboad-item.component.html',
  styleUrl: './dashboad-item.component.css'
})
export class DashboadItemComponent {
  // @Input({required:true}) image! : {src:string ; alt:string};
  // @Input({required:true}) title! : string;

  image = input.required<{src:string ; alt:string}>();
  title = input.required<string>();


}
