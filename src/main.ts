import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'localhost', // Remplace par l'hôte de ton serveur PostgreSQL
//       port: 5432, // Remplace par le port de ton serveur PostgreSQL
//       username: 'username', // Remplace par ton nom d'utilisateur PostgreSQL
//       password: 'password', // Remplace par ton mot de passe PostgreSQL
//       database: 'monProjet', // Remplace par le nom de ta base de données PostgreSQL
//       autoLoadEntities: true, // Cela chargera automatiquement les entités du répertoire "dist" (ou "src" en mode développement)
//       synchronize: true, // Cela synchronisera automatiquement les entités avec la base de données (pour les tests et le développement)
//     }),
//   ],
//   controllers:[],//mes controleus
//   providers:[], //services de mon app
// })
// export class AppModule { }