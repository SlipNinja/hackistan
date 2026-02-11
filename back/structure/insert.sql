
-- USERS

INSERT INTO `users`(`id_user`,`username`, `email`, `password`, `role`)
VALUES (1, 'doriane_la_dictatrice', 'dodo@hackistan.fr', '1234', 'admin');

INSERT INTO `users`(`id_user`,`username`, `email`, `password`, `role`)
VALUES (2, 'nickleback', 'nick@remind.me', '666', 'user');

INSERT INTO `users`(`id_user`,`username`, `email`, `password`, `role`)
VALUES (3, 'Bob', 'bob@orange.fr', '123', 'user');

-- TAGS

INSERT INTO `tags`(`id_tag`, `name`) VALUES (1, 'Computer');
INSERT INTO `tags`(`id_tag`, `name`) VALUES (2, 'Casual');
INSERT INTO `tags`(`id_tag`, `name`) VALUES (3, 'Life');
INSERT INTO `tags`(`id_tag`, `name`) VALUES (4, 'Nature');
INSERT INTO `tags`(`id_tag`, `name`) VALUES (5, 'Music');

-- DISCUTIONS

INSERT INTO `discutions`(`id_discution`, `title`, `last_modified`, `id_user`, `description`)
VALUES (1, 'What is your favourite music ?', NOW(), 2,
'I am just curious, personnally I like good old alternative Rock, maybe that is my emo side lol');

INSERT INTO `discutions`(`id_discution`, `title`, `last_modified`, `id_user`, `description`)
VALUES (2, 'I dont understand React', NOW(), 1,
'I am trying to put a form in a page without loading a new page, what should I put in my link ?');

-- DISCUTION_TAG

INSERT INTO `discution_tag`(`id_discution`, `id_tag`) VALUES (1, 2);
INSERT INTO `discution_tag`(`id_discution`, `id_tag`) VALUES (1, 5);
INSERT INTO `discution_tag`(`id_discution`, `id_tag`) VALUES (2, 1);

-- POSTS

INSERT INTO `posts`(`id_post`, `content`, `date_posted`, `status`, `id_anwsered_post`, `id_discution`, `id_user`)
VALUES (1, 'Me I love US rap I think its the most beautiful form of music on earth !',
NOW(), 'accepted', NULL, 1, 3);

INSERT INTO `posts`(`id_post`, `content`, `date_posted`, `status`, `id_anwsered_post`, `id_discution`, `id_user`)
VALUES (2, 'You idiot go to hell',
NOW(), 'pending', 1, 1, 2);

INSERT INTO `posts`(`id_post`, `content`, `date_posted`, `status`, `id_anwsered_post`, `id_discution`, `id_user`)
VALUES (3, 'Try to add a state that handles the display of the form ?',
NOW(), 'accepted', NULL, 2, 3);

INSERT INTO `posts`(`id_post`, `content`, `date_posted`, `status`, `id_anwsered_post`, `id_discution`, `id_user`)
VALUES (4, 'OMFG THANKS',
NOW(), 'accepted', 3, 2, 1);