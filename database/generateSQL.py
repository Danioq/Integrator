import codecs
from random import randint, choice

districts = ['Krzyki', 'Psie Pole', 'Nadodrze', 'Ołbin', 'Biskupin', 'Bielany Wrocławskie', 'Grabiszyn' ]
departments = ['Kadry', 'IT', 'Sprzedaż', 'Księgowość', 'Promocja', 'Projekty', 'Transport']
names = []
last_names = []
pictures = []

with codecs.open("first_names.txt", 'r', 'utf-8') as f:
  names = f.readlines()

with codecs.open("last_names.txt", 'r', 'utf-8') as f:
  last_names = f.readlines()

with codecs.open("pictures.txt", 'r', 'utf-8') as f:
  pictures = f.readlines()

picture = iter(pictures)

create_table = "CREATE TABLE EMPLOYEES(\n FIRST_NAME TEXT NOT NULL,\n LAST_NAME TEXT NOT NULL,\n AGE INT NOT NULL,\n DEPARTMENT TEXT NOT NULL,\n DISTRICT TEXT NOT NULL,\n PICTURE TEXT NOT NULL);\n"

def gen_random_employee():
  return "INSERT INTO EMPLOYEES VALUES (\n{},\n{},\n{},\n{},\n{},\n{});\n".format(choice(names).strip(), choice(last_names).strip(), randint(20,70), choice(departments), choice(districts), next(picture))

with codecs.open('init.sql', 'w', 'utf-8') as file:
  file.write(create_table)
  for _ in range(500):
    file.write(gen_random_employee())