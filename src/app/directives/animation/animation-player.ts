import {Directive, OnDestroy, Input, AnimationPlayer, ElementRef, Renderer} from "@angular/core";
import {AnimationService} from "./animation-player.service";

@Directive({
  selector: '[animation-player]'
})

export class AnimationPlayerDirective implements OnDestroy {

  @Input('duration') duration: number = 300;
  @Input('delay') delay: number = 0;
  @Input('easing') easing: string = "ease";
  @Input('animation') animationName: string = "fadeIn";
  @Input('animation-leave') animationLeave: string = "fadeOut";

  private _play: boolean = true;

  get play(): boolean {
    return this._play;
  }

  @Input('play')
  set play(value: boolean) {
    this._play = value;
    this.setAnimation(!this._play);
    this.animation.play();
    this.animation.onDone(() => this.setAnimation(this._play));
  }

  private animation: AnimationPlayer;

  constructor(private renderer: Renderer, private element: ElementRef, private animService: AnimationService) {

  }

  setAnimation(leaving: boolean = false) {
    let animationName = leaving ? this.animationLeave : this.animationName;
    this.animation = this.renderer.animate(
      this.element.nativeElement.firstElementChild || this.element.nativeElement,
      this.animService.getAnimation(animationName).startingStyles,
      this.animService.getAnimation(animationName).keyframes,
      this.duration,
      this.delay,
      this.easing
    );
    this.animation.pause();
  }

  ngAfterContentInit() {
    this.setAnimation();
    if (this._play) {
      this.animation.play();
    }
  }

  ngOnDestroy() {
    this.setAnimation(true);
    this.animation.play();
    setTimeout(() => {
      return true
    }, this.duration + this.delay)
  }
}
