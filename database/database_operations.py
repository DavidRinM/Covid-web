import sqlite3


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


def execute_cud(query):
    connection = create_connection('./database/covid_data.db')
    try:
        cursor = connection.cursor()
        cursor.execute(query)
        connection.commit()
    except sqlite3.Error as e:
        print(f"Error creating table {e}")
    finally:
        if connection:
            connection.close()


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





