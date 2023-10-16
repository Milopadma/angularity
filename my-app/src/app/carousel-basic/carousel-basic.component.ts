import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { faker } from '@faker-js/faker';

@Component({
	selector: 'app-carousel-basic',
	standalone: true,
	imports: [NgbCarouselModule, NgIf],
	templateUrl: './carousel-basic.component.html',
})
export class NgbdCarouselBasic {
	public images = [1, 2, 3].map(() => faker.image.url())
	public function = () => {
		return this.images;
	}
}



