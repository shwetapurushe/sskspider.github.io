import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private description:string = "";

  mouseEnter(div : string){

      if(div == 'reco')
        this.description = "I am fascinated by the origin and maintenance of biological diversity on" +
"our planet. To explore this, I study the pretty ancient lineage–spiders, in particular the" +
"orbicularians, using advanced phylogenomics technology combined with resultant morphology" +
"to reconstruct the tree of life and trace the evolution of its structures.Trust me, it is exciting!"

      else
        this.description= "Knowledge about biodiversity does not seep easily from research papers to" +
"general public in the age when biodiversity conservation is priority. To alleviate this knowledge" +
"gap, I use social networking platforms to document spiders, starting in India [example: Fb group-" +
"SpiderIndia (more than 7,000 members)], conduct meetings and bioblitz each year."

   }

   mouseLeave(div : string){
      console.log('mouse leave :' + div);
      this.description = "";

      console.log("Leaving " +this.description);
   }


  constructor() { }

  ngOnInit() {
  }

}
