import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';  // Provided file path, then imported it for registering Service.
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // Imported it for making request 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Imported it for making request
  ],
  providers: [HttpService], // Included to Register Service
  bootstrap: [AppComponent]
})
export class AppModule { }





// Register the service