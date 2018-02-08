import { Component, OnInit } from '@angular/core';
import * as publications from './publications.json';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],

})

export class PublicationsComponent implements OnInit {

    publications: any[] = [{
      "authors": "Christopher John Thorpe, Todd Lewis, Siddharth Kulkarni, Aparna Watve, David Pryce, Lewis Davies, Nikhil Gaitonde, David Bilton, Mairi Knight",
      "title":"Micro-habitat distribution drives patch quality for sub-tropical rocky plateau amphibians in the northern Western Ghats, India.",
      "journal":"PLOSONE",
      "date": "Inpress"
    },{
      "authors": "Christopher John Thorpe, Todd Lewis, Matthew Fisher, Claudia Wierzbicki, Siddharth Kulkarni, Lewis Davies, David Pryce, Aparna Watve, Mairi Knight",
      "title":"Climate structuring of Batrachochytrium dendrobatidis infection in the threatened amphibians of the northern Western Ghats, India. ",
      "journal":"Royal Society Open Science",
      "date": "2017"
    },
    {
      "authors": "Christopher John Thorpe, David Bilton, Siddharth Kulkarni, Jane Akerman, Aparna Watve, Mairi Knight",
      "title":"Biogeographic patterns in the distribution of aquatic Coleoptera on the rocky plateaus in Western Maharashtra, India",
      "journal":"Hydrobiologia",
      "date": "Inpress"
    },
    {
      "authors": "Siddharth Kulkarni, Sameer Padhye",
      "title":"Biodiversity checklists and associated problems",
      "journal":"Current Science",
      "date": "Inpress"
    },
    {
      "authors": "Siddharth Kulkarni, Atul Vartak, Vishwas Deshpande, Dheeraj Halali",
      "title":"The spiny theridiid genus Meotipa Simon, 1895 in India, with description of a strange new species with translucent abdomen and a phylogenetic analysis about the genus placement (Araneae, Theridiidae)",
      "journal":" Zootaxa 4291 (3): 504-520",
      "date": "2017"
    },
    {
      "authors": "Hemant Ghate, Siddharth Kulkarni, Vijay Anand Ismvael",
      "title": "Illustrated redescriptions of two large coreid bugs from Assam including the first Indian record of Schroederia feana (Distant, 1902) (Coreidae,Coreinae, Mictini).",
      "journal": "Entomon 42(2): 165-172",
      "date" :"2017"
    },
    {
      "authors": "Siddharth Kulkarni, Hemant Ghate",
      "title": "A new cavernicolous assassin bug of the genus Bagauda Bergroth (Reduviidae, Emesinae) from Western Ghats, India.",
      "journal": "Zootaxa. 4127(2): 365-275",
      "date" :"2016"
    },
    {
      "authors": "David Pryce, C. John Thorpe, Siddharth Kulkarni, Todd Lewis ",
      "title":"Amphiesma stolatum (striped keelback): Habitat and reproduction.",
      "journal": "The Herpetological Bulletin. 136: 37-38.",
      "date" :"2016"
    },
    {
      "authors":"Peter Jäger, Siddharth Kulkarni",
      "title":"An unexpected new species of the genus Pseudopoda (Araneae,Sparassidae, Heteropodinae) from the Western Ghats in India.",
      "journal": " ZooKeys 577: 55-62. doi: 10.3897/zookeys.577.7848",
      "date" :"2016"
    },
    {
      "authors":"Siddharth Kulkarni, Hemant Ghate",
      "title":"First record of the thread-legged assassin bugMyiophanes greeni Distant, 1903 (Heteroptera: Reduviidae: Emesinae) from India.",
      "journal": "Biodiversity Data Journal 4:e7949. doi: 10.3897/BDJ.4.e7949",
      "date" :"2016"
    },
    {
      "authors":"Sameer Padhye, Siddharth Kulkarni",
      "title":"Regulated animal dissections in Indian academia as a measure to control invasive species",
      "journal": "Current Science. 110 (2): 129-130.",
      "date" :"2016"
    },
    {
      "authors":"Siddharth Kulkarni, Rahul Khot",
      "title":"Neosataria, replacement name for Sataria Annandale, 1920 (Mollusca: Gastropoda: Bithyniidae), preoccupied by Sataria Roewer, 1915 (Arachnida: Opiliones: Sclerosomatidae).",
      "journal": "Zootaxa. 3974 (4): 599-600. DOI: 10.11646/zootaxa.3974.4.12",
      "date" :"2015"
    },
    {
      "authors":"Siddharth Kulkarni, Swara Yadav",
      "title":"Bridging the distributional gap of Tylorida striata (Thorell, 1877) and new synonymy (Araneae: Tetragnathidae)",
      "journal": "Biodiversity Data Journal; 3(3). DOI:10.3897/BDJ.3.e4878",
      "date" :"2015"
    },
    {
      "authors":"Siddharth Kulkarni, Todd Lewis ",
      "title":"Description of male Tylorida sataraensis Kulkarni, 2014 (Araneae, Tetragnathidae) with notes on habits and conservation status",
      "journal":"Biodiversity Data Journal; 3(3). DOI:10.3897/BDJ.3.e4451",
      "date" :"2015"
    },
    {
      "authors":"Siddharth Kulkarni, S. Joseph",
      "title":"First record of genus Siler Simon, 1889 (Araneae: Salticidae)from India.",
      "journal":"Journal of Threatened Taxa 7(10): 7701–7703. DOI: 10.11609/JoTT.o4150.7701-3",
      "date" :"2015"
    },
    {
      "authors":"Siddharth Kulkarni",
      "title":"Comments on “A new species of genus Thomisus Walckenaer, 1805(Araneae: Thomisidae) from Telangana, India and a detailed description of Thomisus projectus Tikader,1960” by Pravalikha & Srinivasulu, 2015",
      "journal": "Journal of Threatened Taxa 7(9): 7605–7606; DOI:10.11609/JoTT.o4363.7605-6",
      "date" :"2015"
    }]

  constructor() {

  }



  ngOnInit() {
  }

}
