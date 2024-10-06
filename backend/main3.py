import subprocess

def run_matlab_executable(param1, param2):
    # Define the command to run the executable with the parameters
    command = ['backend/sumtest.exe', str(param1), str(param2)]
    
    try:
        # Run the command and capture the output
        result = subprocess.run(command, capture_output=True, text=True, check=True)
        
        # Print the standard output from the executable
        print("Output:")
        print(result.stdout)
        
        # Print any error output (if any)
        if result.stderr:
            print("Error Output:")
            print(result.stderr)
    
    except subprocess.CalledProcessError as e:
        print(f"An error occurred while running the executable: {e}")

# Example usage
run_matlab_executable(5, 7)
