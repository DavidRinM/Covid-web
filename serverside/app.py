from flask import Flask

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0


@app.route('/test')
def test():
    test_1 = {
        'holi': 'coli'
    }
    return test_1


if __name__ == '__main__':
    app.run(debug=True)