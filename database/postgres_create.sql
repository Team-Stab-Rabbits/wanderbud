--
-- PostgreSQL database dump
--

CREATE TABLE public.user (
    "id" serial,
    "firstName" varchar NOT NULL,
    "lastName" varchar,
    "age" integer,
    "email" varchar unique NOT NULL,
    "password" varchar NOT NULL,
    CONSTRAINT "user_pk" PRIMARY KEY ("id")
);

CREATE TABLE public.journey (
    "id" serial,
    "origin" varchar,
    "destination" varchar,
    "startDate" date,
    "endDate" date,
    "distance" integer,
    "totalCost" integer,
    CONSTRAINT "journey_pk" PRIMARY KEY ("id")
);

CREATE TABLE public.userJourney (
    "id" serial,
    "userID" integer NOT NULL,
    "journeyID" integer NOT NULL,
    "driver" boolean,
    "cost" integer,
    CONSTRAINT "userJourney_pk" PRIMARY KEY ("id")
);