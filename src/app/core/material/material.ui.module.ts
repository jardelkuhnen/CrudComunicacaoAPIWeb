import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as Mat from '@angular/material';

@NgModule({
    exports: [
        FlexLayoutModule,
        Mat.MatToolbarModule,
        Mat.MatTableModule,
        Mat.MatTabsModule,
        Mat.MatFormFieldModule,
        Mat.MatCardModule,
    ]
})
export class MaterialUiModule {}