import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatProgressBarModule, MatSliderModule, MatDialogModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
imports: [
    CommonModule, 
    MatProgressBarModule,
    MatSliderModule,
    MatDialogModule,
    MatToolbarModule,
    BrowserAnimationsModule
    ],
exports: [
    CommonModule,
    MatProgressBarModule,
    MatSliderModule,
    MatDialogModule,
    MatToolbarModule
    ],
})
export class CustomMaterialModule {}
