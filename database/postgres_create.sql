--
-- PostgreSQL database dump
--

CREATE TABLE public.user (
    "id" serial integer,
    "firstName" varchar NOT NULL,
    "lastName" varchar,
    "age" integer,
    "email" varchar unique NOT NULL,
    "password" varchar NOT NULL,
    constraint pk_user PRIMARY KEY "id"
)

CREATE TABLE public.journey (
    "id" serial integer,
    "origin" varchar,
    "destination" varchar,
    "startDate" date,
    "endDate" date,
    "distance" integer,
    "totalCost" integer
    constraint pk_journey PRIMARY KEY "id"
)

CREATE TABLE public.userJourney (
    "id" serial integer,
    "userID" integer NOT NULL,
    "journeyID" integer NOT NULL,
    "cost" integer,
    "driver" integer
    constraint pk_userJourney PRIMARY KEY "id"
)