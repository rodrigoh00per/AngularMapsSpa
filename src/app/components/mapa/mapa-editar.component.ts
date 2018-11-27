import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: "app-mapa-editar",
  templateUrl: "./mapa-editar.component.html",
  styleUrls: ["./mapa-editar.component.css"]
})
export class MapaEditarComponent implements OnInit {
  formaEditar: FormGroup;
  constructor(
    public formbuilder: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.formaEditar = formbuilder.group({
      titulo: data.titulo,
      descripcion: data.desc
    });
  }

  ngOnInit() {}

  cancelarEdicion(): void {
    this.dialogRef.close();
  }

  guardarCambios() {
// console.log(this.formaEditar.value);
this.dialogRef.close(this.formaEditar.value);

console.log("---");

  }
}
