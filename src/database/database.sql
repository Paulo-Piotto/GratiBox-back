CREATE TABLE "users" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "sessions" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"token" varchar(255) NOT NULL,
	CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "plans" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL UNIQUE,
	"type" varchar(255) NOT NULL,
	"delivery_date" varchar(255) NOT NULL,
	"products" varchar(255) NOT NULL,
	"sign_date" DATE NOT NULL,
	CONSTRAINT "plans_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "delivery" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL UNIQUE,
	"full_name" varchar(255) NOT NULL,
	"adress" varchar(255) NOT NULL,
	"cep" varchar(255) NOT NULL,
	"city" varchar(255) NOT NULL,
	"state" varchar(255) NOT NULL,
	CONSTRAINT "delivery_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "plans" ADD CONSTRAINT "plans_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "delivery" ADD CONSTRAINT "delivery_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");




