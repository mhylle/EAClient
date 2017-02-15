//Simple singleton service holding all our anims
import {Injectable} from "@angular/core";
import * as animations from "./animation-player.store";
@Injectable()
export class AnimationService {
  private animations :any;
  constructor(){
    this.animations = animations.animations;
  }
  getAnimation(name : string){
    return this.animations[name];
  }
}
