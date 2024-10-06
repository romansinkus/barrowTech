function calcbarrow(Height_param, Load_param)
    
Height = str2double(Height_param);
loadstone_weight = str2double(Load_param);

%%Input handle pull height and expected load weight

bottom_density = 5.0;
bottom = 1.7;
bottom_rightside = 0.25;
bottom_torque_area = bottom - 2*bottom_rightside;
bottom_hyp = bottom - bottom_rightside;
torque_midpoint = bottom_torque_area/2+bottom_rightside;
front_tray_length = 1.5;
front_tray_angle = 125;
back_tray_length = 1;
back_tray_angle = 110;

%% Assume Line and Point Fulcrum wheelbarrow bottom and wheel
%% Suppose wheelbarrow bottom = 4 meters, fulcrum 1m from right edge
%% Thus, the 1+1m of bottom around fulcrum contribute zero net torque
%% Only 2.0 meters contributes cos(theta) torque from 2m from fulcrum- 
%% or 1m from left side
%% Assume 60 pounds of stones will be dumped and-
%% 5.0pounds/meter for wheelbarrow density

theta = asin(Height/bottom_hyp);
total_bottom_torque = bottom_density*cos(theta)*bottom_torque_area*torque_midpoint;

%%disp(total_bottom_torque);
%%^^torque of the bottom part that pushes CounterClockWise
%%r_x = total_bottom_torque/((loadstone_weight*cos(theta)));

%%disp(r_x)

%%disp(['The distance from the wheel without trays considered is ',num2str(r_x)]);

r_xtrays = (total_bottom_torque+(bottom_hyp+back_tray_length*0.5*sin(back_tray_angle-deg2rad(back_tray_angle)))*bottom_density*back_tray_length*abs(cos(deg2rad(back_tray_angle)-pi/2)) - (bottom_rightside+front_tray_length*0.5*cos(pi-deg2rad(front_tray_angle)))*bottom_density*front_tray_length*sin(theta))/(loadstone_weight*cos(theta));

disp(r_xtrays)

%%disp(['The distance in front of the wheel the ',num2str(loadstone_weight),'pound load should be placed with trays considered is ',num2str(r_xtrays), 'm.']);