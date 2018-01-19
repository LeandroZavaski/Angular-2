import { Component,
  OnInit,
  OnChanges,
  AfterContentChecked,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements   OnInit,
OnChanges,
AfterContentChecked,
DoCheck,
AfterContentInit,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('construtor');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewChecked');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log( hook: string) {
    console.log(hook);
  }

}
