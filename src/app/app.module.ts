import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import {Routes,RouterModule} from '@angular/router';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { BehaviorSubject } from 'rxjs';
import {DataService} from './data.service';
import { ChildComponent } from './child/child.component';
import { FourthComponent } from './fourth/fourth.component';
import { NgForm,NgModel} from '@angular/forms';

const routes:Routes=[
  {path:'first',component:FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: 'third', component:ThirdComponent},
  {path:'fourth', component:FourthComponent},
  {path:'',component:FirstComponent}
];
const routing=RouterModule.forRoot(routes);

@NgModule({
  declarations: [AppComponent,FirstComponent,SecondComponent, NgForm, NgModel,ThirdComponent, ChildComponent, FourthComponent],
  imports: [BrowserModule,AppRoutingModule,routing],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
