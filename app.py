from flask import Flask, request, render_template
import joblib

app = Flask(__name__)

metrics = joblib.load('model_metrics.pkl')
color = joblib.load('color_count.pkl')
total_records = joblib.load('total_records.pkl')

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html',metrics=metrics, color = color, total_records=total_records)

if __name__ == "__main__":
    app.run(debug=True)
