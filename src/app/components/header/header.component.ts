import { animation } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  constructor(private render2: Renderer2, private elementRef: ElementRef) {}
  index = 0;
  msg = 'Xin chào các bạn';
  path = "'https://assets4.lottiefiles.com/packages/lf20_jrejavt6.json'";
  change = new BehaviorSubject<boolean>(false);
  ngAfterViewInit(): void {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.id = 'testScriptName';
    s.innerHTML = `var animation = bodymovin.loadAnimation({container: document.getElementById('animation'),renderer: 'svg',loop: true,autoplay: true, path:${this.path} });`;
    this.elementRef.nativeElement.appendChild(s);
    let a = document.querySelector('#testScriptName') as HTMLElement;
    console.log(a);
    this.change.subscribe((change) => {
      if (change == true) {
        let elem = document.querySelector('#testScriptName') as HTMLElement;
        elem.remove();
        document.querySelector('.acc')?.remove();
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.id = 'testScriptName';
        s.innerHTML = `var animation = bodymovin.loadAnimation({container: document.getElementById('animation'),renderer: 'svg',loop: true,autoplay: true, path:${this.path} });`;
        let div = document.createElement('div');
        div.className =
          'container d-flex align-items-center justify-content-center acc';
        div.id = 'animation';
        document.querySelector('.tt')?.appendChild(div);
        this.elementRef.nativeElement.appendChild(s);
      }
    });
  }

  ngOnInit(): void {
    console.log();
  }
  setIndex(i: number) {
    this.index = i;
    if (this.index == 1) {
      this.msg = ' Khánh Đỗ xin chàoooo';
      this.path =
        "'https://assets5.lottiefiles.com/temporary_files/1Y67Dn.json'";
      this.change.next(true);
    }
    if (this.index == 2) {
      this.msg = ' Anh Tuấn xin chàoooo';
      this.path="'https://assets9.lottiefiles.com/private_files/lf30_y4mdxyfj.json'"
      this.change.next(true);
    }
    if (this.index == 3) {
      this.msg = ' Thành Nam xin chàoooo';
      this.change.next(true);
    }
    if (this.index == 4) {
      this.msg = ' Thuận Gate xin chàoooo';
      this.path="'https://assets1.lottiefiles.com/packages/lf20_bXRG9q.json'"
      this.change.next(true);
    }
    if (this.index == 5) {
      this.msg = ' Thành Nam xin chàoooo';
      this.path="'https://assets8.lottiefiles.com/packages/lf20_xrC7ik.json'"
      this.change.next(true);
    }
    if (this.index == 6) {
      this.msg = ' Mạnh Bin xin chàoooo';
      this.path="'https://assets2.lottiefiles.com/private_files/lf30_4mt0iug4.json'"
      this.change.next(true);
    }
    if (this.index == 7) {
      this.msg = ' HH  xin chàoooo';
      this.path="'https://assets1.lottiefiles.com/packages/lf20_bXRG9q.json'"
      this.change.next(true);
    }
    if (this.index == 0) {
      this.msg = 'Xin chào mọi người';
      this.path = "'https://assets4.lottiefiles.com/packages/lf20_jrejavt6.json'";
    }
  }
}
