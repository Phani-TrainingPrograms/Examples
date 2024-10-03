import math

# math based operations
x = math.pi
y = -4
z = 5
# result = round(x)
# result = abs(y) #abs is absolute which means the no of digits from 0.
# result = pow(2, 3) # 2 to the power of 3.
result = max(x, y, z)
result = min(x, y, z)

result = math.ceil(x)
result = math.floor(x)
print(result)

#Exercise 1: Circumference of a circle
# radius = float(input("Enter the radius of the circle: "));
# circumference = 2 * math.pi * radius;
# print(f"The Circumference of a circle: {round(circumference)}")

#Exercise 2: Area of a circle
# radius = float(input("Enter the radius of the circle: "));
# area = math.pi * pow(radius, 2);
# print(f"The Area of a circle: {round(area)}")


#Exercise 3:
a =float(input("Enter side A: "));
b =float(input("Enter side B: "));
c = math.sqrt(pow(a, 2) + pow(b, 2));
print(f"side C: {c}")
