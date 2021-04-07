import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    ImagecomponentComponent,
    EmpInfoComponent,
    FormcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
