CREATE TABLE burgers (
	id INTEGER(10) AUTO_INCREMENT,
    burger_name VARCHAR(20),
    devoured BOOLEAN NOT NULL default 0,
    PRIMARY KEY (id)
);
