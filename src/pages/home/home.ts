import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TweenMax } from 'gsap';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  };

  ionViewDidLoad() {
    this.addEventHandlers();
  };


  addEventHandlers () {
    const yingyang: any = document.getElementById("select-side");

    yingyang.addEventListener("load", function() {
      const content = yingyang.contentDocument;
      const ying = content.getElementById("ying");

      ying.addEventListener('click', function() {
          TweenMax.to(ying, 0.4, {
            scale: 2, x: "+100%", y: "-50%",
            transformOrigin:"100% 0%",
            opacity: 0,
            force3D:false,
            autoRound: false
          });
          this.animateSelectSide(yingyang);
      }.bind(this));
    }.bind(this));
  };

  animateSelectSide(yingyang: HTMLElement) {
    TweenMax.to(yingyang, 0.7, {
      rotation: -270,
      opacity: 0,
      force3D:false,
      autoRound: false,
      onComplete: function() {
        yingyang.style.left = '-500px';
      }
    });
  };
}
