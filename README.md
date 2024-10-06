# barrowTech
Solve and visualize where to place weight in a weighbarrow to minimize effort required to lift wheelbarrow when given height and expected load.

## Description
Built with a MATLAB executable file, this program takes the change in height in picking up the wheelbarrow and your expected load and calculates a location in the wheelbarrow to place rocks to balance out the torque of 
the pickup lift, minimizing effort required of the pusher. This information is obtained through execution by the python-flask backend as an API response to calls made by the React-typescript frontend. In React, the rotation and stone placement is 
visualized. The wheelbarrow was designed and balanced in Blender. Our goal is to solve this physics problem, but also to create a framwork where constants in the MATLAB executive file can be changed to match the size, height, density and wheel (fulcrum) specificity 
of any wheelbarrow and load - calculating their optimum stone placement as well.

## Getting Started
### Dependencies
Requirements:
OS
- Windows 10
Apps
- NodeJS
- Flask
- flask_cores (Python library)
- Matlab R2024a (24.1)
### Backend setup and launch:
Inside the 'backend' directory run the command: `python app.py` to launch the back-end processes
### Frontend setup and launch:
Inside the `barrowTech` directory:
- run the command: `npm install` for the complete front-end package installation
- run the command: `npm dev run` to launch the front-end processes and 
Help
Any advise for common problems or issues.

command to run if program contains helper info
Authors
Contributors names and contact info
