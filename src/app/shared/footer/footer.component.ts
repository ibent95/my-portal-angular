import { Component, OnInit } from '@angular/core';
import { IconName, IconPrefix, IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialBlogLinks!: Array<{ link: string, icon: IconProp | [IconPrefix, IconName], iconSize: SizeProp }>;

  constructor() { }

  ngOnInit(): void {
    this.socialBlogLinks = [
      {
        link: 'https://github.com/ibent95',
        icon: ['fab', 'github'],
        iconSize: 'xl',
      },
      {
        link: 'https://ibent95.blogspot.com',
        icon: ['fab', 'blogger'],
        iconSize: 'xl',
      },
      {
        link: 'https://sedikitasa.wordpress.com',
        icon: ['fab', 'wordpress'],
        iconSize: 'xl',
      },
      {
        link: 'https://medium.com/@ibent95',
        icon: ['fab', 'medium'],
        iconSize: 'xl',
      },
    ];
  }

}
