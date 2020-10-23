-- USE personality_quiz;

--Insert User --
INSERT INTO personality_quiz.users(user_name, first_name, last_name, password, email, archetype_1, archetype_2, archetype_3, archetype_4, archetype_5, archetype_6, archetype_7, archetype_8, archetype_9, archetype_10, archetype_11, archetype_12, createdAt, updatedAt) 
VALUES ("SrLucky", "Joshua", "Jainga","password", "jjainga@gmail.com",0,0,0,0,0,0,0,0,0,0,0,0, now(), now());
-- Insert quiz --
INSERT INTO personality_quiz.quizzes(quiz_name, quiz_category, image_tile,createdAt, updatedAt,userId) 
VALUES ("Friend's Quiz", "tv show", "https://images.app.goo.gl/Bm1btRA8eKASoRCa6", now(),now(),1);
-- Questions
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which Friends chracter is your favorite?",now(), now(),4);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("What is your favorite episode?",now(), now(),4);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("What is Joey's favorite thing to eat?",now(), now(),4);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Who is your favorite couple",now(), now(),4);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("What is the funniest parts of the show?",now(), now(),4);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)


INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Monica","You are confident, passionate, and wrestle WAY above your weight class. Your character type is Monica!",now(),now(),9);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Ross", "You are calm, confident, and ready to smack some sense into anyone who needs a reality check. Your character type is Ross!",now(),now(),2);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Phoebe","You are quirky, energetic, and always ready for a good shiding! Your character type is Chandler!",now(),now(),3);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Joey","You are serious, intent, and laser focused on your goals. Your character type is Joey!",now(),now(),7);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Joey",1,now(),now(),23,9);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Rachel",1,now(),now(),23,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Phoebe",1,now(),now(),23,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Ross",1,now(),now(),23,7);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("When Ross and Rachel have a baby",1,now(),now(),24,7);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("When the gang goes to the beach",1,now(),now(),24,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("When Joey and Chandler get baby chicks",1,now(),now(),24,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("When Chandler and Monica get married",1,now(),now(),24,9);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Sandwhiches",1,now(),now(),25,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Leftovers",1,now(),now(),25,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Lasagna",1,now(),now(),25,7);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Pancakes",1,now(),now(),25,9);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Ross and Rachel",1,now(),now(),26,9);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Chandler and Monica",1,now(),now(),26,7);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Mike and Phoebe",1,now(),now(),26,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Joey and Charlie",1,now(),now(),26,2);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("When Ross trys to put his leather pants back on",1,now(),now(),27,7);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("When Ross gets a spray tan",1,now(),now(),27,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("When Monica gets bit by a jelly fish",1,now(),now(),27,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("When Rachel makes a Dessert Trifle for Thanksgiving Dinner",1,now(),now(),27,9);
