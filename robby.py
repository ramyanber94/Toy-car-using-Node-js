from gpiozero import Robot
import time

robot = Robot(left = (7, 8), right = (9, 10))
while True:
	robot.backward()
