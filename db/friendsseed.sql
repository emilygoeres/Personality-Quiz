-- USE personality_quiz;

-- =====================================================================================
-- QUIZ #5 Friends QUIZ
-- Questions: 5
-- =====================================================================================

-- Insert quiz --
INSERT INTO personality_quiz.quizzes(quiz_name, quiz_category, image_tile,createdAt, updatedAt,userId) 
VALUES ("Friend's Quiz", "tv show", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fd%2Fd6%2FFriends_season_one_cast.jpg%2F220px-Friends_season_one_cast.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFriends&tbnid=aGSCW8GzbYlHBM&vet=12ahUKEwicrNr77NLsAhV7ADQIHS7jCqMQMygCegUIARDVAQ..i&docid=YT3QvFCdUrCyrM&w=220&h=184&q=friends&ved=2ahUKEwicrNr77NLsAhV7ADQIHS7jCqMQMygCegUIARDVAQ", now(),now(),1);
-- Questions
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which Friends chracter is your favorite?",now(), now(),4);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("What is your favorite episode?",now(), now(),4);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("What is Joey's favorite thing to eat?",now(), now(),4);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which couple is your favorite?",now(), now(),4);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("What is the funniest parts of the show?",now(), now(),4);


INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Monica","You are a type A, always the host and everything in life needs to have a list. Your character type is Monica!",now(),now(),9);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Ross", "You are introverted, intelligent and is always seeking to be loved and to love. Your character type is Ross!",now(),now(),2);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Phoebe","You are quirky, energetic and noone will ever know your next thought! Your character type is Chandler!",now(),now(),3);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Joey","You are relaxed, womanizer and in life you tend to roll with the punches. Your character type is Joey!",now(),now(),7);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Joey",1,now(),now(),23,17);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Rachel",1,now(),now(),23,18);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Phoebe",1,now(),now(),23,19);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Ross",1,now(),now(),23,20);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("When Ross and Rachel have a baby",1,now(),now(),24,20);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("When the gang goes to the beach",1,now(),now(),24,19);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("When Joey and Chandler get baby chicks",1,now(),now(),24,18);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("When Chandler and Monica get married",1,now(),now(),24,17);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Sandwiches",1,now(),now(),25,18);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Leftovers",1,now(),now(),25,17);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Lasagna",1,now(),now(),25,20);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Pancakes",1,now(),now(),25,19);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Ross and Rachel",1,now(),now(),26,19);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Chandler and Monica",1,now(),now(),26,20);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Mike and Phoebe",1,now(),now(),26,17);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Joey and Charlie",1,now(),now(),26,18);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("When Ross trys to put his leather pants back on",1,now(),now(),27,17);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("When Ross gets a spray tan",1,now(),now(),27,18);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("When Monica gets bit by a jelly fish",1,now(),now(),27,20);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("When Rachel makes a Dessert Trifle for Thanksgiving Dinner",1,now(),now(),27,19);
