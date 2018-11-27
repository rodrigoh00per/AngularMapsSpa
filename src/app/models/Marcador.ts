export class Marcador {
  private lat: number;
  private lng: number;
  private titulo = "Sin Titulo";
  private descripcion = "Sin Descripcion";

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}
