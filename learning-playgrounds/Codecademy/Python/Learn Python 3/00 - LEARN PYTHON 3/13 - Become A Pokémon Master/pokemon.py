# Create a Pokémon class.
# The __init__() method of our Pokémon class created variables to keep track of the Pokémon’s name,
# level, type (for example "Fire" or "Water"), maximum health, current health,
# and whether or not the Pokémon was knocked out.
# In our implementation, the maximum health was determined by the Pokémon’s level.

# Give your Pokémon class some functionality.
# Our Pokémon class had a variety of methods that changed the variables associated with a Pokémon.
# For example, it had a method the decreased the Pokémon’s health (we called this lose_health)
# and a method for regaining health.
# We also created a method that would officially “knock out” a Pokémon (when its health became 0)
# and another method to revive a knocked out Pokémon.
# All of these methods had print statements to let the user know what was happening.
# For example, we might print something like "Charmander now has 30 health" when healing.

# One of the trickier methods we created in the Pokémon class was the attack method.
# This method takes another Pokémon as an argument and deals damage to that Pokémon.
# The amount of damage dealt depends on the types of the attacking Pokémon and the Pokémon being attacked.
# If the attacking Pokémon has advantage over the other Pokémon (for example, a "Fire" Pokémon attacking a "Grass" Pokémon),
# we dealt damage equal to twice the attacking Pokémon’s level.
# If the attacking Pokémon was at a disadvantage (for example, a "Grass" Pokémon attacking a "Fire" Pokémon),
# we dealt damage equal to half the attacking Pokémon’s level.
# Make sure to put in appropriate print statements to let the user know what is happening when one Pokémon attacks another.


class Pokemon:
    def __init__(self, name, level, type, health_maximum, health_current, knocked_out):
        self.name = name
        self.level = level
        self.type = type
        self.health_maximum = health_maximum
        self.health_current = health_current
        self.knocked_out = knocked_out

    def health_decrease(self, decrease):
        hp_lost = self.health_current - decrease
        print("{} now has {} health.".format(self.name, hp_lost))
        self.health_current = hp_lost
        return

    def health_increase(self, increase):
        hp_gain = self.health_current + increase

        if hp_gain > self.health_maximum:
            hp_gain = self.health_maximum

        print("{} now has {} health.".format(self.name, hp_gain))
        self.health_current = hp_gain
        return

    def health_knocked_out(self):
        if self.health_current < 0 and self.knocked_out == False:
            self.knocked_out = True
        return self.knocked_out

    def health_message(self):
        return "{name} now has {current}/{max} health.".format(name=self.name, current=self.health_current, max=self.health_maximum)

    def attack(self, target):
        damage = 0

        if self.knocked_out:
            print("{name} can't attack because it is knocked out!".format(
                name=self.name))

        elif (self.type == "Fire" and target.type == "Water") or (self.type == "Water" and target.type == "Electric"):
            print("Half-Damage dealt.\n{attacker} attacked {victim} for {damage} damage.".format(
                attacker=self.name, victim=target.name, damage=round(self.level * 0.5)))
            damage = self.level * 0.5

        elif (self.type == "Fire" and target.type == "Ice") or (self.type == "Electric" and target.type == "Water"):
            print("Double-Damage dealt.\n{attacker} attacked {victim} for {damage} damage.".format(
                attacker=self.name, victim=target.name, damage=self.level * 2))
            damage = self.level * 2.0

        else:
            print("{attacker} attacked {victim} for {damage} damage.".format(
                attacker=self.name, victim=target.name, damage=self.level))
            damage = self.level

        return target.health_decrease(damage)

# Make a Trainer class.
# A Trainer can have up to 6 Pokémon, which we stored in a list.
# A trainer also has a name, and a number of potions they can use to heal their Pokémon.
# A trainer also has a “currently active Pokémon”, which we represented as a number.

# Give your Trainer class some functionality through methods.
# Our trainer is able to use a potion and attack another trainer.
# When a potion is used, it heals the trainer’s currently active Pokémon.
# Similarly, when a trainer attacks another trainer,
# the currently active Pokémon deals damage to the other trainer’s current Pokémon.
# Finally, the trainer is able to switch which Pokémon is currently active.


class Trainer:
    def __init__(self, pokemons, potions, name, current_pokemon):
        self.pokemons = pokemons
        self.potions = potions
        self.name = name
        self.current_pokemon = current_pokemon

    def use_potion(self):
        if self.potions > 0:
            print("You used a potion on {name}.".format(
                name=self.pokemons[self.current_pokemon].name))
            self.current_pokemon.health_increase(self.current_pokemon.level)
            self.potions -= 1
        else:
            print("You don't have any more potions")

    def attack(self, target):
        print("{attacker} attacks {target}".format(
            attacker=self.current_pokemon, target=target))
        return Pokemon.health_decrease(target)

    def is_active(self, current_pokemon):
        print("{} is the active Pokemon.".format(current_pokemon))

# Create some Pokémon and Trainers and test your methods.
# Can you create Pokémon that can attack each other and deal the correct amount of damage?
# Can you create trainers that have multiple Pokémon and can switch between them?


pikachu = Pokemon("Pikachu", 1, "Electric", 35, 5, False)
charmander = Pokemon("Charmander", 2, "Fire", 39, 9, False)
dewgong = Pokemon("Dewgong", 3, "Ice", 90, 9, False)
squirtle = Pokemon("Squirtle", 4, "Water", 44, 4, False)

trainer_one = Trainer([pikachu, charmander], 1, "John", "Pikachu")

trainer_one.use_potion()
