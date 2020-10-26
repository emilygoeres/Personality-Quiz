-- USE personality_quiz;
INSERT INTO personality_quiz.quizzes(quiz_name, quiz_category, image_tile,createdAt, updatedAt,userId) 
VALUES ("Chocolate Quiz", "food", "https://images.app.goo.gl/Bm1btRA8eKASoRCa6", now(),now(),1);
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

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Dark Chocolate",1,now(),now(),34,4);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Milk Chocolate",1,now(),now(),34,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Semi Sweet Chocolate",1,now(),now(),34,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("White Chocolate",1,now(),now(),34,10);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("White",1,now(),now(),35,10);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Blue",1,now(),now(),35,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Red",1,now(),now(),35,4);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Green",1,now(),now(),35,3);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Kit Kat",1,now(),now(),36,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Snickers",1,now(),now(),36,10);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Milky Way",1,now(),now(),36,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Hersheys'n'Creme",1,now(),now(),36,4);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Baby Ruth Bar",1,now(),now(),37,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Chcolate covered Peanuts",1,now(),now(),37,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Almond Joy Bar",1,now(),now(),37,10);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Mr Goodbar",1,now(),now(),37,4);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Theo's Choclate Factory",1,now(),now(),38,10);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Ghirardeli Chocolate Factory",1,now(),now(),38,4);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Rocky Mountain Chocolate Factory",1,now(),now(),38,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Willy Wonka Chocolate Factory",1,now(),now(),38,2);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Chocolate Red Roses",1,now(),now(),39,2);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Chocolate covered Strawberries",1,now(),now(),39,3);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("A Box of Assorted Chocolates",1,now(),now(),39,4);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Chocolate Truffles",1,now(),now(),39,10);