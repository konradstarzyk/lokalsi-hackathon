CREATE TABLE photo (
  id              SERIAL NOT NULL,
  initiative_id   INTEGER,
  file_name       VARCHAR(255),
  path            VARCHAR(255),
  PRIMARY KEY (id)
);

ALTER TABLE photo
  ADD CONSTRAINT fk_photo_initiative FOREIGN KEY (initiative_id) REFERENCES initiative (id);