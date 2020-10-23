-- USE personality_quiz;

--Insert User --
INSERT INTO personality_quiz.users(user_name, first_name, last_name, password, email, archetype_1, archetype_2, archetype_3, archetype_4, archetype_5, archetype_6, archetype_7, archetype_8, archetype_9, archetype_10, archetype_11, archetype_12, createdAt, updatedAt) 
VALUES ("SrLucky", "Joshua", "Jainga","password", "jjainga@gmail.com",0,0,0,0,0,0,0,0,0,0,0,0, now(), now());
-- Insert quiz --
INSERT INTO personality_quiz.quizzes(quiz_name, quiz_category, image_tile,createdAt, updatedAt,userId) 
VALUES ("Cheese Quiz", "food", "https://images.app.goo.gl/Bm1btRA8eKASoRCa6", now(),now(),1);
-- Questions
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which cheese is your favorite?",now(), now(),3);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("What is your favorite cheese shop?",now(), now(),3);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("What is your favorite cheese meal",now(), now(),3);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Who is your favorite cheese producer",now(), now(),3);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Where is your favorite place to eat cheese?",now(), now(),3);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)


INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Blue Cheese","You are confident, passionate, and wrestle WAY above your weight class. Your cheese type is Blue Cheese!",now(),now(),3);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Cheddar Cheese", "You are calm, confident, and ready to smack some sense into anyone who needs a reality check. Your cheese type is Cheddar Cheese!",now(),now(),2);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Swiss Cheese","You are quirky, energetic, and always ready for a good shiding! Your cheese type is Swiss Cheese!",now(),now(),4);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Cottage Cheese","You are serious, intent, and laser focused on your goals. Your cheese type is Cottage Cheese!",now(),now(),9);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Ghost Pepper Cheese",1,now(),now(),18,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("String Cheese",1,now(),now(),18,9);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Easy Cheese",1,now(),now(),18,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Goat Cheese",1,now(),now(),18,4);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Beechers",1,now(),now(),19,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Crimson Cove",1,now(),now(),19,4);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Willapa Hills Cheese",1,now(),now(),19,9);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Ferdinand's",1,now(),now(),19,2);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Macaroni and Cheese",1,now(),now(),20,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Grilled Cheese",1,now(),now(),20,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Mozarella Sticks",1,now(),now(),20,4);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Cheddar Stuffed Pork Chops",,now(),now(),20,9);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Tillamook",1,now(),now(),21,9);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Washington State University",21,now(),now(),21,4);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Hilmar Cheese Company",1,now(),now(),21,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Beechers Handmade Cheese",1,now(),now(),21,2);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("At a Football Game",1,now(),now(),22,9);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("In a Hot Air Balloon",1,now(),now(),22,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("In a Pool",1,now(),now(),22,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("While ridinga bike",1,now(),now(),22,4);

