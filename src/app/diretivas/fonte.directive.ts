import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[fonte]'
})
export class FonteDirective {
  @HostBinding('style.fontFamily') tipo = 'arial'
  @HostBinding('style.fontSize') tamanho = ''
  @HostBinding('style.transition') propriedade = 'font-size 0.5s'
  @HostListener('mouseover') aumenta(){
    this.tamanho = '30px'
  }
  @HostListener('mouseleave') diminui(){
    this.tamanho = '16px'
  }
}
