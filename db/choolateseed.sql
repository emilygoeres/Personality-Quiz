-- USE personality_quiz;
-- =====================================================================================
-- QUIZ #4 Chocolate QUIZ
-- Questions: 6
-- =====================================================================================


-- INSERT INTO personality_quiz.users(user_name, first_name, last_name, password, email, archetype_1, archetype_2, archetype_3, archetype_4, archetype_5, archetype_6, archetype_7, archetype_8, archetype_9, archetype_10, archetype_11, archetype_12, createdAt, updatedAt) 
-- VALUES ("Mr Mime", "Art", "G","password", "art@gmail.com",0,0,0,0,0,0,0,0,0,0,0,0, now(), now());
-- Insert Quiz
INSERT INTO personality_quiz.quizzes(quiz_name, quiz_category, image_tile,createdAt, updatedAt,userId) 
VALUES ("Chocolate Quiz", "food", "https://blog.youthdiscount.com/wp-content/uploads/2019/07/shutterstock_87050390.jpg", now(),now(),1);
-- Questions
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which flavor of chocolate is your favorite?",now(), now(),6);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which color of M&M is your favorite?",now(), now(),6);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which chocolate bar is your favorite?",now(), now(),6);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("What's your favorite nutty chocolate?",now(), now(),6);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which chocoloate factory do you want to go to?",now(), now(),6);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("What is your favorite choclate to recieve on Valentine's Day?",now(), now(),6);

INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Reeses Peanut Butter Cup","You are energetic, inclusive and everyone wants to be your friend! Your character type is Harry Potter!",now(),now(),4);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Crunch Bar", "You are traditional, mysterious and you're old school with a hard exterior but noone ever questions your love and loyalty. Your character type is Ron Weasley!",now(),now(),2);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Butterfinger","You are different, adventurous and no one has ever been able to pin you down and fully understand you. Your character type is Draco Malfoy!",now(),now(),10);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Twix Bar","You are helpful, welcoming and you're always the one people go to if they need advice/help. Your character type is Hermione Granger!",now(),now(),3);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Dark Chocolate",1,now(),now(),34,13);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Milk Chocolate",1,now(),now(),34,14);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Semi Sweet Chocolate",1,now(),now(),34,15);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("White Chocolate",1,now(),now(),34,16);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("White",1,now(),now(),35,16);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Blue",1,now(),now(),35,15);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Red",1,now(),now(),35,14);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Green",1,now(),now(),35,13);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Kit Kat",1,now(),now(),36,14);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Snickers",1,now(),now(),36,13);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Milky Way",1,now(),now(),36,16);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Hersheys'n'Creme",1,now(),now(),36,15);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Baby Ruth Bar",1,now(),now(),37,15);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Chcolate covered Peanuts",1,now(),now(),37,16);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Almond Joy Bar",1,now(),now(),37,13);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Mr Goodbar",1,now(),now(),37,14);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Theo's Choclate Factory",1,now(),now(),38,16);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Ghirardeli Chocolate Factory",1,now(),now(),38,13);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Rocky Mountain Chocolate Factory",1,now(),now(),38,14);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Willy Wonka Chocolate Factory",1,now(),now(),38,15);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Chocolate Red Roses",1,now(),now(),39,13);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Chocolate covered Strawberries",1,now(),now(),39,16);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("A Box of Assorted Chocolates",1,now(),now(),39,14);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Chocolate Truffles",1,now(),now(),39,15);