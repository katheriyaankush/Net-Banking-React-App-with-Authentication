PGDMP     1    $                x            users    12.3    12.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            
           1262    24585    users    DATABASE     �   CREATE DATABASE users WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE users;
                postgres    false                       0    0    DATABASE users    COMMENT     0   COMMENT ON DATABASE users IS 'Authentication
';
                   postgres    false    2826            �            1259    24588    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255),
    password character varying(255),
    created timestamp without time zone NOT NULL,
    token_id character varying,
    name character varying
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    24586    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    203                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    202            �
           2604    24591    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203                      0    24588    users 
   TABLE DATA           P   COPY public.users (id, username, password, created, token_id, name) FROM stdin;
    public          postgres    false    203   �                  0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 85, true);
          public          postgres    false    202            �
           2606    24596    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    203            �
           2606    24598    users users_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
       public            postgres    false    203               �   x�m��J�@F�w��/�23�/"h�Hr�Ԃ7�[cHSJ��&ij��e�w��+�	���T�/Y)��Hp7�Q�E�?�}�����v_�༪�	����(�E�0F"�SA������Tp��j��ǎ�_��r7����3����m�w��{E��<�|�B�xM�R���%�V��T��P�
�v���O�����<�6F5
���Ȼ�ꛊU�?���>���M3�n�I)�u��     