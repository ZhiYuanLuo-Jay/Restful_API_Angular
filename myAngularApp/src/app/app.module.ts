import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';  // Provided file path, then imported it for registering Service.
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // Imported it for making request 
import { FormsModule } from '@angular/forms'; // <-- import FormsModule.

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Imported it for making request
    FormsModule, // <-- register FormsModule with our app.
  ],
  providers: [HttpService], // Included to Register Service
  bootstrap: [AppComponent]
})
export class AppModule { }





// Register the service