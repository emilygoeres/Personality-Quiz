-- USE personality_quiz;


INSERT INTO personality_quiz.users(user_name, first_name, last_name, password, email, archetype_1, archetype_2, archetype_3, archetype_4, archetype_5, archetype_6, archetype_7, archetype_8, archetype_9, archetype_10, archetype_11, archetype_12, createdAt, updatedAt) 
VALUES ("Mr Mime", "Art", "G","password", "art@gmail.com",0,0,0,0,0,0,0,0,0,0,0,0, now(), now());
-- Insert quiz --
INSERT INTO personality_quiz.quizzes(quiz_name, quiz_category, image_tile,createdAt, updatedAt,userId) 
VALUES ("Bread Quiz", "food", "https://images.app.goo.gl/Bm1btRA8eKASoRCa6", now(),now(),1);
-- Questions
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which bread is your favorite?",now(), now(),2);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which is your favorite sandwhich?",now(), now(),2);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which sandwhich condiment is your favorite?",now(), now(),2);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which sandwhich topping is your favorite?",now(), now(),2);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("What is your favorite sandwhich place",now(), now(),2);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Where is your favorite place to eat a sandwhich?",now(), now(),2);


INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Twisted Pretzel","You are confident, passionate, and wrestle WAY above your weight class. Your bread type is Twisted Pretzel!",now(),now(),7);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Corn Bread", "You are calm, confident, and ready to smack some sense into anyone who needs a reality check. Your bread type is Corn Bread!",now(),now(),6);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Bagel","You are quirky, energetic, and always ready for a good shiding! Your bread type is Bagel!",now(),now(),10);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Banana Bread","You are serious, intent, and laser focused on your goals. Your bread type is Banana Bread!",now(),now(),11);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Breadsticks",1,now(),now(),12,7);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Craissant",1,now(),now(),12,6);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES( "Whole Grain Bread",1,now(),now(),12,8);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("White Bread",1,now(),now(),12,5);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Meatball Sandwhich",1,now(),now(),13,8);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Peanut Butter and Jelly",1,now(),now(),13,5);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Ham and Cheese",1,now(),now(),13,7);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Grilled Cheese",1,now(),now(),13,6);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Honey Mustard",1,now(),now(),14,6);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Mayonaise",1,now(),now(),14,7);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Horseradish",1,now(),now(),14,5);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Barbeque Sauce",1,now(),now(),14,8);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Pickle",1,now(),now(),15,5);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Bacon",1,now(),now(),15,8);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Cheese",1,now(),now(),15,6);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Lettucen",1,now(),now(),15,7);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Tat's Delicatessen",1,now(),now(),16,5);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Capriotti's Sandwich Shop",1,now(),now(),16,7);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Homegrown",1,now(),now(),16,8);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Paseo's",1,now(),now(),16,6);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("In Bed",1,now(),now(),17,6);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("At the Beach",1,now(),now(),17,7);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("At the Zoo",1,now(),now(),17,8);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("In a Cave",1,now(),now(),17,5);
