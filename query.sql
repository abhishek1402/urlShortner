CREATE DATABASE IF NOT EXISTS UrlShortner;
USE UrlShortner;

CREATE TABLE Url (
	id int auto_increment primary key,
    url varchar(100) not null UNIQUE,
    shortcode varchar(100) not null,
    startdate  varchar(100) null,
    lastSeenDate varchar(100) null,
    redirectCount int null
);