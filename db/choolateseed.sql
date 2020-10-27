-- USE lfoz4j8nwop9wi8l;
-- =====================================================================================
-- QUIZ #4 Chocolate QUIZ
-- Questions: 6
-- =====================================================================================


-- INSERT INTO lfoz4j8nwop9wi8l.users(user_name, first_name, last_name, password, email, archetype_1, archetype_2, archetype_3, archetype_4, archetype_5, archetype_6, archetype_7, archetype_8, archetype_9, archetype_10, archetype_11, archetype_12, createdAt, updatedAt) 
-- VALUES ("Mr Mime", "Art", "G","password", "art@gmail.com",0,0,0,0,0,0,0,0,0,0,0,0, now(), now());
-- Insert Quiz
INSERT INTO lfoz4j8nwop9wi8l.quizzes(quiz_name, quiz_category, image_tile,createdAt, updatedAt,userId) 
VALUES ("Chocolate Quiz", "food", "https://blog.youthdiscount.com/wp-content/uploads/2019/07/shutterstock_87050390.jpg", now(),now(),1);
-- Questions
INSERT INTO lfoz4j8nwop9wi8l.questions(question,createdAt, updatedAt,quizId)
VALUES("Which flavor of chocolate is your favorite?",now(), now(),4);
INSERT INTO lfoz4j8nwop9wi8l.questions(question,createdAt, updatedAt,quizId)
VALUES("Which color of M&M is your favorite?",now(), now(),4);
INSERT INTO lfoz4j8nwop9wi8l.questions(question,createdAt, updatedAt,quizId)
VALUES("Which chocolate bar is your favorite?",now(), now(),4);
INSERT INTO lfoz4j8nwop9wi8l.questions(question,createdAt, updatedAt,quizId)
VALUES("What's your favorite nutty chocolate?",now(), now(),4);
INSERT INTO lfoz4j8nwop9wi8l.questions(question,createdAt, updatedAt,quizId)
VALUES("Which chocoloate factory do you want to go to?",now(), now(),4);
INSERT INTO lfoz4j8nwop9wi8l.questions(question,createdAt, updatedAt,quizId)
VALUES("What is your favorite chocolate to recieve on Valentine's Day?",now(), now(),4);

INSERT INTO lfoz4j8nwop9wi8l.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Reeses Peanut Butter Cup","You are energetic, inclusive and everyone wants to be your friend! Your character type is Harry Potter!",now(),now(),4);
INSERT INTO lfoz4j8nwop9wi8l.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Crunch Bar", "You are traditional, mysterious and you're old school with a hard exterior but noone ever questions your love and loyalty. Your character type is Ron Weasley!",now(),now(),2);
INSERT INTO lfoz4j8nwop9wi8l.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Butterfinger","You are different, adventurous and no one has ever been able to pin you down and fully understand you. Your character type is Draco Malfoy!",now(),now(),10);
INSERT INTO lfoz4j8nwop9wi8l.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Twix Bar","You are helpful, welcoming and you're always the one people go to if they need advice/help. Your character type is Hermione Granger!",now(),now(),3);

INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Dark Chocolate",1,now(),now(),23,13);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Milk Chocolate",1,now(),now(),23,14);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Semi Sweet Chocolate",1,now(),now(),23,15);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("White Chocolate",1,now(),now(),23,16);

INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("White",1,now(),now(),24,16);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Blue",1,now(),now(),24,15);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Red",1,now(),now(),24,14);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Green",1,now(),now(),24,13);

INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Kit Kat",1,now(),now(),25,14);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Snickers",1,now(),now(),25,13);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Milky Way",1,now(),now(),25,16);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Hersheys'n'Creme",1,now(),now(),25,15);

INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Baby Ruth Bar",1,now(),now(),26,15);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Chcolate covered Peanuts",1,now(),now(),26,16);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Almond Joy Bar",1,now(),now(),26,13);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Mr Goodbar",1,now(),now(),26,14);

INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Theo's Choclate Factory",1,now(),now(),27,16);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Ghirardeli Chocolate Factory",1,now(),now(),27,13);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Rocky Mountain Chocolate Factory",1,now(),now(),27,14);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Willy Wonka Chocolate Factory",1,now(),now(),27,15);

INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Chocolate Red Roses",1,now(),now(),28,13);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Chocolate covered Strawberries",1,now(),now(),28,16);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("A Box of Assorted Chocolates",1,now(),now(),28,14);
INSERT INTO lfoz4j8nwop9wi8l.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Chocolate Truffles",1,now(),now(),28,15);