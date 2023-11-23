# flask_api.py
from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json  # Receive data from the React frontend
    # Pass data to Streamlit and execute the analysis
    result = subprocess.check_output(['streamlit', 'run', 'streamlit_backend.py', '--', 'data', data])
    return jsonify({'result': result.decode('utf-8')})

if __name__ == '__main__':
    app.run(debug=True)
