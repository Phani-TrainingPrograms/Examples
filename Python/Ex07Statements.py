#if = Do some code only if some condition is TRUE, ELSE do something else.
age = int(input("Enter UR Age"));

# check for issuing credit card:
if age >=100:
    print("U R too old to sign up")
elif age >= 18:
    print("U R now signed up!!!")
elif age < 0:
    print("U haven't been born yet")
else:
    print("U must be 18+ to sign up!!!")

# validating a name
name = input("Enter your name");
if name == "":
    print("U Did not type UR Name")
else:
    print(f"Hello {name}")