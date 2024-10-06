from flask import Flask, request, jsonify
import os
import subprocess

app = Flask(__name__)

@app.route("/run-matlab", methods=['POST'])
def run_matlab():
    try:
        # Assuming the MATLAB script is named 'script.m'
        result = subprocess.run(['matlab', '-batch', "run('script.m')"], capture_output=True, text=True)
        return jsonify({
            "stdout": result.stdout,
            "stderr": result.stderr
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
