import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AngularMaterialModulos } from "./material";
import { MapaComponent } from "./components/mapa/mapa.component";
import { AgmCoreModule } from "@agm/core";
import { MapaEditarComponent } from "./components/mapa/mapa-editar.component";

import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  entryComponents: [MapaEditarComponent],
  declarations: [AppComponent, MapaComponent, MapaEditarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModulos,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
