import { Component, ElementRef, output, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent,ButtonComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  // @ViewChild('form') form?:ElementRef<HTMLFormElement>;
  add = output<{title:string, text:string}>();

  private form = viewChild<ElementRef<HTMLFormElement>>('form');

  onSubmit (title: string , textTikect: string){
    // console.log(title);
    // console.log(textTikect);

    // this.form?.nativeElement.reset();

    this.add.emit({title:title,text:textTikect});

    this.form()?.nativeElement.reset();

 
  }

}
