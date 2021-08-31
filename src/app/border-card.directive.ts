import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private intitialColor: string = '#f5f5f5';
  private defaultColor: string = '#31128c';
  private defaultHeight: number = 180;


    constructor(private el: ElementRef) {
        this.setBorder(this.intitialColor);
        this.setHeight(this.defaultHeight);
    }

    @Input('pkmnBorderCard') borderColor: string;

    @HostListener ('mouseenter') onMouseEnter() {
      this.setBorder(this.borderColor || this.defaultColor);
    }

    @HostListener ('mouseleave') onMouseLeave() {
      this.setBorder(this.intitialColor);
    }


    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }
}
