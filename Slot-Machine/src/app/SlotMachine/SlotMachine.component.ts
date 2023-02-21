import{ Component } from '@angular/core';

@Component({
  selector: 'app-My-SlotMachine',
  templateUrl: './SlotMachine.component.html',
  styleUrls: ['./SlotMachine.component.css']
})
export class SlotMachineComponent {
  public Symbols: String[] = [];
  public credits: number = 10;
  public isSpinning: boolean = false;
  public firstSymbol: String = "";
  public secondSymbol: String = "";
  public thirdSymbol: String = "";

  async Spin() {
    if (this.credits <= 0) {
      alert("Sorry you have no credits");
      return;
    }
    this.credits --;
    this.Symbols.push("C");
    this.Symbols.push("L");
    this.Symbols.push("O");
    this.Symbols.push("W");

    let firstSlot = this.GetRandomInt(0,4);
    let secondSlot = this.GetRandomInt(0,4);
    let thirdSlot = this.GetRandomInt(0,4);

    this.isSpinning = true;
    await this.delay(3000);
    this.isSpinning = false;
    this.firstSymbol = this.Symbols[firstSlot];
    this.secondSymbol = this.Symbols[secondSlot];
    this.thirdSymbol = this.Symbols[thirdSlot];

    if (firstSlot === secondSlot && secondSlot === thirdSlot) {
      let range= this.GetRandomInt(0,10);
      if (this.credits >= 40 && this.credits <= 60) {
        if (range<3){
          console.log("Re-Rolled!");
          this.Spin();
          return;
        }
      }
    else if (this.credits > 60) {
      if (range<6) {
        console.log("Re-Rolled!");
          this.Spin();
          return;
      }
    }
    alert("Hit the jackpot!!!");
    this.credits = this.credits + (firstSlot +1) *10;
    }
  }
  GetRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max-min)+min);
    //Max is exclusive and min is inclusive
  }
  delay(ms: number) {
    return new Promise(resolve = setTimeout(resolve, ms));
  }

  CashOut() {
    alert("Congrats, you have earned ${this.credits} credits");
    this.credits=10
    this.firstSymbol = "";
    this.secondSymbol = "";
    this.thirdSymbol = "";
  }
}

