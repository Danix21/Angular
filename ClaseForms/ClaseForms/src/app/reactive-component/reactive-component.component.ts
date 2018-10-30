import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-reactive-component",
  templateUrl: "./reactive-component.component.html",
  styleUrls: ["./reactive-component.component.css"]
})
export class ReactiveComponentComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      email: ["", { value: "", disable: true }, [Validators.email]],
      nl: [false]
    });

    this.ckNl.valueChanges.subscribe((value: Boolean) => {
      if (value) {
        this.email.enable();
      } else {
        this.email.disable();
      }
    });
  }

  get nombre() {
    return this.myForm.controls["nombre"];
  }
  get apellido() {
    return this.myForm.controls["apellido"];
  }
  get email() {
    return this.myForm.controls["email"];
  }
  get ckNl() {
    return this.myForm.controls["nl"];
  }
  ngOnInit() {}
}
