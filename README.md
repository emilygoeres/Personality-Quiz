# Personality-Quiz
## Description
### Deployed link: https://personify-personality-quiz.herokuapp.com/
We've all been there. Sitting at home during covid, it's raining and no one can go out an play. Have no fear...PERSONIFY is here! We have a perfect, at home, family fun activity for you! Sign up, choose the quiz you want to take, and you will receive both a general result for the test AND a breakdown of your answer history on your profile!

## Table of Contents
1. [Description](#-Description)
1. [Installation](#Installation)
1. [Usage](#Usage)
1. [Contributing](#Contributing)
1. [Tests](#Tests)
1. [Authors](#Authors)
1. [Questions](#Questions)
1. [License](#License)

## Visuals 

![image](https://user-images.githubusercontent.com/69055538/97255448-dbe6c280-17cd-11eb-9b75-e8d8775f26be.png)

Explore

![image](https://user-images.githubusercontent.com/69055538/97255934-f79e9880-17ce-11eb-8147-b182458a1900.png)

Profile

![image](https://user-images.githubusercontent.com/69055538/97255978-1f8dfc00-17cf-11eb-9b81-e75851c9c6d6.png)

Quiz

![image](https://user-images.githubusercontent.com/69055538/97257140-48fc5700-17d2-11eb-98a8-65b8f385112d.png)

Quiz Creation



## Technologies 

[Bulma](https://bulma.io/)

[Node.js](https://nodejs.org/en/)

[Express](https://expressjs.com/)

[Express-handlebars](https://www.npmjs.com/package/express-handlebars)

[mysql](https://www.mysql.com/)

[bcrypt](https://www.npmjs.com/package/bcrypt)

## Installation
1. Clone this repository to your local machine. 
1. Ensure node.js is enabled in the directory to which you have saved this repository. 
1. Install all npm packages. Modify the config.json to work with your own sql.  
1. Add a SESSION_SECRET in a .env file.

## Usage
Anyone can use freely, according to the terms of the license.
    
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

## Tests

To add data to your local database: in the seeds file, change the personality_quiz table identifiers to the name of your local table. Then, those seed files will add 6 working tests to your local database. With those tests quizzes, please ensure any changes do not prevent normal user function.

## Authors 

[Ann Guinee](https://github.com/gnuartemis)

[Emily Goeres](https://github.com/emilygoeres)

[Jack Solaro](https://github.com/jacksolaro)

[Steven Bong](https://github.com/stevenbong96)

[Joshua Jainga](https://github.com/jjainga)

## Questions
Please direct questions to:
Github account emilygoeres


## License 

![GitHub](https://img.shields.io/github/license/emilygoeres/Personality-Quiz) 

MIT License

Copyright (c) 2020  Emily Goeres, Ann Guinee, Jack Solaro, Steven Bong, Joshua Jainga    

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.