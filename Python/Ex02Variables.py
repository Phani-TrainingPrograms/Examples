# variable = a container for value. Behaves as the value that it contains
#use single or double quotes
name = 'phani';
print(name); #dont use quotes while using with variables.
# print("hello " + name);
print(type(name));
# If a variable has 2 words, seperate it by an _
first_name = "phani"
last_name = "raj"

full_name = first_name + " "  + last_name;
print("hello " + full_name) 

###################int data type#######################
age = 47; # int should not be within quotes. strings cannot be used for any kind of math. 
age += 1;
print("The age is " + str(age) + " and its data type is " + str((type(age))));# error
# Have to typecast to string when we do concatination from string to int and vice versa. 

###################float data type#######################
height = 250.5;
print(height)
print(type(height)) # Gives float. 
print("UR Height is " + str(height) + "cm")

###################try boolean data type#######################
#####################Using multiple variables in the same line##########
# name ="phani"
# age = 47
# attractive = True;

name, age, attractive = "phani", 47, True;
print(name)
print(age)
print(attractive)

# If all the variables have same values: 
suman = rajan = phani = 47;
