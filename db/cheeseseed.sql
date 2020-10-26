-- USE personality_quiz;

-- =====================================================================================
-- QUIZ #3 Cheese QUIZ
-- Questions: 5
-- =====================================================================================

-- Insert quiz --
INSERT INTO personality_quiz.quizzes(quiz_name, quiz_category, image_tile,createdAt, updatedAt,userId) 
VALUES ("Cheese Quiz", "food", "https://cdn2.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/19_28607_30GM_01ec.jpg?width=545&height=597&quality=80&auto=webp&optimze={medium}", now(),now(),1);
-- Questions
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Which cheese is your favorite?",now(), now(),3);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("What is your favorite cheese shop?",now(), now(),3);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("What is your favorite cheesey meal",now(), now(),3);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Who is your favorite cheese producer",now(), now(),3);
INSERT INTO personality_quiz.questions(question,createdAt, updatedAt,quizId)
VALUES("Where is your favorite place to eat cheese?",now(), now(),3);


INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Blue Cheese","You are humble, devoted and never take anything in life for granted, you nver ignore the fine details. Your cheese type is Blue Cheese!",now(),now(),3);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Cheddar Cheese", "You are hard working, sincere, nothing has come easy to you but through perseverance, you always come out on the top. Your cheese type is Cheddar Cheese!",now(),now(),2);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Swiss Cheese","You are cheerful, optimistic and always build your friends back up when they need it most. Your cheese type is Swiss Cheese!",now(),now(),4);
INSERT INTO personality_quiz.personalities(personality_type, personality_description,createdAt,updatedAt,archetypeId)
VALUES("Cottage Cheese","You are mature, accecpts what's given and are always in the shadows of others but you always make sure your voice is heard. Your cheese type is Cottage Cheese!",now(),now(),9);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Ghost Pepper Cheese",1,now(),now(),18,9);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("String Cheese",1,now(),now(),18,10);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Easy Cheese",1,now(),now(),18,11);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Goat Cheese",1,now(),now(),18,12);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Beechers",1,now(),now(),19,12);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Crimson Cove",1,now(),now(),19,11);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Willapa Hills Cheese",1,now(),now(),19,10);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Ferdinand's",1,now(),now(),19,9);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Macaroni and Cheese",1,now(),now(),20,10);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Grilled Cheese",1,now(),now(),20,12);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Mozarella Sticks",1,now(),now(),20,11);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Cheddar Stuffed Pork Chops",1,now(),now(),20,9);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Tillamook",1,now(),now(),21,11);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Washington State University",21,now(),now(),21,9);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Hilmar Cheese Company",1,now(),now(),21,12);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("Beechers Handmade Cheese",1,now(),now(),21,10);

INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("At a Football Game",1,now(),now(),22,10);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("In a Hot Air Balloon",1,now(),now(),22,11);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("In a Pool",1,now(),now(),22,9);
INSERT INTO personality_quiz.answers(answer,points,createdAt,updatedAt,questionId,personalityId) VALUES("While ridinga bike",1,now(),now(),22,12);

