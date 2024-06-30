import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a un servidor
    console.log('Formulario enviado', this.name, this.email, this.message);
  }
}
