from flask import Flask, request, jsonify
import subprocess
import os

app = Flask(__name__)

@app.route("/run-matlab", methods=['POST'])
def run_matlab():
    print("ZERO")
    try:
        print("ONE")
        # Get input parameters from the request (e.g., param1 and param2)
        param1 = request.json.get('param1')
        param2 = request.json.get('param2')
        print(request.json)
        print("TWO")

        param1_str = str(param1)
        param2_str = str(param2)

        # Assuming 'myScript' is the compiled MATLAB executable
        # result = subprocess.run(['backend/sumtest.exe', param1, param2], capture_output=True, text=True, check=True)
        result = subprocess.run(['backend/sumtest.exe', param1_str, param2_str], capture_output=True, text=True, check=True)
        # command = ['backend/sumtest.exe', str(param1), str(param2)]
        # result = subprocess.run(command, capture_output=True, text=True, check=True)

        print("THREE")
        # Return the output from the MATLAB executable
        return jsonify({
            "stdout": result.stdout,
            "stderr": result.stderr
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
