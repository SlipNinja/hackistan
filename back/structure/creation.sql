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

CREATE TABLE discutions(
   id_discution INT AUTO_INCREMENT,
   title VARCHAR(250) NOT NULL,
   last_modified DATETIME NOT NULL,
   PRIMARY KEY(id_discution),
   UNIQUE(title)
);

CREATE TABLE posts(
   id_post INT AUTO_INCREMENT,
   content TEXT NOT NULL,
   date_posted DATETIME NOT NULL,
   status ENUM("accepted", "pending", "banned") NOT NULL,
   id_anwsered_post INT,
   id_discution INT NOT NULL,
   id_user INT NOT NULL,
   PRIMARY KEY(id_post),
   FOREIGN KEY(id_anwsered_post) REFERENCES posts(id_post),
   FOREIGN KEY(id_discution) REFERENCES discutions(id_discution),
   FOREIGN KEY(id_user) REFERENCES users(id_user)
);

CREATE TABLE tags(
   id_tag INT AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   PRIMARY KEY(id_tag),
   UNIQUE(name)
);

CREATE TABLE discution_tag(
   id_discution INT,
   id_tag INT,
   PRIMARY KEY(id_discution, id_tag),
   FOREIGN KEY(id_discution) REFERENCES discutions(id_discution),
   FOREIGN KEY(id_tag) REFERENCES tags(id_tag)
);
