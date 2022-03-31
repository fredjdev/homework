import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { ListscreenComponent } from './components/listscreen/listscreen.component';
import { DetailsscreenComponent } from './components/detailsscreen/detailsscreen.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
    declarations: [AppComponent, ListscreenComponent, DetailsscreenComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
