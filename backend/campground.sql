DROP DATABASE IF EXISTS campapp;
CREATE DATABASE campapp;
\c campapp;

--
-- Table structure for table CampGrounds
--

DROP TABLE IF EXISTS campgrounds;
CREATE TABLE campgrounds (
  ID serial NOT NULL,
  Name text NOT NULL default '',
  Summary text NOT NULL default '',
  Path text NOT NULL default '',
  PRIMARY KEY  (ID)
);

--
-- Dumping data for table City
--
-- ORDER BY:  ID

INSERT INTO campgrounds (Name, Summary, Path)  VALUES ('Apache', 'Named after the famous chopper helicopters that fly over during training. The thunder of the Apache can be heard from over 100 miles away! Take coverrr!! Just kidding they wont hurt you.', '/images/Apache.gif');
INSERT INTO campgrounds (Name, Summary, Path)  VALUES ('Apache Creek', 'Big brother to Apache, but no helicopters here. Only a quiet creek that runs north. The Nile in egypt was supposed to be the only one that did that. No lies here. See for yourself.', '/images/ApacheCreek.gif');
INSERT INTO campgrounds (Name, Summary, Path)  VALUES ('Armijo Springs', 'A lovely spot for bike riding out all your excitement for the wonderful weather. Beware, this spot is open all year round, but if you show up and its not spring, there is a $99999 fee. Yea, dont show up if its not spring.', '/images/ArmijoSprings.gif');
INSERT INTO campgrounds (Name, Summary, Path)  VALUES ('Baca', 'Very special cows live here. Afterall, Baca means cow in spanish! Becareful, they like to build campfires when no-ones looking. Check out this rare video of them at night!', '/images/Baca.gif');
INSERT INTO campgrounds (Name, Summary, Path)  VALUES ('James Canyon', 'Nice few from atop a large canyon. Ask for james! Lovely people of the village will also take you accross the canyon lake if you ask nicely!', '/images/JamesCanyon.gif');
INSERT INTO campgrounds (Name, Summary, Path)  VALUES ('Oak Grove', 'If you played GTASA you definitely know this place.', '/images/OakGrove.gif');
INSERT INTO campgrounds (Name, Summary, Path)  VALUES ('Piñon', 'Contians a small petting zoo, but watch out for the Llamas.', '/images/Pinon.gif');
INSERT INTO campgrounds (Name, Summary, Path)  VALUES ('Pueblo Park', 'The pueblos live in pueblos. Everyone knows that.', '/images/PuebloPark.jpg');
INSERT INTO campgrounds (Name, Summary, Path)  VALUES ('Railroad Canyon', 'The train only runs at midnight. So set your alarm, buy a ticket, and hop on!', '/images/RailroadCanyon.gif');
INSERT INTO campgrounds (Name, Summary, Path)  VALUES ('Saddle', 'Ponys not horses, but they are still very fun to ride and they make good friends.', '/images/Saddle.gif');
INSERT INTO campgrounds (Name, Summary, Path)  VALUES ('South Fork', 'Walk a bit in the opposite direction and the neighboring village called North Spoon will greet you.', '/images/SouthFork.gif');
INSERT INTO campgrounds (Name, Summary, Path)  VALUES ('Taylor''s Railroad', 'Taylor does not actually run this place. He dies years ago.', '/images/TaylorsRailroad.gif');
INSERT INTO campgrounds (Name, Summary, Path)  VALUES ('Three Rivers', 'You can count them, but I doubt you will find all three of them. The last one surely does not exist.', '/images/ThreeRivers.gif');
INSERT INTO campgrounds (Name, Summary, Path)  VALUES ('Wolf Hollow', 'If you feed them bones they will love you forever and protect from bears in the night. So make friends quick or else.', '/images/WolfHollow.gif');



