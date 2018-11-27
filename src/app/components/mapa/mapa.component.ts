import { Component, OnInit } from "@angular/core";
import { Marcador } from "src/app/models/Marcador";
import { MatSnackBar, MatDialog } from "@angular/material";
import { MapaEditarComponent } from "./mapa-editar.component";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"]
})
export class MapaComponent implements OnInit {
  private marcadores: Marcador[];
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {
    this.marcadores = [];
    if (localStorage.getItem("marcadores")) {
      this.marcadores = JSON.parse(localStorage.getItem("marcadores"));
    }
  }

  ngOnInit() {}

  agregarMarcador(event) {
    let coord: { lat: number; lng: number } = event.coords;
    this.marcadores.push(new Marcador(coord.lat, coord.lng));
    this.snackBar.open("Marcador Agregado", "Cerrar", { duration: 3000 });
    this.guardarStorage();
  }

  eliminarMarcador(i: number) {
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open("Marcador Eliminado", "Cerrar", { duration: 3000 });
  }

  editarMarcador(marcador) {
    console.log(marcador);
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: "250px",
      data: { titulo: marcador.titulo, desc: marcador.descripcion }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      } else {
        marcador.titulo = result.titulo;
        marcador.descripcion = result.descripcion;
        this.guardarStorage();
        this.snackBar.open("Marcador Actualizado", "Cerrar", { duration: 3000 });
      }
    });
  }

  guardarStorage() {
    localStorage.setItem("marcadores", JSON.stringify(this.marcadores));
  }
}
