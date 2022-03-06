import { Movies } from "./movıes";

export class MovieRepository{
    private movies:Movies[];
   
    constructor(){        
        this.movies = [
        { id: 1, publishedDate: new Date('2016.05.06') , name:"Captain America: Ciwil War",description:"Marvel’in 'Kaptan Amerika: Kahramanların Savaşı' filminde Steve Rogers’ı, insanlığı koruma yolunda görevlerine devam eden Yenilmez’lerin yenilenmiş ekibinin lideri şeklinde görüyoruz.",imageUrl:"captainAmericaCiwilWar.jpg", isPopular: true},
        { id: 2, publishedDate: new Date('2021,12,24') , name:"Don't Look Up",description:"Astronomi mezunu bir öğrenci olan Kate Dibiasky (Jennifer Lawrence) ve onun profesörü Dr. Randall Mindy (Leonardo DiCaprio), güneş sistemi içinde yörüngede dönen bir kuyruklu yıldızı şaşırtıcı bir şekilde keşfeder. ",imageUrl:"dontLookUp.jpg", isPopular: false},
        { id: 3, publishedDate: new Date('2021,12,15') , name:"Spider-Man: No Way Home",description:"Spider-Man: No Way Home, kimliği açığa çıkan Örümcek-Adam'ın, bu konuda Doctor Strange'den yardım istemesiyle gelişen çetrefilli olayları konu ediniyor.",imageUrl:"spiderman.jpg", isPopular: true},
        { id: 4, publishedDate: new Date('2014,11,04') , name:"Captain Americe: Winter Soldier",description:"Kaptan Amerika’yı, Yenilmezler ile beraber New York’ta yaşanan dehşet veren olayların ardından Washington D.C.’de mutluluk içinde yaşarken ve çağdaş dünyaya ahenk sağlamaya çalışırken buluyoruz.",imageUrl:"captainAmericaWinterSoldier.jpg", isPopular: false},
        { id: 5, publishedDate: new Date('2022.01.29') , name:"Tom and Jerry: Cowboy Up! (2022)",description:"Ezeli rakip olan Tom ve Jerry, Vahşi Batı'daki kovboy bir kıza ve onun erkek kardeşine yardım ederek, çiftliklerini kötü bir adamın elinden kurtarmaya çalışır.",imageUrl:"tomAndJerry.jpg", isPopular: true}
        ]
    };

    getAllMovies(){
        return this.movies;
    }

    getPopularMovies(){
        return this.movies.filter(i=>i.isPopular);
    }

    getMovieById(id:number){
        return this.movies.find(i=>i.id == id);
    }
}