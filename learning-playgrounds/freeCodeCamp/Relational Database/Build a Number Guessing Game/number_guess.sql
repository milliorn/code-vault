--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE number_guess;
--
-- Name: number_guess; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE number_guess WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE number_guess OWNER TO freecodecamp;

\connect number_guess

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: games; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.games (
    game_id integer NOT NULL,
    user_id integer,
    secret_number integer NOT NULL,
    number_of_guesses integer NOT NULL
);


ALTER TABLE public.games OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_game_id_seq OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;


--
-- Name: players; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.players (
    user_id integer NOT NULL,
    username character varying(22) NOT NULL
);


ALTER TABLE public.players OWNER TO freecodecamp;

--
-- Name: players_user_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.players_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.players_user_id_seq OWNER TO freecodecamp;

--
-- Name: players_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.players_user_id_seq OWNED BY public.players.user_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(22) NOT NULL
);


ALTER TABLE public.users OWNER TO freecodecamp;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO freecodecamp;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: games game_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);


--
-- Name: players user_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.players ALTER COLUMN user_id SET DEFAULT nextval('public.players_user_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.games VALUES (1, 2, 636, 8);
INSERT INTO public.games VALUES (2, 2, 154, 21);
INSERT INTO public.games VALUES (3, 2, 120, 9);
INSERT INTO public.games VALUES (36, 5, 39, 40);
INSERT INTO public.games VALUES (37, 6, 589, 590);
INSERT INTO public.games VALUES (38, 6, 908, 909);
INSERT INTO public.games VALUES (39, 5, 411, 414);
INSERT INTO public.games VALUES (40, 5, 746, 747);
INSERT INTO public.games VALUES (41, 5, 231, 232);
INSERT INTO public.games VALUES (42, 7, 936, 937);
INSERT INTO public.games VALUES (43, 8, 266, 267);
INSERT INTO public.games VALUES (44, 7, 903, 906);
INSERT INTO public.games VALUES (45, 7, 598, 599);
INSERT INTO public.games VALUES (46, 7, 392, 393);
INSERT INTO public.games VALUES (47, 9, 447, 448);
INSERT INTO public.games VALUES (48, 10, 865, 866);
INSERT INTO public.games VALUES (49, 10, 103, 104);
INSERT INTO public.games VALUES (50, 9, 512, 515);
INSERT INTO public.games VALUES (51, 9, 280, 281);
INSERT INTO public.games VALUES (52, 9, 826, 827);
INSERT INTO public.games VALUES (53, 11, 365, 366);
INSERT INTO public.games VALUES (54, 11, 226, 227);
INSERT INTO public.games VALUES (55, 12, 367, 368);
INSERT INTO public.games VALUES (56, 12, 229, 230);
INSERT INTO public.games VALUES (57, 11, 676, 679);
INSERT INTO public.games VALUES (58, 11, 632, 633);
INSERT INTO public.games VALUES (59, 11, 319, 320);
INSERT INTO public.games VALUES (60, 13, 259, 260);
INSERT INTO public.games VALUES (61, 13, 770, 771);
INSERT INTO public.games VALUES (62, 14, 35, 36);
INSERT INTO public.games VALUES (63, 14, 816, 817);
INSERT INTO public.games VALUES (64, 13, 957, 960);
INSERT INTO public.games VALUES (65, 13, 782, 783);
INSERT INTO public.games VALUES (66, 13, 587, 588);
INSERT INTO public.games VALUES (67, 15, 672, 673);
INSERT INTO public.games VALUES (68, 15, 155, 156);
INSERT INTO public.games VALUES (69, 16, 159, 160);
INSERT INTO public.games VALUES (70, 16, 764, 765);
INSERT INTO public.games VALUES (71, 15, 299, 302);
INSERT INTO public.games VALUES (72, 15, 835, 836);
INSERT INTO public.games VALUES (73, 15, 532, 533);
INSERT INTO public.games VALUES (74, 17, 197, 198);
INSERT INTO public.games VALUES (75, 17, 269, 270);
INSERT INTO public.games VALUES (76, 18, 708, 709);
INSERT INTO public.games VALUES (77, 18, 14, 15);
INSERT INTO public.games VALUES (78, 17, 654, 657);
INSERT INTO public.games VALUES (79, 17, 136, 137);
INSERT INTO public.games VALUES (80, 17, 979, 980);
INSERT INTO public.games VALUES (81, 19, 927, 928);
INSERT INTO public.games VALUES (82, 20, 477, 478);
INSERT INTO public.games VALUES (83, 20, 604, 605);
INSERT INTO public.games VALUES (84, 19, 324, 327);
INSERT INTO public.games VALUES (85, 19, 927, 928);
INSERT INTO public.games VALUES (86, 19, 871, 872);
INSERT INTO public.games VALUES (87, 21, 570, 571);
INSERT INTO public.games VALUES (88, 22, 217, 218);
INSERT INTO public.games VALUES (89, 22, 616, 617);
INSERT INTO public.games VALUES (90, 21, 777, 780);
INSERT INTO public.games VALUES (91, 21, 610, 611);
INSERT INTO public.games VALUES (92, 21, 427, 428);
INSERT INTO public.games VALUES (93, 23, 586, 587);
INSERT INTO public.games VALUES (94, 24, 706, 707);
INSERT INTO public.games VALUES (95, 24, 671, 672);
INSERT INTO public.games VALUES (96, 23, 835, 838);
INSERT INTO public.games VALUES (97, 23, 174, 175);
INSERT INTO public.games VALUES (98, 23, 490, 491);
INSERT INTO public.games VALUES (99, 1, 340, 8);
INSERT INTO public.games VALUES (100, 25, 176, 177);
INSERT INTO public.games VALUES (101, 26, 644, 645);
INSERT INTO public.games VALUES (102, 26, 133, 134);
INSERT INTO public.games VALUES (103, 25, 299, 302);
INSERT INTO public.games VALUES (104, 25, 781, 782);
INSERT INTO public.games VALUES (105, 25, 947, 948);
INSERT INTO public.games VALUES (106, 27, 885, 886);
INSERT INTO public.games VALUES (107, 27, 897, 898);
INSERT INTO public.games VALUES (108, 28, 313, 314);
INSERT INTO public.games VALUES (109, 28, 957, 958);
INSERT INTO public.games VALUES (110, 27, 672, 675);
INSERT INTO public.games VALUES (111, 27, 384, 385);
INSERT INTO public.games VALUES (112, 27, 653, 654);


--
-- Data for Name: players; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.players VALUES (1, 'Test');
INSERT INTO public.players VALUES (2, 'tEST');
INSERT INTO public.players VALUES (3, 'user_1690851222013');
INSERT INTO public.players VALUES (4, 'user_1690851222012');
INSERT INTO public.players VALUES (5, 'user_1690851242508');
INSERT INTO public.players VALUES (6, 'user_1690851242507');
INSERT INTO public.players VALUES (7, 'user_1690851255975');
INSERT INTO public.players VALUES (8, 'user_1690851255974');
INSERT INTO public.players VALUES (9, 'user_1690851308354');
INSERT INTO public.players VALUES (10, 'user_1690851308353');
INSERT INTO public.players VALUES (11, 'user_1690851369412');
INSERT INTO public.players VALUES (12, 'user_1690851369411');
INSERT INTO public.players VALUES (13, 'user_1690851413866');
INSERT INTO public.players VALUES (14, 'user_1690851413865');
INSERT INTO public.players VALUES (15, 'user_1690851472352');
INSERT INTO public.players VALUES (16, 'user_1690851472351');
INSERT INTO public.players VALUES (17, 'user_1690852380189');
INSERT INTO public.players VALUES (18, 'user_1690852380188');
INSERT INTO public.players VALUES (19, 'user_1690852399858');
INSERT INTO public.players VALUES (20, 'user_1690852399857');
INSERT INTO public.players VALUES (21, 'user_1690852437955');
INSERT INTO public.players VALUES (22, 'user_1690852437954');
INSERT INTO public.players VALUES (23, 'user_1690852460824');
INSERT INTO public.players VALUES (24, 'user_1690852460823');
INSERT INTO public.players VALUES (25, 'user_1690852503672');
INSERT INTO public.players VALUES (26, 'user_1690852503671');
INSERT INTO public.players VALUES (27, 'user_1690852642059');
INSERT INTO public.players VALUES (28, 'user_1690852642058');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--



--
-- Name: games_game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.games_game_id_seq', 112, true);


--
-- Name: players_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.players_user_id_seq', 28, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.users_user_id_seq', 1, false);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);


--
-- Name: players players_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.players
    ADD CONSTRAINT players_pkey PRIMARY KEY (user_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: games games_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.players(user_id);


--
-- PostgreSQL database dump complete
--

