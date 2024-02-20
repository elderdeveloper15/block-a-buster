import { Component,ChangeDetectorRef, inject, OnInit } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  isButtonDisabled: boolean = false;
  showButton: boolean = true;
  isCounterActive: boolean = false;
  counter: number = 10;
  timerSubscription!: Subscription;
  audio = new Audio('assets/efecto-de-sonido-soundfx (1).mp3');
  audio2 = new Audio('assets/tas-bien-pendejo-bien-pendejo-origen.mp3')
  textos: string[] = [
    'Películas que empiecen con A',
    'Películas con Arnold Schwarzenegger',
    'Películas que ganaron el Oscar a Mejor Película',
    'Películas dirigidas por Steven Spielberg',
    'Películas que se desarrollan en el espacio',
    'Películas que tienen un número en el título',
    'Películas que terminan con Z',
    'Películas con Tom Hanks',
    'Películas que se basan en libros',
    'Películas que se desarrollan en el futuro',
    'Películas que tienen una secuela',
    'Películas con Julia Roberts',
    'Películas que se desarrollan en Nueva York',
    'Películas que se estrenaron en 2000',
    'Películas que ganaron el Oscar a Mejor Director',
    'Películas con Leonardo DiCaprio',
    'Películas que se desarrollan en el pasado',
    'Películas que tienen un animal en el título',
    'Películas que terminan con una boda',
    'Películas con Meryl Streep',
    'Películas que se desarrollan en una isla',
    'Películas que se estrenaron en 1990',
    'Películas que ganaron el Oscar a Mejor Actor',
    'Películas con Brad Pitt',
    'Películas que se desarrollan en una escuela',
    'Películas que tienen un color en el título',
    'Películas que terminan con una batalla',
    'Películas con Sandra Bullock',
    'Películas que se desarrollan en un barco',
    'Películas que se estrenaron en 1980',
    'Películas que ganaron el Oscar a Mejor Actriz',
    'Películas con Johnny Depp',
    'Películas que se desarrollan en un hospital',
    'Películas que tienen un nombre en el título',
    'Películas que terminan con un beso',
    'Películas con Nicole Kidman',
    'Películas que se desarrollan en un avión',
    'Películas que se estrenaron en 1970',
    'Películas que ganaron el Oscar a Mejor Guión',
    'Películas con Robert De Niro',
    'Películas que se desarrollan en un hotel',
    'Películas que tienen una ciudad en el título',
    'Películas que terminan con una muerte',
    'Películas con Kate Winslet',
    'Películas que se desarrollan en un tren',
    'Películas que se estrenaron en 1960',
    'Películas que ganaron el Oscar a Mejor Banda Sonora',
    'Películas con Morgan Freeman',
    'Películas que se desarrollan en un desierto',
    'Películas que tienen un país en el título',
    'Películas que terminan con un nacimiento'
  ];
  actoresFamosos: string[] = [
    'Robert De Niro',
    'Al Pacino',
    'Marlon Brando',
    'Jack Nicholson',
    'Daniel Day-Lewis',
    'Dustin Hoffman',
    'Tom Hanks',
    'Anthony Hopkins',
    'Paul Newman',
    'Denzel Washington',
    'Spencer Tracy',
    'Laurence Olivier',
    'Jeff Bridges',
    'James Stewart',
    'Sean Penn',
    'Morgan Freeman',
    'Michael Caine',
    'Clint Eastwood',
    'Brad Pitt',
    'Johnny Depp',
    'Leonardo DiCaprio',
    'Russell Crowe',
    'Humphrey Bogart',
    'Gregory Peck',
    'Robin Williams',
    'Ben Kingsley',
    'Ian McKellen',
    'Sidney Poitier',
    'Gary Oldman',
    'Charles Chaplin',
    'Will Smith',
    'Harrison Ford',
    'Sean Connery',
    'Christian Bale',
    'Bruce Willis',
    'Edward Norton',
    'Liam Neeson',
    'Steve McQueen',
    'Samuel L. Jackson',
    'George Clooney',
    'Matt Damon',
    'Gene Hackman',
    'Robert Downey Jr.',
    'Kevin Spacey',
    'Philip Seymour Hoffman',
    'Ralph Fiennes',
    'Tom Cruise',
    'Heath Ledger',
    'Michael Douglas',
    'Henry Fonda',
    'Cary Grant',
    'Clark Gable',
    'Christopher Walken',
    'Joe Pesci',
    'Robert Redford',
    'John Wayne',
    'Peter O\'Toole',
    'Bill Murray',
    'Arnold Schwarzenegger',
    'Sylvester Stallone',
    'John Travolta',
    'Geoffrey Rush',
    'Mel Gibson',
    'Ethan Hawke',
    'Alec Guinness',
    'Charlton Heston',
    'Richard Burton',
    'Kirk Douglas',
    'James Dean',
    'Orson Welles',
    'Burt Lancaster',
    'Tony Curtis',
    'Errol Flynn',
    'Buster Keaton',
    'Bela Lugosi',
    'Boris Karloff',
    'Lon Chaney',
    'Vincent Price',
    'Christopher Lee',
    'Peter Cushing',
    'Donald Pleasence',
    'Jamie Lee Curtis',
    'Sigourney Weaver',
    'Linda Blair',
    'Anthony Perkins',
    'Max von Sydow',
    'Tobin Bell',
    'Robert Englund',
    'Bruce Campbell',
    'Jeffrey Combs',
    'Tony Todd',
    'Brad Dourif',
    'Warwick Davis',
    'Doug Bradley',
    'Danielle Harris',
    'Neve Campbell',
    'Courteney Cox',
    'David Arquette',
    'Sarah Michelle Gellar',
    'Jennifer Love Hewitt',
    'Freddie Prinze Jr.',
    'Matthew Lillard',
    'Skeet Ulrich'
  ];
  directoresFamosos: string[] = [
    'Steven Spielberg',
    'Martin Scorsese',
    'Alfred Hitchcock',
    'Stanley Kubrick',
    'Quentin Tarantino',
    'Orson Welles',
    'Francis Ford Coppola',
    'Ridley Scott',
    'Akira Kurosawa',
    'Joel Coen',
    'Ethan Coen',
    'David Fincher',
    'Christopher Nolan',
    'George Lucas',
    'Clint Eastwood',
    'Billy Wilder',
    'Ingmar Bergman',
    'Federico Fellini',
    'Woody Allen',
    'Peter Jackson',
    'James Cameron',
    'John Ford',
    'Sergio Leone',
    'Sidney Lumet',
    'Roman Polanski',
    'David Lynch',
    'Wes Anderson',
    'Tim Burton',
    'Brian De Palma',
    'Danny Boyle',
    'Robert Zemeckis',
    'Sam Mendes',
    'Michael Mann',
    'Darren Aronofsky',
    'Mel Gibson',
    'John Huston',
    'Alejandro González Iñárritu',
    'Yasujirō Ozu',
    'Jean-Luc Godard',
    'Andrei Tarkovsky',
    'Werner Herzog',
    'Terrence Malick',
    'David Lean',
    'Satyajit Ray',
    'John Cassavetes',
    'Spike Lee',
    'Charlie Chaplin',
    'Luis Buñuel',
    'Robert Altman',
    'Howard Hawks',
    'Oliver Stone',
    'Terry Gilliam',
    'Sam Peckinpah',
    'John Carpenter',
    'Spike Jonze',
    'Wim Wenders',
    'Wong Kar-wai',
    'François Truffaut',
    'Lars von Trier',
    'Paul Thomas Anderson',
    'Hayao Miyazaki',
    'Pedro Almodóvar',
    'Guillermo del Toro',
    'Ang Lee',
    'David Cronenberg',
    'Jim Jarmusch',
    'Richard Linklater',
    'Michael Haneke',
    'Bong Joon-ho',
    'Park Chan-wook',
    'Wes Craven',
    'George A. Romero',
    'John Woo',
    'Chapman To',
    'Walter Hill',
    'Tobe Hooper',
    'Dario Argento',
    'Lucio Fulci',
    'Mario Bava',
    'Roger Corman',
    'William Castle',
    'Herschell Gordon Lewis',
    'George Miller',
    'John Landis',
    'Joe Dante',
    'Stuart Gordon',
    'Don Coscarelli',
    'Sam Raimi',
    'Takashi Miike',
    'Eli Roth',
    'Rob Zombie',
    'James Wan',
    'Leigh Whannell',
    'Adam Wingard',
    'Ti West',
    'Ari Aster',
    'Jordan Peele',
    'Robert Eggers',
    'Mike Flanagan',
    'Jennifer Kent',
    'Ana Lily Amirpour'
  ];
  
  varianteuno : string = 'Peliculas con '
  variantedos : string = 'Peliculas dirigidas por '
  
  textoSeleccionado: string = '';


  constructor(private changeDetector: ChangeDetectorRef) {

  }

  

  ngOnInit() {
    
  }

  onButtonClick() {
    this.seleccionarTextoAleatorio();
    this.resetTimer();
    this.isButtonDisabled = true;
    this.showButton = false;
    this.isCounterActive = true;
    this.changeDetector.detectChanges();
  }

  seleccionarTextoAleatorio() {
    let number = Math.floor(Math.random()*3) +1;
    if (number == 1){
      const indiceAleatorio = Math.floor(Math.random() * this.textos.length);
      this.textoSeleccionado = this.textos[indiceAleatorio];
    }
    else if (number == 2){
      let indiceAleatorio = Math.floor(Math.random() * this.directoresFamosos.length);
      let directorAleatorio = this.directoresFamosos[indiceAleatorio];
      this.textoSeleccionado = this.variantedos + directorAleatorio;
    }
    else {
      let indiceAleatorio = Math.floor(Math.random() * this.actoresFamosos.length);
      let directorAleatorio = this.actoresFamosos[indiceAleatorio];
      this.textoSeleccionado = this.varianteuno + directorAleatorio;
    }
  }
  

  startTimer() {
    const timer$ = timer(0, 1000);
    this.timerSubscription = timer$.subscribe((_) => {
      if (this.counter > 0) {
        this.counter--;
      } else {
        this.isCounterActive = false;
        this.timerSubscription.unsubscribe();
        this.isButtonDisabled = false;
        this.showButton = true;
        this.audio2.play();
        this.changeDetector.detectChanges();
      }
    });
  }

  resetTimer() {
    this.counter = 10;
    this.audio.play();
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.startTimer();
  }
  
}
