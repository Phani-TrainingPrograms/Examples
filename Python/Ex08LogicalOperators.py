# logical operators: evaluate to multiple conditions (or, and, not
# or = at least one condition must be True
# and: both the conditions must be true
# not = inverts the condition (not False, Not True)


# using or condition for event cancellation:
# temp = 20
# is_raining = False
#
# if temp > 35 or is_raining or temp < 0:
#     print("The outdoor event is cancelled");
# else:
#     print("The outdoor event is still scheduled")

# using and condition
temp = 30
is_sunny = True
if temp >= 28 and is_sunny :
    print("its HOT outside " + "🥵🥵🥵" ) # Use Windows + . to get the emojis.
    print("It is SUNNY ☀️")