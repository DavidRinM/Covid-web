import sqlite3
from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
CORS(app)


def create_connection(db_file):
    """
    Create connection to a SQLite database
    :param db_file: file of database
    :return: None
    """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
    except sqlite3.Error as e:
        print(f"Error while trying to connect: {e}")

    return conn


def query_data(query):
    connection = create_connection('./database/covid_data.db')
    data = None
    try:
        cursor = connection.cursor()
        cursor.execute(query)
        data = cursor.fetchall()
    except sqlite3.Error as e:
        print(f"Error creating table {e}")
    finally:
        if connection:
            connection.close()

    return data


@app.route('/graphs/1')
def gender_data():

    query_1 = """SELECT 
                    COUNT(*) 
                FROM 
                    general
                WHERE 
                    gender = 1
                """
    women = query_data(query_1)[0][0]

    query_2 = """SELECT 
                    COUNT(*) 
                FROM 
                    general
                WHERE 
                    gender = 2
                """
    man = query_data(query_2)[0][0]

    response = {
        'total_man': man,
        'total_women': women
    }

    return response


@app.route('/graphs/2')
def patient_types():
    query_1 = """SELECT 
                        COUNT(*) 
                    FROM 
                        general
                    WHERE 
                        type = 1
                    """
    ambulatorio = query_data(query_1)[0][0]

    query_2 = """SELECT 
                        COUNT(*) 
                    FROM 
                        general
                    WHERE 
                        type = 2
                    """
    hospitalizado = query_data(query_2)[0][0]

    response = {
        'total_ambulatorio': ambulatorio,
        'total_hospitalizado':  hospitalizado
    }

    return response


@app.route('/graphs/3')
def ages():
    query = """
                SELECT 
                    COUNT(*)
                FROM 
                    general
                where 
                    age <= 20
                """
    twenty_or_less = query_data(query)[0][0]
    query = """
                SELECT 
                    COUNT(*)
                FROM 
                    general
                where 
                    age  
                BETWEEN 
                    21 and 40
                """
    between_21_and_40 = query_data(query)[0][0]
    query = """
                    SELECT 
                        COUNT(*)
                    FROM 
                        general
                    where 
                        age  
                    BETWEEN 
                        41 and 60
                    """
    between_41_and_60 = query_data(query)[0][0]

    query = """
                        SELECT 
                            COUNT(*)
                        FROM 
                            general
                        where 
                            age > 60
                        """
    more_than_60 = query_data(query)[0][0]
    response = {
      '0-20': twenty_or_less,
      '21-40':  between_21_and_40,
      '41-60':  between_41_and_60,
      '61-forward':  more_than_60
    }

    return response


@app.route('/graphs/4')
def daily_new_cases():
    query = """
                SELECT 
                    COUNT(*)
                FROM 
                    general
                where 
                    income_date = '5/25/2020'
                """
    date_25 = query_data(query)[0][0]
    query = """
                SELECT 
                    COUNT(*)
                FROM 
                    general
                where 
                    income_date = '5/24/2020'
                """
    date_24 = query_data(query)[0][0]
    query = """
                SELECT 
                    COUNT(*)
                FROM 
                    general
                where 
                    income_date = '5/23/2020'
                """
    date_23 = query_data(query)[0][0]

    query = """
                SELECT 
                    COUNT(*)
                FROM 
                    general
                where 
                    income_date = '5/22/2020'
                """
    date_22 = query_data(query)[0][0]
    query = """
                SELECT 
                    COUNT(*)
                FROM 
                    general
                where 
                    income_date = '5/21/2020'
                """
    date_21 = query_data(query)[0][0]
    response = {
        'new_5/25/2020': date_25,
        'new_5/24/2020': date_24,
        'new_5/23/2020': date_23,
        'new_5/22/2020': date_22,
        'new_5/21/2020': date_21
    }

    return response


@app.route('/graphs/5')
def daily_death_cases():
    query = """
                SELECT 
                    COUNT(*)
                FROM 
                    general
                where 
                    death_date = '5/25/2020'
                """
    date_25 = query_data(query)[0][0]
    query = """
                SELECT 
                    COUNT(*)
                FROM 
                    general
                where 
                    death_date = '5/24/2020'
                """
    date_24 = query_data(query)[0][0]
    query = """
                SELECT 
                    COUNT(*)
                FROM 
                    general
                where 
                    death_date = '5/23/2020'
                """
    date_23 = query_data(query)[0][0]

    query = """
                SELECT 
                    COUNT(*)
                FROM 
                    general
                where 
                    death_date = '5/22/2020'
                """
    date_22 = query_data(query)[0][0]
    query = """
                SELECT 
                    COUNT(*)
                FROM 
                    general
                where 
                    death_date = '5/21/2020'
                """
    date_21 = query_data(query)[0][0]
    response = {
        'death_5/25/2020': date_25,
        'death_5/24/2020': date_24,
        'death_5/23/2020': date_23,
        'death_5/22/2020': date_22,
        'death_5/21/2020': date_21
    }

    return response


@app.route('/graphs/6')
def sick_vs_death():
    query = """
            SELECT 
                COUNT(*)
            FROM 
                general
            """
    total_sick = query_data(query)[0][0]
    query = """
                SELECT 
                    COUNT(*)
                FROM 
                    general
                WHERE 
                    death_date <> '9999-99-99'
                """
    total_death = query_data(query)[0][0]
    actual_sick = int(total_sick) - int(total_death)
    response = {
      'actual_sick': actual_sick,
      'total_deaths':  total_death
    }

    return response


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80, debug=True)
