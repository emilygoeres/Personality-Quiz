-- USE personality_quiz;
INSERT INTO personality_quiz.quizzes(quiz_name, quiz_category, image_tile,createdAt, updatedAt,userId) 
VALUES ("Harry Potter Quiz", "tv show", "https://images.app.goo.gl/Bm1btRA8eKASoRCa6", now(),now(),1);
-- Questions
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which Harry Potter chracter is your favorite?",now(), now(),5);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which house would you want to be in?",now(), now(),5);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Who is your favorite Hogwarts professor?",now(), now(),5);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which Harry Potter animal is your favorite?",now(), now(),5);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which Harry Potter book was your favorite?",now(), now(),5);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Who is your favorite Weasley family member?",now(), now(),5);

INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Harry Potter","You are serious, logical and always stop and think before you act. Your character type is Harry Potter!",now(),now(),8);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Ron Weasley", "You are warm hearted, cooperative and ready to take down anyone that crosses your path or your friends path. Your character type is Ron Weasley!",now(),now(),1);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Draco Malfoy","You are forceful, well informed and always take lead in every aspect of your life. Your character type is Draco Malfoy!",now(),now(),5);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Hermione Granger","You are realistic, matter-of-fact and you're always two steps of everyone else. Your character type is Hermione Granger!",now(),now(),10);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Harry Potter",1,now(),now(),28,8);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Luna Lovegood",1,now(),now(),28,1);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Sirius Black",1,now(),now(),28,5);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Dolores Umbridge",1,now(),now(),28,10);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Hufflepuff",1,now(),now(),29,1);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Slytherin",1,now(),now(),29,5);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Ravenclaw",1,now(),now(),29,8);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Gryffindor",1,now(),now(),29,10);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Professor McGonagall (Transfiguration And Headmistress)",1,now(),now(),30,10);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Madam Hooch (Flying Instructor)",1,now(),now(),30,8);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Rubeus Hagrid (Care Of Magical Creatures)",1,now(),now(),30,5);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Professor Dumbledore (Defence Against The Dark Arts, Transfiguration, Headmaster)",1,now(),now(),30,1);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Fluffy 3 Headed Dog",1,now(),now(),31,10);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("The Basilisk (Snake)",1,now(),now(),31,8);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Hippogriff (A Hybrid, Half-Horse-Half-Eagle Creature)",1,now(),now(),31,1);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Hedwig (Snowy Owl)",1,now(),now(),31,5);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Harry Potter and the Philosopher's Stone",1,now(),now(),32,1);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Harry Potter and the Chamber of Secrets",1,now(),now(),32,10);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Harry Potter and the Prisoner of Azkaban ",1,now(),now(),32,5);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Harry Potter and the Goblet of Fire",1,now(),now(),32,8);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Ron Weasley",1,now(),now(),33,5);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Fred Weasley",1,now(),now(),33,8);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("George Weasley",1,now(),now(),33,1);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Lucy Weasley",1,now(),now(),33,10);