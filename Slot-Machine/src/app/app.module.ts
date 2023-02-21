import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlotMachineComponent } from C:\Users\625808\My-Slot-Machine\Slot-Machine\src\app\SlotMachine\SlotMachine.component.ts
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SlotMachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlotMachineComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
