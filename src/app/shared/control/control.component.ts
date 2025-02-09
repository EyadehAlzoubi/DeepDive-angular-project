import { AfterViewInit, Component, ContentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  host: {
    class : "control",
   '(click)' :'onClick()',
  }
})
export class ControlComponent implements AfterViewInit {

  label = input.required<string>();
  @ContentChild('input') private controle? : ElementRef<HTMLInputElement | HTMLTextAreaElement>;


  ngAfterViewInit() {
    console.log('hi');
   console.log(this.controle);
  }


  onClick(){

    // console.log("hii");
    console.log(this.controle);
  }


}
