-- USE personality_quiz;
--Create archetypes:
INSERT INTO personality_quiz.archetypes(archetype, archetype_description,createdAt,updatedAt) 
VALUES ("Warrior","The warrior appreciates the fight--whether or not they actually enjoy conflict and competition, they create strife wherever they go. Most of the time, it's for a good cause, but the less empathetic can be terrifying to innocent passerby. Their strengths are courage and drive, their weaknesses are overconfidence and pride.",now(),now());
INSERT INTO personality_quiz.archetypes(archetype, archetype_description,createdAt,updatedAt) 
VALUES ("Child","Children grow up, one way or another. Their lack of understanding of the world is both a blessing and a curse: they ask 'Why?' of everything. Sometimes, the world is better for them asking those questions, sometimes, them not knowing the answers is their own downfall. Their strengths are optimism and curiosity, their weaknesses are ignorance and naivete.",now(),now());
INSERT INTO personality_quiz.archetypes(archetype, archetype_description,createdAt,updatedAt) 
VALUES ("Orphan","The orphan is removed from their heritage, both in terms of familial ties and native culture, but stands to make a new start in a different setting. Whether they can make a new home with that new start is the question. Their strengths are instinct and perseverance, their weakness are insecurity and fear.",now(),now());
INSERT INTO personality_quiz.archetypes(archetype, archetype_description,createdAt,updatedAt) 
VALUES ("Creator","The creator needs to make something. Art, a company, an organization--whatever their drive is aimed at, they're desperate to turn it into reality.  Though their goals are worthy,when they're blocked from success, some might make unwise sacrifices to move forward. Their strengths are drive and creativity, their weakness are singlemindedness and egotism.",now(),now());
INSERT INTO personality_quiz.archetypes(archetype, archetype_description,createdAt,updatedAt) 
VALUES ("Caregiver","The caregiver takes care of those around them. In their presence, others are healed, nurtured, and protected. While their actions are always noble, the less well-off might be motivated by a desire to be accepted, and the downright unscrupulous might be motivated by a desire to be in control.  Their strengths are kindness and generosity, their weakness is their depence on others to support them in return.",now(),now());
INSERT INTO personality_quiz.archetypes(archetype, archetype_description,createdAt,updatedAt) 
VALUES ("Mentor","Mentors teach, guide, and nurture. They want to make those around them more capable, so that they can be helped in return.  However, not all mentors are equally trustworthy, and even the well meaning but incompent can have terrible effects on their communities. Their strengths are their ability to nurture and cultivate, their weaknesses are their dependence on others support them in return.",now(),now());
INSERT INTO personality_quiz.archetypes(archetype, archetype_description,createdAt,updatedAt) 
VALUES ("Joker","The joker is relaxed and unconcerned about life. They want to enjoy what they have in the here and now, and they appreciate the good parts of their lives without needing to search for more. Rest, relaxation, and entertainment are key parts of recovering from stress, but if taken too far imminent problems can be ignored in their desire for stability. Their strengths are their ability to keep steady during and recover from trauma, and their weaknesses are slothfulness and tendency towards denial.",now(),now());
INSERT INTO personality_quiz.archetypes(archetype, archetype_description,createdAt,updatedAt) 
VALUES ("Magician","Magicians do their best to make miracles. They inspire, command, and create effortlessly, amazing others with their accomplishments.  However, if their magic--an unbroken streak of excellent business decisions, a genius with computers, a famous moment of heroism--runs out, they are left floundering without recourse. Their strengths are their ability to inspire and create a following, their weaknesses are their need to continually impress and a tendency to be overy risk-taking or risk-adverse.",now(),now());
INSERT INTO personality_quiz.archetypes(archetype, archetype_description,createdAt,updatedAt) 
VALUES ("Ruler","The ruler takes command, creates relationships, and organizes swaths of people at a time. They want to be in control, because they don't trust anyone to do it better--or possibly, because they don't want anyone to be able to tell them 'no'. Their strengths are leadership and charisma, their weaknesses are need for control and proximity towards temptation.",now(),now());
INSERT INTO personality_quiz.archetypes(archetype, archetype_description,createdAt,updatedAt) 
VALUES ("Rebel","Rebels fight back. When someone tries to tell them what to do, they gear up for battle. In order to fight back, however, they need to find someone to be their authority-figure opponent; in the best of cases, they seek out injustice and do their best to correct it, in the worst of cases, they refuse to do their duty to the community simply because it is an imposition. Their strengths are resourcefulness and prseverance, their weaknesses are their difficulties collaborating and compromising.",now(),now());
INSERT INTO personality_quiz.archetypes(archetype, archetype_description,createdAt,updatedAt) 
VALUES ("Romantic","The romantic prioritizes love and romantic relationships above all else. While their love makes them interesting people and of great service to the object of their attentions, they can become callous to other concerns in their obsession.  Their strengths are passion and loyalty, their weaknesses are willingness to sacrifice other concerns and an over-investment in a love not guaranteed to be returned.",now(),now());



