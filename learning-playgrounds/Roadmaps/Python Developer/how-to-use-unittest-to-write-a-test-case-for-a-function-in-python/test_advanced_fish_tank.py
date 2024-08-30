import os
import unittest


class AdvancedFishTank:
    def __init__(self):
        self.fish_tank_file_name = "fish_tank.txt"
        default_contents = "shark, tuna"

        with open(self.fish_tank_file_name, "w") as f:
            f.write(default_contents)

    def empty_tank(self):
        os.remove(self.fish_tank_file_name)


class TestAdvancedFishTank(unittest.TestCase):
    def setUp(self):
        self.fish_tank = AdvancedFishTank()

    def tearDown(self):
        self.fish_tank.empty_tank()

    def test_fish_tank_file_exists(self):
        self.assertTrue(os.path.exists(self.fish_tank.fish_tank_file_name))

    def test_fish_tank_file_has_contents(self):
        with open(self.fish_tank.fish_tank_file_name, "r") as f:
            contents = f.read()

        self.assertEqual(contents, "shark, tuna")