import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScnSettingsComponent } from './scn-settings.component';
import { TranslateModule } from '@ngx-translate/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    AccordionModule.forRoot()
  ],
  declarations: [ScnSettingsComponent],
  exports: [ScnSettingsComponent]
})
export class ScnSettingsModule {
}
