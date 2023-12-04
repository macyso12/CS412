import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>{{name}}!</h1>`,
  styles: [`h1 { font-family: 'Segoe UI', Arial, sans-serif; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
