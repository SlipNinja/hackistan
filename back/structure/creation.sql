CREATE TABLE users(
   id_user INT AUTO_INCREMENT,
   username VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL,
   password VARCHAR(250) NOT NULL,
   role ENUM("admin", "user") NOT NULL,
   is_banned BOOLEAN DEFAULT false,
   PRIMARY KEY(id_user),
   UNIQUE(username),
   UNIQUE(email)
);

CREATE TABLE discussions(
   id_discussion INT AUTO_INCREMENT,
   title VARCHAR(250) NOT NULL,
   last_modified DATETIME NOT NULL,
   PRIMARY KEY(id_discussion),
   UNIQUE(title)
);

CREATE TABLE posts(
   id_post INT AUTO_INCREMENT,
   content TEXT NOT NULL,
   date_posted DATETIME NOT NULL,
   status ENUM("accepted", "pending", "banned") NOT NULL,
   id_anwsered_post INT,
   id_discussion INT NOT NULL,
   id_user INT NOT NULL,
   PRIMARY KEY(id_post),
   FOREIGN KEY(id_anwsered_post) REFERENCES posts(id_post),
   FOREIGN KEY(id_discussion) REFERENCES discussions(id_discussion),
   FOREIGN KEY(id_user) REFERENCES users(id_user)
);

CREATE TABLE tags(
   id_tag INT AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   PRIMARY KEY(id_tag),
   UNIQUE(name)
);

CREATE TABLE discussion_tag(
   id_discussion INT,
   id_tag INT,
   PRIMARY KEY(id_discussion, id_tag),
   FOREIGN KEY(id_discussion) REFERENCES discussions(id_discussion),
   FOREIGN KEY(id_tag) REFERENCES tags(id_tag)
);
