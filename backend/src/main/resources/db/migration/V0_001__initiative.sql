CREATE TABLE initiative (
  id              SERIAL NOT NULL,
  name            VARCHAR(255),
  description     VARCHAR(255),
  location        VARCHAR(255),
  author          VARCHAR(255),
  fb_event        VARCHAR(255),
  lat             NUMERIC(18,16),
  lng             NUMERIC(18,16),
  likes           INTEGER,
  joins           INTEGER,
  PRIMARY KEY (id)
);
