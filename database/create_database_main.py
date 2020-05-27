import csv

from database_operations import execute_cud, query_data
from general_queries import drop_tables, create_table_queries, insert_values_in_catalogs


def initialize_database(query_dict):
    """
    Inserts and creates tables to initialize database.
    :param query_dict: Dictionary that holds all the first query needed.
    :return:
    """
    for key in query_dict:
        execute_cud(query_dict[key])


def insert_data_from_csv():
    query = """
            INSERT INTO general
            (
                gender, 
                type, 
                income_date, 
                initial_symptom_date,
                death_date, 
                age
            ) VALUES
            """
    with open('database/200525COVID19MEXICO.csv', newline='') as file:
        reader = csv.reader(file)
        values = []
        flag = 0
        for row in reader:
            if flag != 0:
                values_string = f"""
                                (
                                    {int(row[0])},
                                    {int(row[1])},
                                    '{row[2]}',
                                    '{row[3]}',
                                    '{row[4]}',
                                    {int(row[5])}
                                )
                                """
                values.append(values_string)
            flag += 1
    query += ', '.join(values)
    execute_cud(query)


def create_database_main():
    """
    Main handler to create complete database
    :return:
    """
    initialize_database(drop_tables)
    initialize_database(create_table_queries)
    initialize_database(insert_values_in_catalogs)
    insert_data_from_csv()


create_database_main()

