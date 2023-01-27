
    create table breeds (
       id integer not null auto_increment,
        description text,
        image_url varchar(255),
        max_life_span integer not null,
        min_life_span integer not null,
        name varchar(255),
        size varchar(255),
        trainability integer not null,
        primary key (id)
    ) engine=InnoDB;
