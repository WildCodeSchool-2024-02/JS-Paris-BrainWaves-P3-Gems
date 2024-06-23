CREATE TABLE category(
   Id_category_list INT AUTO_INCREMENT,
   title VARCHAR(100),
   picture TEXT,
   details TEXT NOT NULL,
   exist BOOLEAN NOT NULL,
   PRIMARY KEY(Id_category_list)
);

CREATE TABLE user(
   Id_user INT AUTO_INCREMENT,
   firstname VARCHAR(100) NOT NULL,
   lastname VARCHAR(100) NOT NULL,
   mail VARCHAR(120) NOT NULL,
   hashed_password VARCHAR(255) NOT NULL,
   is_admin BOOLEAN NOT NULL DEFAULT false,
   PRIMARY KEY(Id_user)
);

CREATE TABLE product(
   Id_product INT AUTO_INCREMENT,
   name VARCHAR(150) NOT NULL,
   details TEXT,
   price INT NOT NULL,
   sold BOOLEAN NOT NULL DEFAULT 0,
   picture_jewell TEXT NOT NULL,
   picture_validation TEXT NOT NULL,
   validated BOOLEAN DEFAULT 0,
   Id_user INT NOT NULL,
   Id_category INT NOT NULL,
   PRIMARY KEY(Id_product),
   FOREIGN KEY(Id_user) REFERENCES user(Id_user),
   FOREIGN KEY(Id_category) REFERENCES category(Id_category_list)
);

CREATE TABLE transaction(
   Id_transaction INT,
   transaction_date DATE NOT NULL,
   invoice VARCHAR(50)  NOT NULL,
   status VARCHAR(50)  NOT NULL,
   Id_product INT NOT NULL,
   PRIMARY KEY(Id_transaction),
   UNIQUE(Id_product),
   FOREIGN KEY(Id_product) REFERENCES product(Id_product)
);

CREATE TABLE comment(
   Id_comment INT AUTO_INCREMENT,
   text TEXT NOT NULL,
   creation_date DATE NOT NULL,
   Id_transaction INT NOT NULL,
   Id_user INT NOT NULL,
   PRIMARY KEY(Id_comment),
   UNIQUE(Id_transaction),
   FOREIGN KEY(Id_transaction) REFERENCES transaction(Id_transaction),
   FOREIGN KEY(Id_user) REFERENCES user(Id_user)
);

CREATE TABLE adress(
   Id_adress INT AUTO_INCREMENT,
   city VARCHAR(50)  NOT NULL,
   street VARCHAR(255)  NOT NULL,
   street_code INT NOT NULL,
   zip_code INT NOT NULL,
   Id_user INT NOT NULL,
   Id_transaction INT NOT NULL,
   PRIMARY KEY(Id_adress),
   FOREIGN KEY(Id_user) REFERENCES user(Id_user),
   FOREIGN KEY(Id_transaction) REFERENCES transaction(Id_transaction)
);

CREATE TABLE assign(
   Id_category_list INT,
   Id_product INT,
   PRIMARY KEY(Id_category_list, Id_product),
   FOREIGN KEY(Id_category_list) REFERENCES category(Id_category_list),
   FOREIGN KEY(Id_product) REFERENCES product(Id_product)
);

CREATE TABLE sale(
   Id_user INT,
   Id_transaction INT,
   PRIMARY KEY(Id_user, Id_transaction),
   FOREIGN KEY(Id_user) REFERENCES user(Id_user),
   FOREIGN KEY(Id_transaction) REFERENCES transaction(Id_transaction)
);

CREATE TABLE wish_list(
   Id_product INT,
   Id_user INT,
   PRIMARY KEY(Id_product, Id_user),
   FOREIGN KEY(Id_product) REFERENCES product(Id_product),
   FOREIGN KEY(Id_user) REFERENCES user(Id_user)
);
