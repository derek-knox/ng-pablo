import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'indexOf'
})
export class IndexOfPipe implements PipeTransform {

	transform(data: Array<any>, props: Array<string>, target: string): any {

		return data.filter((item) => {

			//one time lowercase
			target = target.toLowerCase();

			//property loop with match escape
			let match;
			let validItem;
			for (let prop of props) {
				validItem = item[prop];
				match = validItem ? validItem.toLowerCase().indexOf(target) > -1 : -1;
				if (match) { break; }
			}

			//return match
			return match;

		});

	}

}