--Insert User --
INSERT INTO personality_quiz.users(user_name, first_name, last_name, password, email, archetype_1, archetype_2, archetype_3, archetype_4, archetype_5, archetype_6, archetype_7, archetype_8, archetype_9, archetype_10, archetype_11, archetype_12, createdAt, updatedAt) 
VALUES ("SrLucky", "Joshua", "Jainga","password", "jjainga@gmail.com",0,0,0,0,0,0,0,0,0,0,0,0, now(), now());
-- Insert quiz --
INSERT INTO personality_quiz.quizzes(quiz_name, quiz_category, image_tile,createdAt, updatedAt,userId) 
VALUES ("Pokemon Quiz", "tv show", "https://o.aolcdn.com/images/dims?thumbnail=640%2C&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2Ft_lP6tcQ0CJbJTeV8mrV2g--%7EB%2FaD00OTA7dz05ODA7YXBwaWQ9eXRhY2h5b24-%2Fhttps%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F6623d5a6ae583f81ee3515b6b3615c7f%2F204855766%2Flandscape-1456483171-pokemon2.jpg&client=amp-blogside-v2&signature=9caaede705caa7d6cdaee28196bfefe03c5b1d3b", now(),now(),1);
-- Questions
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which pokemon is your favorite?",now(), now(),1);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which trainer is your favorite?",now(), now(),1);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES( "Which type is your favorite?",now(), now(),1);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which gym is your favorite?",now(), now(),1);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("What do you think of the games Pokemon Sword and Shield?",now(), now(),1);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("What do you think of the games Pokemon Red and Blue?",now(), now(),1);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("What do you think of Pikachu?",now(), now(),1);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("What do you think of Charizard?",now(), now(),1);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which do you prefer: anime, manga, or game?",now(), now(),1);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("You caught a shiny pokemon! What next?",now(), now(),1);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("You beat the game! What now?P",now(), now(),1);


INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Pikachu","You are confident, passionate, and wrestle WAY above your weight class. Your pokemon is Pikachu!",now(),now(),1);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Bulbasaur", "You are calm, confident, and ready to smack some sense into anyone who needs a reality check. Your pokemon is Bulbasaur!",now(),now(),5);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Squirtle","You are quirky, energetic, and always ready for a good shiding! Your pokemon is Squirtle!",now(),now(),7);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Charmander","You are serious, intent, and laser focused on your goals. Your pokemon is Charmander!",now(),now(),10);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Pidgey",1,now(),now(),1,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Spearow",1,now(),now(),1,1);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES( "Caterpie",1,now(),now(),1,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Weedle",1,now(),now(),1,4);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Ash",1,now(),now(),2,1);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Misty",1,now(),now(),2,4);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES( "Brock",1,now(),now(),2,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Gary",1,now(),now(),2,3);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Psychic",1,now(),now(),3,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Ghost",1,now(),now(),3,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES( "Dark",1,now(),now(),3,4);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Dragon",1,now(),now(),3,1);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Pewter",1,now(),now(),4,1);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Cerulean",1,now(),now(),4,4);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES( "Cinnabar",1,now(),now(),4,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Viridian",1,now(),now(),4,2);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("I played it, it was a lot of fun!",1,now(),now(),5,1);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Oh, there's a new game out already?",1,now(),now(),5,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("It was funny watching people fight about it on twitter :)",1,now(),now(),5,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("DEXIT DEXIT DEXIT",1,now(),now(),5,4);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("I like the newer ones better.",1,now(),now(),6,1);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Those are the only ones I have played!",1,now(),now(),6,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Lol missingno lol",1,now(),now(),6,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Everything that came later was a pale imitation. Final.",1,now(),now(),6,4);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Pikachu is cute and friendly! What's NOT to like?",1,now(),now(),7,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Uh, it's a little overexposed...",1,now(),now(),7,1);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Please. Show me another pokemon. ANY other pokemon.",1,now(),now(),7,4);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Mimikyu for the win!",1,now(),now(),7,3);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Charizard is tough! It's great!",1,now(),now(),8,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Uh, it's a little overexposed...",1,now(),now(),8,1);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("But what about bulbasaur?",1,now(),now(),8,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Why isn't it dragon-type?",1,now(),now(),8,4);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("The games are the crux of the franchise!",1,now(),now(),9,4);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("I watched the anime as a child or with my current children, it's pretty fun.",1,now(),now(),9,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Manga has the best plot and worldbuilding, even if it's a little niche.",1,now(),now(),9,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("I'm just happy there's so much pokemon content out there!",1,now(),now(),9,1);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("I'm going to keep it and show it off!",1,now(),now(),10,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("I'm going to trade it for a PVP optimized pokemon!",1,now(),now(),10,4);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Why does anyone care about shinies anyway?",1,now(),now(),10,1);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("What is a shiny?",1,now(),now(),10,3);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Time to complete the pokedex!",1,now(),now(),11,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("What's the post-game story like?",1,now(),now(),11,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Competitive battles, here I come!",1,now(),now(),11,4);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("I'm going to play a different game, now that I've beaten this one.",1,now(),now(),11,1);