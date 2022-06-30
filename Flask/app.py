from flask import Flask, render_template, jsonify, request
import cv2
import numpy as np
import urllib.request as req
import tensorflow as tf

app = Flask(__name__)

def read_image_from_url(url) :
    resp = req.urlopen(url)
    image = np.asarray(bytearray(resp.read()), dtype='uint8')
    image = cv2.imdecode(image, cv2.IMREAD_COLOR)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    image = cv2.resize(image, (150, 150))
    return image / 255.
model = tf.keras.models.load_model('./cat_dog_small_finetuned_modle3.h5')

def inference(image) :
    image = np.array([image])
    result = model.predict(image)
    return 'dog' if result > 0.5 else 'cat'

@app.route('/')
@app.route('/user/<name>')
def hello(name=None):
    return render_template('index.html', name=name)

@app.route('/<int:integer>')
def Integer(integer):
    return '{}, {}'.format(integer)


@app.route('/predict')
def predict():
    url = request.args.get('image')
    image = read_image_from_url(url)
    class_name = inference(image)
    return jsonify({'class_name': class_name})


if __name__ == '__main__':
    app.debug = True
    app.run()