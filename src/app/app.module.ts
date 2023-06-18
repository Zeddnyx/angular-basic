import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import formModule when use data binding with ngModel
// import reactive-forms when use data binding with formControlName
import { SericeService } from './Services/serice.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { OtherCompComponent } from './other-comp/other-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { EventHandleComponent } from './event-handle/event-handle.component';
import { PostFormComponent } from './post-form/post-form.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormTableComponent } from './form-table/form-table.component';
import { CPipePipe } from './Pipes/c-pipe.pipe';
import { PostSerPrivateComponent } from './post-ser-private/post-ser-private.component';
import { PostSerPublicComponent } from './post-ser-public/post-ser-public.component';
import { FormControlComponent } from './form-control/form-control.component';
import { RoutingComponent } from './routing/routing.component';
import { RoutingOtherComponent } from './routing-other/routing-other.component';
import { RoutingSingleComponent } from './routing-single/routing-single.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    OtherCompComponent,
    ChildCompComponent,
    EventHandleComponent,
    PostFormComponent,
    DirectiveComponent,
    FormTableComponent,
    CPipePipe,
    PostSerPrivateComponent,
    PostSerPublicComponent,
    FormControlComponent,
    RoutingComponent,
    RoutingOtherComponent,
    RoutingSingleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // add ngModel here
    ReactiveFormsModule, // add formControl here
  ],
  providers: [
    SericeService, // add this if using depencency injection
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
