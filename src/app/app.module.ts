import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { NativeEventsComponent } from './native-events/native-events.component';
import { DirectivesComponent } from './directives/directives.component';
import { PropertyBracketsComponent } from './property-brackets/property-brackets.component';
import { ComponentComponent } from './component/component.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomTypesComponent } from './custom-types/custom-types.component';
import { ServiceIntroductionComponent } from './service-introduction/service-introduction.component';
import { Utility } from './service-introduction/utility';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    NativeEventsComponent,
    DirectivesComponent,
    PropertyBracketsComponent,
    ComponentComponent,
    PipesComponent,
    CustomTypesComponent,
    ServiceIntroductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Utility],
  bootstrap: [AppComponent]
})
export class AppModule { }
