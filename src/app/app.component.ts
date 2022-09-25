import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipeUsage';
  word = "Normal P tags";
  word1 = "Hello";
  word2 = "I am";
  name = "Devrim Furkan Guner";

  wordmore20 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus et ut modi. Ipsum aut voluptas, rem ratione recusandae sequi, quasi officia autem, ut maiores quaerat quia odio quas mollitia. Nulla?
  Saepe, consequatur quibusdam vel temporibus consequuntur modi quas, quam accusantium rerum eligendi earum ducimus quaerat incidunt ad corrupti nihil eum autem impedit numquam culpa tenetur enim obcaecati voluptate sed? Numquam.
  Odio architecto soluta in similique unde, voluptatum nobis obcaecati fugiat exercitationem asperiores debitis laudantium quis officiis dolorem laborum? Perferendis deleniti nemo incidunt, recusandae natus eos explicabo blanditiis iusto praesentium molestiae.`
  wordless20 = "less than 20 word"
  word20 = "hello equal  to  20"
}
