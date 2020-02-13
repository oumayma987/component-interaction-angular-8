import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDatepickerModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';


const MaterialComponents = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatDatepickerModule,
  MatDatepickerModule,
  MatRadioModule

] ;
@NgModule({

  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
